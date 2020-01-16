import React, { Component } from "react";
class ScanPanel extends Component {
  state = {
    filename: "No file selected"
  };

  handleFileChange = ({ currentTarget: input }) => {
    const filename = input.files[0].name;
    console.log(input.value);
    this.setState({ filename });
  };

  validate = () => {
    return null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="wrapper">
            <h3 className="inline">Select the Binary/Object file</h3>
          </div>
          <hr />
          <div className="wrapper">
            <div className="file-upload">
              <input name="file" type="file" onChange={this.handleFileChange} />
              <i className="fa fa-arrow-up"></i>
            </div>
          </div>
          <div className="wrapper">
            <p>{this.state.filename}</p>
          </div>
          <hr />
          <div className="wrapper">
            <h3>Select requirements</h3>
            <button className="btn btn-secondary ml-2">From List</button>
            <button className="btn btn-secondary ml-2">From File</button>
          </div>
          <hr />
          <div className="wrapper">
            <button className="btn btn-primary pl-4 pr-4">Scan</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ScanPanel;
