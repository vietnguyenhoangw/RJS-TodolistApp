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
      return {
        ...state,
        todoList: action.todoList,
      };
    default:
      return state;
  }
}
