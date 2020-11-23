import React, { Component } from "react";
import "./ReadMore.css";

class ReadMore extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="readmoreBoard">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    );
  }
}

export default ReadMore;
