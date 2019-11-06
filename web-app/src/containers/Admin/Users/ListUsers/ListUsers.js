import React from 'react';
import PropTypes from 'prop-types';

class ListUsers extends React.Component {
  static propTypes = {
    userList: PropTypes.func,
    userListStore: PropTypes.object,
  }

  componentDidMount() {
    const { userList } = this.props;
    userList();
  }

  render() {
    // const { userListStore } = this.props;
    return (
      <div className="UserAdministration">
        <div className="row">
          <div className="col m6">
            <nav>
              <div className="nav-wrapper">
                <div className="col s12">
                  <a className="breadcrumb">Dasboard</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUsers;
