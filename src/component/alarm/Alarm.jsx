import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AlarmPage.css"; // Custom CSS for styling

const alarms = [
  { id: "OS9", label: "WASHOUT", severity: "serious" },
  { id: "DT1", label: "CLEANOUT FAILURE", severity: "minor" },
  { id: "FL1", label: "DT HIGH WATER", severity: "minor" },
  { id: "FL2", label: "RT HIGH WATER", severity: "minor" },
  { id: "XF9", label: "TRANSFER FAILURE", severity: "minor" },
  { id: "DS9", label: "DISCHARGE FAILURE", severity: "minor" },
  { id: "WS9", label: "WASTING FAILURE", severity: "serious" },
  { id: "DX9", label: "DT XDUCER FAILURE", severity: "serious" },
  { id: "RX9", label: "RT XDUCER FAILURE", severity: "severe" },
  { id: "RA9", label: "RATION FAILURE", severity: "minor" },
  { id: "OS9", label: "SPARE", severity: "serious" },
  { id: "XXX", label: "SPARE", severity: "minor" },
  { id: "XXX", label: "SPARE", severity: "serious" },
  { id: "XXX", label: "SPARE", severity: "minor" },
  { id: "XXX", label: "SPARE", severity: "minor" },
];

const AlarmPage = () => {
  return (
    <Container className="mt-4 alarm-container">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold text-primary">Details</h5>
        <Button variant="danger" className="reset-btn">
          Reset All Alarms
        </Button>
      </div>

      {/* Alarm Grid */}
      <Row className="mt-3">
        {alarms.map((alarm, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <div className={` ${alarm.severity}`}>
              <div className="alarm-circle">{alarm.id}</div>
              <div className="alarm-label">{alarm.label}</div>
              <div className={`severity-label ${alarm.severity}`}>
                {alarm.severity.toUpperCase()}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlarmPage;
