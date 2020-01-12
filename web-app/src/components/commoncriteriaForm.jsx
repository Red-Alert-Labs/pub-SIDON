import React from "react";
import Joi from "joi-browser";

import { saveCommonCriteria } from "../services/commoncriteriaService";

import Form from "./common/form";

class CommonCriteriaForm extends Form {
  state = {
    data: {
      name: "",
      cwe_id: ""
    },
    errors: {}
  };

  schema = {
    id: Joi.number(),
    name: Joi.string()
      .required()
      .label("name"),
    cwe_id: Joi.string()
      .required()
      .min(0)
      .max(10)
      .label("CWE ID")
  };

  doSubmit = async () => {
    await saveCommonCriteria(this.state.data);
    this.props.updateTable(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Common Criteria</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("cwe_id", "CWE ID")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default CommonCriteriaForm;
