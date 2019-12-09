import React, { Component } from "react";
import Input from "../components/common/input";
import FormButton from "../components/common/formButton";

class Login extends Component {
  state = {
    formValues: {},
    loading: false,
    error: {}
  };

  render() {
    const { formValues, loading, error } = this.state;

    return (
      <div className="signUp_Form">
        <h4 className="center-align">Sign In</h4>
        <div className="row">
          <form>
            <div className="row">
              <Input
                value={formValues.email}
                placeholder="Email Address"
                label="Email Address"
                name="email"
                onChange={this.handleChange}
                error={error.email}
              />
              <Input
                value={formValues.password}
                placeholder="Password"
                label="Password"
                name="password"
                onChange={this.handleChange}
                type="password"
                error={error.password}
              />
              <FormButton
                type="submit"
                text="Sign In"
                onClick={this.loginUser}
                disabled={loading}
              />
              <div className="col s12  center-align">
                <p className="center-align ">
                  <a href="#" className="ForgotPassword">
                    {" "}
                    Forgot password?{" "}
                  </a>
                </p>
              </div>
            </div>
          </form>
          <div className="supportContact center-align">
            <p>
              <a href="#"> Contact Support </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
