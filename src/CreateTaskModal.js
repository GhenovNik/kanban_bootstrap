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

function CreateTaskModal(props) {
  const { statuses, priority, addNewTask } = props;

  const [name, setName] = useState("");
  const [status, setStatus] = useState(statuses[0]);
  const [description, setDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState(priority[0]);

  const saveButtonHandler = () => {
    const newTask = {
      id: Math.random(),
      priority: taskPriority,
      status: status,
      name: name,
      description: description,
    };
    addNewTask(newTask);
    toggle();
  };

  const toggle = () => {
    setModal(!modal);
    setName("");
    setDescription("");
    setStatus(statuses[0]);
    setTaskPriority(priority[0]);
  };

  const [modal, setModal] = useState(false);

  return (
    <div>
      <div style={{ margin: "30px 0", textAlign: "left" }}>
        <Button color="outline-primary" onClick={toggle}>
          Create new Task
        </Button>
      </div>
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
    </div>
  );
}

export default CreateTaskModal;
