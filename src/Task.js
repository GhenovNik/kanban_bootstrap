import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import UpdateTaskModal from "./UpdateTaskModal";
import { Button } from "reactstrap";

function Task(props) {
  const {
    task,
    changePriority,
    changeStatus,
    deleteTask,
    statuses,
    priority,
    updateTask,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="card w-auto">
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>
        <p>Priority: </p>
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={() => changePriority(task.id, "up")}
          disabled={task.priority === 10}
        >
          ↑
        </button>{" "}
        <>{task.priority}</>{" "}
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={() => changePriority(task.id, "down")}
          disabled={task.priority <= 1}
        >
          ↓
        </button>
        <hr />
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={() => changeStatus(task.id, -1, task.status)}
          disabled={statuses.indexOf(task.status) === 0}
        >
          ←
        </button>{" "}
        <Button color="outline-primary" size="sm" onClick={toggle}>
          Update
        </Button>
        {modal && (
          <UpdateTaskModal
            priority={priority}
            statuses={statuses}
            task={task}
            toggle={toggle}
            modal={modal}
            updateTask={updateTask}
          />
        )}{" "}
        <DeleteModal task={task} deleteTask={deleteTask} />{" "}
        <button
          type="button"
          className="btn btn-outline-primary "
          onClick={() => changeStatus(task.id, 1, task.status)}
          disabled={statuses.indexOf(task.status) === statuses.length - 1}
        >
          →
        </button>
        <hr />
      </div>
    </div>
  );
}

export default Task;
