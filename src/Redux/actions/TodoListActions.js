//  create an action for dispatch redux
export function addTaks(task) {
  return {
    type: "ADD_TASK",
    task: task,
  };
}

export function checkTask(task) {
  return {
    type: "CHECK_TASK",
    task: task,
  };
}

export function checkAllTask(task) {
  return {
    type: "CHECK_ALL_TASK",
    task: task,
  };
}
