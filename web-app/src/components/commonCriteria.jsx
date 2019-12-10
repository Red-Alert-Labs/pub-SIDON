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
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Common Criteria</h1>
        <p class="mb-4">CWE Common Criteria</p>

        <CollapseCard
          expand={this.state.expandNewCard}
          title={"Add New"}
          onClick={this.handleToggleCard}
          cardbody={fd}
        />

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">CWE List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
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
                    <tr>
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
