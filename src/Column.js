import React from "react";
import Task from "./Task";

function Column(props) {
  const {
    status,
    tasks,
    changePriority,
    changeStatus,
    deleteTask,
    statuses,
    priority,
    updateTask,
  } = props;
  return (
    <div className="col">
      <h3>{status.toUpperCase()} </h3>
      <hr />
      {tasks
        .filter((el) => el.status === status)
        .sort((el1, el2) => el1.priority - el2.priority)
        .map((el) => (
          <Task
            task={el}
            changePriority={changePriority}
            changeStatus={changeStatus}
            statuses={statuses}
            deleteTask={deleteTask}
            priority={priority}
            updateTask={updateTask}
          />
        ))}
    </div>
  );
}

export default Column;
