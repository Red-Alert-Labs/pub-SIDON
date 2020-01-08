import React from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/common/form";
import authService from "../services/authService";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.username, data.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        toast.error("Incorrect Login/password");
        let errors = { ...this.state.errors };
        errors[alert] = "Incorrect Login/password";
        this.setState({ errors });
      }
    }
  };

  render() {
    if (authService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="sign-in-form">
        <h4 className="heading-4 center-align">Sign In</h4>
        <div className="material-row">
          <form className="inner-form" onSubmit={this.handleSubmit}>
            <div className="material-row">
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderAlert("error")}
              <div className="col s12 padding-0 center-align">
                {this.renderButton("Login")}
              </div>

              <div className="col s12  center-align">
                <p className="text-center">
                  <a href="/forgot" className="ForgotPassword">
                    {" "}
                    Forgot password?{" "}
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
