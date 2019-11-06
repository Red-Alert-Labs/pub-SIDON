import { connect } from 'react-redux';
import { loginUser } from '../../store/user';
import Login from './Login';

const mapStateToProps = state => state;

const mapDispatchToProps = {
  login: email => loginUser(email),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
