import React, { Component } from "react";
import { getCommonCriterias } from "../services/commoncriteriaService";
import CollapseCard from "./common/collapseCard";
import CommonCriteriaForm from "./commoncriteriaForm";

class CommonCriteria extends Component {
  state = {
    commoncriterias: [],
    currentPage: 1,
    pageSize: 10,
    expandNewCard: false
  };

  async componentDidMount() {
    const { data: commoncriterias } = await getCommonCriterias();

    this.setState({ commoncriterias });
  }

  handleToggleCard = () => {
    const expandNewCard = !this.state.expandNewCard;
    this.setState({ expandNewCard });
  };

  render() {
    const { commoncriterias } = this.state;
    const fd = <CommonCriteriaForm />;
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Common Criteria</h1>
        <p className="mb-4">CWE Common Criteria</p>

        <CollapseCard
          expand={this.state.expandNewCard}
          title={"Add New"}
          onClick={this.handleToggleCard}
          cardbody={fd}
        />

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">CWE List</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CWE ID</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CWE ID</th>
                  </tr>
                </tfoot>
                <tbody>
                  {commoncriterias.map(cc => (
                    <tr key={cc.id}>
                      <td>{cc.id}</td>
                      <td>{cc.name}</td>
                      <td>{cc.cwe_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommonCriteria;
