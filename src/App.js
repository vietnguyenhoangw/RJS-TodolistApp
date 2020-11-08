import React from "react";
import "./App.css";

import TodoItem from "./components/TodoItem/TodoItem";
import TrafficLight from "./components/TrafficLight/TrafficLight";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.todoItems = [
      { title: "Quánh golf", isComplete: true },
      { title: "Đá bóng", isComplete: true },
      { title: "Diễn xiếc" },
      { title: "Coi phim" },
    ];
    this.state = { isActivePositions: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isActivePositions:
          this.state.isActivePositions < 2
            ? this.state.isActivePositions + 1
            : 0,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.todoItems.length ? (
            <div>
              {this.todoItems.map((item, index) => (
                <TodoItem item={item} key={index} />
              ))}
            </div>
          ) : (
            <div>Nothing here</div>
          )}
          <TrafficLight isActive={this.state.isActivePositions} />
        </header>
      </div>
    );
  }
}

export default App;
