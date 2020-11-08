import React from "react";
import "./App.css";

import TodoItem from "./components/TodoItem/TodoItem";
import TrafficLight from "./components/TrafficLight/TrafficLight";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActivePositions: 0,
      todoItems: [
        { id: 0, title: "Quánh golf", isComplete: false },
        { id: 1, title: "Đá bóng", isComplete: false },
        { id: 2, title: "Diễn xiếc", isComplete: false },
        { id: 3, title: "Coi phim", isComplete: false },
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isActivePositions:
          this.state.isActivePositions < 2
            ? this.state.isActivePositions + 1
            : 0,
      });
    }, 100000);
  }

  changeCompleteStatus = (id) => {
    const newTodoItems = this.state.todoItems.map((item) => {
      if (item.id === id) {
        const editItem = { ...item, isComplete: !item.isComplete };
        return editItem;
      } else {
        return item;
      }
    });
    this.setState({ todoItems: newTodoItems });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.todoItems.length ? (
            <div>
              {this.state.todoItems.map((item) => (
                <TodoItem
                  onPress={this.changeCompleteStatus}
                  item={item}
                  key={item.id}
                />
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
