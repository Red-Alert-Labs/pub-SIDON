import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormButton from '../../components/Button/FormButton';
import GEInput from '../../components/Forms/GEInput';

class Login extends React.Component {
    static propTypes = {
      login: PropTypes.func.isRequired,
    }

    state={
      formValues: {},
      loading: false,
      error: {},
    }

    static getDerivedStateFromProps(props, state) {
      if (props.userStore.user) {
        props.history.push('/dashboard');
      }
      if (props.userStore.error && state.error !== props.userStore.error) {
        return { error: props.userStore.error, loading: false };
      }
      return null;
    }

    /**
     * Login Function
     */
    loginUser = () => {
      const { login } = this.props;
      const { formValues } = this.state;
      login(formValues);

      this.setState(state => ({ loading: !state.loading }));
    }

    handleChange = (e) => {
      const { formValues } = this.state;
      formValues[e.target.name] = e.target.value;
      this.setState(() => ({ formValues }));
    }


    render() {
      const { formValues, loading, error } = this.state;
      return (
        <div className="signUp_Form">
          <h4 className="center-align">Sign In</h4>
          <div className="row">
            <form>
              <div className="row">
                <GEInput
                  value={formValues.email}
                  placeholder="Email Address"
                  label="Email Address"
                  name="email"
                  onChange={this.handleChange}
                  error={error.email}
                />
                <GEInput
                  value={formValues.password}
                  placeholder="Password"
                  label="Password"
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  error={error.password}
                />
                <FormButton type="submit" text="Sign In" onClick={this.loginUser} disabled={loading} />
                <div className="col s12  center-align">
                  <p className="center-align ">
                    <Link to="#" className="ForgotPassword"> Forgot password? </Link>
                  </p>
                </div>
              </div>
            </form>
            <div className="supportContact center-align">
              <p><Link to="#"> Contact Support </Link></p>
            </div>
          </div>
        </div>
      );
    }
}

export default Login;
