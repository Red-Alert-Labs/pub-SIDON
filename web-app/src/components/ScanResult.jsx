import React, { Component } from "react";
import Card from "./common/Card";
import ResultBar from "./common/ResultBar";
import { getScan } from "../services/scansService";
import { getResult } from "../services/resultService";

class ScanResult extends Component {
  state = {
    scan: null,
    results: []
  };

  async componentDidMount() {
    const scanId = this.props.match.params.id;

    try {
      const { data: scan } = await getScan(scanId);
      if (scan) {
        this.setState({ scan });
      }
      const { data: results } = await getResult(scanId);
      console.log(results);
      if (results) {
        this.setState({ results });
      }
    } catch (ex) {
      console.log("Handle the error");
    }
  }
  render() {
    let { results } = this.state;
    if (results == null) {
      results = [];
    }
    return (
      <div className="container-fluid">
        <Card
          title="Scan Result"
          body={
            <React.Fragment>
              {results.map(result => (
                <ResultBar
                  key={result.commonCriteria.id}
                  title={result.commonCriteria.name}
                  value={result.score}
                />
              ))}
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

export default ScanResult;
