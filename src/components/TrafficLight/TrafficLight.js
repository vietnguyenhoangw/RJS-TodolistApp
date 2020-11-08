import React from "react";
import "./TrafficLight.css";
import classNames from "classnames";

class TrafficLight extends React.Component {
  render() {
    const { isActive } = this.props;

    return (
      <div className={"traffic-light"}>
        <div
          className={classNames("light", "red", {
            "light-active": isActive === 0,
          })}
        />
        <div
          className={classNames("light", "yellow", {
            "light-active": isActive === 1,
          })}
        />
        <div
          className={classNames("light", "green", {
            "light-active": isActive === 2,
          })}
        />
      </div>
    );
  }
}

export default TrafficLight;
