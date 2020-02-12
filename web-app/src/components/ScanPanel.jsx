import React, { Component } from "react";
class ScanPanel extends Component {
  state = {
    file: null,
    data: {
      file: null,
      name: ""
    }
  };

  handleFileChange = ({ currentTarget: input }) => {
    const file = input.files[0];
    this.setState({ file });
  };

  validate = () => {
    return null; //TODO Return errors when there are no files
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;

    console.log("FILE ADDED");
  };

  render() {
    const { file } = this.state;
    let name = "No file selected";
    if (file) {
      name = file.name;
    }
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
            <p>{name}</p>
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
