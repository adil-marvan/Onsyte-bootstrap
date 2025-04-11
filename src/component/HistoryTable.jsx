import React from "react";
import { Table, Form, Button, Pagination } from "react-bootstrap";

const StationsPage = () => {
  return (
    <div className="container mt-4 p-3" style={{ background: "#fff", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Stations</h5>
        <div className="d-flex gap-2">
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search.." className="form-control rounded-pill w-auto" style={{ minWidth: "200px" }} />
          </Form>
          <span className="fw-bold align-self-center">Period</span>
          <Form.Control type="text" placeholder="Select To and From Dates 📅" className="form-control rounded-pill w-auto" style={{ minWidth: "200px" }} />
          <Form.Check type="radio" name="period" label="Preset" className="ms-2" />
          <Form.Check type="radio" name="period" label="Current Month" className="ms-2" />
          <Form.Check type="radio" name="period" label="Past Month" className="ms-2" />
          <Button variant="primary" className="rounded-pill px-3">Show</Button>
          <Button variant="primary" className="rounded-pill px-3">Download CSV</Button>
        </div>
      </div>

      {/* Table */}
      <Table hover className="align-middle">
        <thead className="bg-light">
          <tr>
            <th>Global Id</th>
            <th>Station Id</th>
            <th>State</th>
            <th>Country</th>
            <th>ZIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Check type="radio" label="FL-APK-10" name="stationSelect" className="me-2" />
              
            </td>
            <td>FLAB07156</td>
            <td>Florida</td>
            <td>Lake County</td>
            <td>32712</td>
          </tr>
          <tr>
            <td>
              <Form.Check type="radio" label="FL-APK-10" name="stationSelect" className="me-2" />
              
            </td>
            <td>FLAB07156</td>
            <td>Florida</td>
            <td>Lake County</td>
            <td>32712</td>
          </tr>
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Button variant="light" className="border rounded-pill px-3">← Previous</Button>
        <Pagination>
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>10</Pagination.Item>
        </Pagination>
        <Button variant="light" className="border rounded-pill px-3">Next →</Button>
      </div>
    </div>
  );
};

export default StationsPage;
