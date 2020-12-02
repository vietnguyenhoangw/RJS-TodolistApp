import React from "react";

// tyles
import "./App.css";

// themes
import check from "../Images/check.svg";

// components
import TodoItem from "../components/TodoItem/TodoItem";
import TrafficLight from "../components/TrafficLight/TrafficLight";
import ReadMore from "../components/ReadMore/ReadMore";

// screen
import TodoListScreen from "./TodoListScreen/TodoListScreen"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoListScreen />
        </header>
      </div>
    );
  }
}

export default App;
