import React from "react";

// styles
import "./TodoListScreen.css";

// themes
import check from "../../Images/check.svg";

// components
import TodoItem from "../../components/TodoItem/TodoItem";
import TrafficLight from "../../components/TrafficLight/TrafficLight";
import ReadMore from "../../components/ReadMore/ReadMore";

class TodoListScreen extends React.Component {
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
      taskInput: "",
      displayTrafficLight: false,
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
    }, 1000);
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

  onPressSubmitInput = (e) => {
    if (e.keyCode == 13) {
      if (this.state.taskInput.length) {
        const lastIdItem = this.state.todoItems[this.state.todoItems.length - 1]
          .id;
        const newItem = {
          id: lastIdItem + 1,
          title: this.state.taskInput,
          isComplete: false,
        };
        const newArray = [...this.state.todoItems, newItem];
        this.setState({ todoItems: newArray });
        this.setState({ taskInput: "" });
      } else {
        console.log(">> null kia ba");
      }
    }
  };

  onChangeText = (events) => {
    this.setState({ taskInput: events.target.value });
  };

  onClickDoneAll = () => {
    const newTodoItems = this.state.todoItems.map((item) => {
      const editItem = { ...item, isComplete: !item.isComplete };
      return editItem;
    });
    this.setState({ todoItems: newTodoItems });
  };

  onDisplayTrafficLight = () => {
    this.setState({
      displayTrafficLight: !this.state.displayTrafficLight,
    });
  };

  render() {
    return (
      <div className="App">
        {/* content 1 */}
        <header className="App-header">
          {this.state.todoItems.length ? (
            <div className="todoBoard">
              <h3>Todo list</h3>
              <h6>My first meet with ReactJS</h6>
              <div className="todoBroadHeader">
                <img
                  onClick={this.onClickDoneAll}
                  src={check}
                  width={25}
                  height={25}
                />
                <input
                  value={this.state.taskInput}
                  type="text"
                  placeholder={"Your task you need to do"}
                  onKeyUp={this.onPressSubmitInput}
                  onChange={this.onChangeText}
                />
              </div>
              {this.state.todoItems.map((item) => (
                <TodoItem
                  onPress={this.changeCompleteStatus}
                  item={item}
                  key={item.id}
                  todoBoard
                />
              ))}
            </div>
          ) : (
            <div>Nothing here</div>
          )}
        </header>

        {/* content 2 */}
        <header className="App-header">
          <ReadMore title="Read more">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
          </ReadMore>
        </header>

        {/* content 3 */}
        <header className="App-header">
          <div>
            <h3>Click this bellow arrow to see traffic light</h3>
            <div onClick={this.onDisplayTrafficLight}>
              {this.state.displayTrafficLight ? (
                <img
                  width="50px"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1MS44NDdweCIgaGVpZ2h0PSI0NTEuODQ2cHgiIHZpZXdCb3g9IjAgMCA0NTEuODQ3IDQ1MS44NDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MS44NDcgNDUxLjg0NjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI0OC4yOTIsMTA2LjQwNmwxOTQuMjgxLDE5NC4yOWMxMi4zNjUsMTIuMzU5LDEyLjM2NSwzMi4zOTEsMCw0NC43NDRjLTEyLjM1NCwxMi4zNTQtMzIuMzkxLDEyLjM1NC00NC43NDQsMA0KCQlMMjI1LjkyMywxNzMuNTI5TDU0LjAxOCwzNDUuNDRjLTEyLjM2LDEyLjM1NC0zMi4zOTUsMTIuMzU0LTQ0Ljc0OCwwYy0xMi4zNTktMTIuMzU0LTEyLjM1OS0zMi4zOTEsMC00NC43NUwyMDMuNTU0LDEwNi40DQoJCWM2LjE4LTYuMTc0LDE0LjI3MS05LjI1OSwyMi4zNjktOS4yNTlDMjM0LjAxOCw5Ny4xNDEsMjQyLjExNSwxMDAuMjMyLDI0OC4yOTIsMTA2LjQwNnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                />
              ) : (
                <img
                  width="50px"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1MS44NDdweCIgaGVpZ2h0PSI0NTEuODQ3cHgiIHZpZXdCb3g9IjAgMCA0NTEuODQ3IDQ1MS44NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MS44NDcgNDUxLjg0NzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyNS45MjMsMzU0LjcwNmMtOC4wOTgsMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcsMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3LDAtNDQuNzUxDQoJCWMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDANCgkJYzEyLjM2NSwxMi4zNTQsMTIuMzY1LDMyLjM5MiwwLDQ0Ljc1MUwyNDguMjkyLDM0NS40NDlDMjQyLjExNSwzNTEuNjIxLDIzNC4wMTgsMzU0LjcwNiwyMjUuOTIzLDM1NC43MDZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                />
              )}
            </div>
            {this.state.displayTrafficLight && (
              <TrafficLight isActive={this.state.isActivePositions} />
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default TodoListScreen;
