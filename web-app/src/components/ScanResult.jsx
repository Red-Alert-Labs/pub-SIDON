import React, { Component } from "react";
import Card from "./common/Card";
import ResultBar from "./common/ResultBar";
import { getScan } from "../services/scansService";

class ScanResult extends Component {
  state = {
    results: []
  };

  async componentDidMount() {
    const scanId = this.props.match.params.id;

    try {
      const { data } = await getScan(scanId);
      if (data) {
        console.log(data);
        const { results } = data;
        console.log(results);
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
                  key={result.id}
                  title={result.name}
                  value={result.score}
                />
              ))}
              <ResultBar key={7} title={"Invalid pointer"} value={55} />
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

export default ScanResult;
