const initialState = {
  todoList: [{ id: 0, title: "Quánh golf", isComplete: false }],
};

export default function todoListReducers(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      const newTaskList = [...state.todoList, action.task];
      return {
        ...state,
        todoList: newTaskList,
      };
    case "CHECK_TASK":
      const changeTaskStatus = [...state.todoList].filter(
        (x) => {
          if (x.id === action.task.id) {
            return x
          }
        }
      );
      const newCheckTaskList = [...state.todoList].map((x) => {
        if (x.id !== action.task.id) {
          return x;
        } else {
          const newItem = { ...changeTaskStatus[0], isComplete: !action.task.isComplete }
          return newItem;
        }
      });
      return {
        ...state,
        todoList: newCheckTaskList,
      };
    case "CHECK_ALL_TASK":
      const newCheckAllTaskList = [...state.todoList].map((x) => {
        const newItem = { ...x, isComplete: !x.isComplete }
        return newItem;
      });
      return {
        ...state,
        todoList: newCheckAllTaskList,
      };
    default:
      return state;
  }
}
