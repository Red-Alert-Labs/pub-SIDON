import React from 'react';
import GEInput from '../../../../components/Forms/GEInput';
import GEDropdown from '../../../../components/Forms/GEDropdown';

class EditUser extends React.Component {
    state ={
      formValues: {},
      loading: false,
    }

    handleChange = (e) => {
      const { formValues } = this.state;
      formValues[e.target.name] = e.target.value;
      this.setState(() => ({ formValues }));
    }

    editUser = () => {
      this.setState(state => ({ loading: !state.loading }));
    }

    render() {
      const { formValues, loading } = this.state;
      return (
        <div className="UserAdministration">
          <div className="row">
            <div className="col m6">
              <nav>
                <div className="nav-wrapper">
                  <div className="col s12">
                    <a href="user-admin.html" className="breadcrumb">User Administration</a>
                    <a className="breadcrumb active">Mario Speedwagon</a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col m6 right-align">
              <button className="waves-effect waves-light btn cancel-btn">Cancel</button>
              <button className="waves-effect waves-light btn done-btn" disabled={loading}>Done</button>
            </div>
          </div>
          <div className="user-form">
            <div className="row">
              <div className="col m6">
                <div className="user-information">
                  <div className="row">
                    <div className="col m6">
                      <h5>Mario’s Information</h5>
                    </div>
                    <div className="col m6 right-align">
                      <button className="waves-effect waves-light  btn Delete-btn">Delete User</button>
                    </div>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <GEInput
                      value={formValues.name}
                      placeholder="Name"
                      label="Name"
                      name="name"
                      onChange={this.handleChange}
                    />
                    <GEInput
                      value={formValues.email}
                      placeholder="Email Address"
                      label="Email Address"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <div className="col s12 padding-0 ">
                      <h5>System Permissions</h5>
                      <GEDropdown values={[2, 3, 4]} selected={2} />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col m6">
                <div className="user-information">
                  <div className="row">
                    <div className="col m12">
                      <h5>Bot Permissions</h5>
                    </div>
                  </div>
                </div>
                <form className="BotPermission" />
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default EditUser;
