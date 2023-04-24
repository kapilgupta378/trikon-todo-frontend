import React from "react";
import Button from "../button";
import { Form, InputGroup, Modal } from "react-bootstrap";

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
      <Modal.Body className="my-auto mx-auto w-50 py-5 px-5">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Task Name</InputGroup.Text>
          <Form.Control
            type="text"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Comment</InputGroup.Text>
          <Form.Control
            type="text"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModal;
