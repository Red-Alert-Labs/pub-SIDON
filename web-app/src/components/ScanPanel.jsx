import React, { Component } from "react";
import { saveScan } from "../services/scansService";
class ScanPanel extends Component {
  state = {
    file: null,
    requirements: null
  };

  handleFileChange = ({ currentTarget: input }) => {
    const file = input.files[0];
    this.setState({ file });
  };

  processFile = e => {
    const content = e.target.result;
    const requirements = JSON.parse(content);
    this.setState({ requirements });
  };

  loadFile = file => {
    const fileData = new FileReader();
    fileData.onloadend = this.processFile;
    fileData.readAsText(file);
  };

  handleRcFileChange = ({ currentTarget: input }) => {
    const rcFile = input.files[0];
    this.loadFile(rcFile);
  };

  validate = () => {
    const { file, requirements } = this.state;
    if (file === null || requirements === null) {
      return 1;
    }
    return null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;

    this.doSubmit();
  };

  doSubmit = async () => {
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("name", this.state.file.name);
    formData.append("requirements", this.state.requirements);
    try {
      const { data, status } = await saveScan(formData);
      console.log("Uploaded" + status);
      if (status === 201) {
        console.log(this.props.history);
        this.props.history.push("/scans/" + data.id);
      } else {
        console.log("No status");
      }
    } catch (ex) {
      if (ex.response) console.log("Upload failed ERROR");
    }
  };

  render() {
    const { file } = this.state;
    let name = "No file selected";
    if (file) {
      name = file.name;
    }

    let requirements = "Select Requirements";

    if (this.state.requirements) {
      requirements = this.state.requirements.length + " Requirements";
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
            <h3>{requirements}</h3>
            <button className="btn btn-secondary ml-2">From List</button>
            <div className="upload-btn-wrapper">
              <button className="btn btn-secondary ml-2">From File</button>
              <input
                name="ccfile"
                type="file"
                accept=".json"
                onChange={this.handleRcFileChange}
              />
            </div>
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
