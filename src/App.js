import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoItem from "./components/TodoItem";

class App extends React.Component {
  constructor() {
    super();
    this.todoItems = [
      "Quánh golf",
      "Đá bóng",
      "Đá bóng",
      "Diễn xiếc",
      "Coi phim",
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.todoItems.map((item, index) => (
            <TodoItem title={item} key={index} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
