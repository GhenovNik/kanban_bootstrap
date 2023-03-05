import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";

function UpdateTaskModal(props) {
  const { statuses, modal, task, toggle, updateTask, priority } = props;
  const [name, setName] = useState(task.name);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description);
  const [taskPriority, setTaskPriority] = useState(task.priority);

  const saveButtonHandler = () => {
    const updatedTask = {
      id: task.id,
      priority: +taskPriority,
      status: status,
      name: name,
      description: description,
    };
    updateTask(updatedTask);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <div>
          <InputGroup>
            <InputGroupText>Task Name</InputGroupText>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupText>Task Description</InputGroupText>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupText>Task Status</InputGroupText>
            <select
              className="form-select"
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {statuses.map((el, i) => (
                <option value={el} key={i}>
                  {el}
                </option>
              ))}
            </select>
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupText>Priority</InputGroupText>
            <input
              min="1"
              max="10"
              type="number"
              id="typeNumber"
              className="form-control"
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            />
          </InputGroup>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveButtonHandler}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default UpdateTaskModal;
