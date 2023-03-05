import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function DeleteModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonAccept = () => {
    handleClose();
    props.deleteTask(props.task.id);
  };
  return (
    <>
      <button className="btn btn-outline-danger small" onClick={handleShow}>
        Delete
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body> Delete {props.task.name}?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleButtonAccept}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
