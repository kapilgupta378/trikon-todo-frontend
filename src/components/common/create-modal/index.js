import React, { useState } from "react";
import Button from "../button";
import { FloatingLabel, Form, InputGroup, Modal } from "react-bootstrap";
import moment from "moment";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const initialData = { taskName: "", comment: "" };

const CreateModal = ({ open, onHide, submitTask, ...props }) => {
  const [todoData, setTodoData] = useState(initialData);

  const handleSubmit = () => {
    try {
      if (!todoData.taskName || !todoData.comment)
        throw new Error("Please all details");
      const formattedDate = moment().format("YYYY-MM-DD HH:mm:ss").toString();
      const taskDetails = { ...todoData, date: formattedDate };
      // sending data to parent com.
      submitTask(taskDetails);
      // reset input felid
      setTodoData(initialData);
      // closing modal
      onHide();
    } catch (error) {
      toast.error(error.toString().slice(7));
    }
  };
  return (
    <Modal
      onHide={onHide}
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
      <Modal.Body className="my-auto mx-auto w-80 py-5 px-5">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Task Name</InputGroup.Text>
          <Form.Control
            value={todoData.taskName}
            name="taskName"
            onChange={(e) =>
              setTodoData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type="text"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            value={todoData.comment}
            name="comment"
            onChange={(e) =>
              setTodoData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

CreateModal.propTypes = {
  open: PropTypes.bool,
  onHide: PropTypes.func,
  submitTask: PropTypes.func,
};

export default CreateModal;
