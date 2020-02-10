import React, { Component } from "react";
import Card from "./common/Card";
import ResultsTable from "./resultsTable";
import { getScans } from "../services/scansService";

const fakeData = [
  { id: 1, name: "DoorLock.bin", date: "12/12/2021" },
  { id: 2, name: "SevenSensor", date: "09/12/2021" },
  { id: 3, name: "DoorLock.bin", date: "12/12/2021" },
  { id: 4, name: "Heater.bin", date: "19/08/2020" },
  { id: 5, name: "DarkLight.bin", date: "01/08/2021" }
];

class ScanResults extends Component {
  state = {
    scans: []
  };

  async componentDidMount() {
    const { data: scans } = await getScans();
    this.setState({ scans });
  }
  render() {
    return (
      <div className="container-fluid">
        <Card
          title="Results"
          body={<ResultsTable scans={this.state.scans} />}
        />
      </div>
    );
  }
}

export default ScanResults;
