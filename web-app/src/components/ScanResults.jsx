import React, { Component } from "react";
import Card from "./common/Card";
import ResultsTable from "./resultsTable";

const fakeData = [
  { id: 1, name: "DoorLock.bin", date: "12/12/2021" },
  { id: 2, name: "SevenSensor", date: "09/12/2021" },
  { id: 3, name: "DoorLock.bin", date: "12/12/2021" },
  { id: 4, name: "Heater.bin", date: "19/08/2020" },
  { id: 5, name: "DarkLight.bin", date: "01/08/2021" }
];

class ScanResults extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Card title="Results" body={<ResultsTable scans={fakeData} />} />
      </div>
    );
  }
}

export default ScanResults;
