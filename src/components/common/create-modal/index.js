import React from "react";
import Button from "../button";
import { Modal } from "react-bootstrap";

const CreateModal = ({ open, close, ...props }) => {
  return (
    <Modal
      show={open}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Your Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModal;
