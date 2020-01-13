import React, { Component } from "react";
import CollapseCard from "./common/collapseCard";
import { getRequirements } from "../services/requirements";

class Requirements extends Component {
  state = { requirements: [] };

  async componentDidMount() {
    const { data: requirements } = await getRequirements();
    if (requirements) this.setState({ requirements });
  }

  render() {
    const { requirements } = this.state;
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Requirements List</h1>
        <p className="mb-4">Preset common criteria collections</p>
        <div className="container-fluid">
          {requirements.map(requirement => (
            <CollapseCard title={requirement.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Requirements;
