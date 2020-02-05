import React, { Component } from "react";
import Card from "./common/Card";
import Table from "./common/table";

class ScanResults extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Card
          title="Results"
          body={<Table headers={["Hey", "Foo", "br"]} contents={[["Hey"]]} />}
        />
      </div>
    );
  }
}

export default ScanResults;
