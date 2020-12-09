import React, { Component } from "react";
import check from "../../Images/check.svg";
import uncheck from "../../Images/uncheck.svg";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { item, onPress } = this.props;

    // using clasic way
    // let className = "TodoItem";
    // if (item.isComplete) {
    //   className += " TodoItem-complete";
    // }

    // using classnames library
    var classNames = require("classnames");
    var titleClassNames = classNames({
      TodoItem: true,
      "TodoItem-complete": item.isComplete,
    });

    return (
      <div onClick={() => onPress(item)} className={titleClassNames}>
        <img src={item.isComplete ? check : uncheck} width={25} height={25}/>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
