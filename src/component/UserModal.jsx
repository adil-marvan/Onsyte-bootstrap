import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function AddUserModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="text-primary fw-bold">Add User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="username">
                <Form.Label className="fw-bold">User Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label className="fw-bold">Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="phone">
                <Form.Label className="fw-bold">Phone:</Form.Label>
                <Form.Control type="text" placeholder="Enter" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="accessLevel">
                <Form.Label className="fw-bold">Access Level:</Form.Label>
                <Form.Control type="text" placeholder="Enter" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="group">
                <Form.Label className="fw-bold">Group:</Form.Label>
                <Form.Control type="text" placeholder="Enter" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="password">
                <Form.Label className="fw-bold">Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="retypePassword">
                <Form.Label className="fw-bold">Password (Retype):</Form.Label>
                <Form.Control type="password" placeholder="Enter" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={onClose} className="fw-bold">
          Cancel
        </Button>
        <Button variant="light" className="fw-bold">
          Reset
        </Button>
        <Button variant="primary" className="fw-bold">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddUserModal;
