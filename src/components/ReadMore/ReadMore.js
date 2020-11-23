import React, { Component } from "react";
import "./ReadMore.css";
import PropTypes from 'prop-types';

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

ReadMore.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default ReadMore;
