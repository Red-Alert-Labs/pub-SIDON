import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const { title, body } = this.props;
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold">{title}</h6>
        </div>

        <div className="card-body">{body}</div>
      </div>
    );
  }
}

export default Card;
