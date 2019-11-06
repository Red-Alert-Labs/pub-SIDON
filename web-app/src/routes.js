import React from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftBar from './components/LeftBar';
import Loader from './components/Loader';
import {
  Login
} from './containers';
import {
  ListUsers,
} from './containers/Admin';

import RequireAuth from './utils/requireAuth';


const Routes = ({ user }) => (
  <Router basename={'/cryptrons-frontend/'}>
    <div>
      <Loader />
      

      <div className="GlobalData_Center">
        
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={RequireAuth(ListUsers)} showRight={false} />
      </div>
      {user
          && (
            <LeftBar/>
            )
      }

           </div>
  </Router>
);

Routes.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ userStore }) => userStore;

export default connect(mapStateToProps)(Routes);
