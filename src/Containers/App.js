import React from "react";

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
