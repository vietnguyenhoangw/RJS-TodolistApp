import React from "react";
import "./App.css";

import TodoItem from "./components/TodoItem";

class App extends React.Component {
  constructor() {
    super();
    this.todoItems = [
      {title: "Quánh golf", isComplete: true},
      {title: "Đá bóng", isComplete: true},
      {title: "Diễn xiếc"},
      {title: "Coi phim"},
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.todoItems.map((item, index) => (
            <TodoItem item={item} key={index} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
