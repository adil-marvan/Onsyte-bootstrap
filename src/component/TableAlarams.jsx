import React from "react";
import { Table, Badge, Form, Button, Pagination } from "react-bootstrap";
import filter from "../assets/Table-image/filter .png"


const alarmsData = [
  {
    time: "16/01/2025 10:31 AM",
    globalId: "FL-LAK-1",
    clientInfo: "FL-LAK-1",
    stationId: "FLAB07156",
    alarm: "WASHOUT, DT HIGH WATER, RT HIGHWATER",
    category: "Critical",
    state: "Florida",
  },
  {
    time: "26/12/2024 08:21 AM",
    globalId: "GA-WAL-1",
    clientInfo: "GA-WAL-1",
    stationId: "FLAB07156",
    alarm: "WASHOUT, DT HIGH WATER, RT HIGHWATER",
    category: "Not Critical",
    state: "Florida",
  },
];

const AlarmsTable = () => {
  return (
    <div className="container mt-4 p-3" style={{ background: "#fff", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
      {/* Header with Search and Filter */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Alarms</h5>
        <div className="d-flex gap-2">
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search..." className="form-control rounded-pill w-auto" style={{ minWidth: "200px" }} />
          </Form>
          <img src={filter} alt="" />
        </div>
      </div>

      {/* Styled Table */}
      <Table hover className="align-middle">
        <thead className="bg-light">
          <tr>
            <th className="py-3">Time</th>
            <th className="py-3">Global Id</th>
            <th className="py-3">Client Info</th>
            <th className="py-3">Station Id</th>
            <th className="py-3">Alarm</th>
            <th className="py-3">Category</th>
            <th className="py-3">State</th>
          </tr>
        </thead>
        <tbody>
          {alarmsData.map((alarm, index) => (
            <tr key={index}>
              <td>{alarm.time}</td>
              <td>{alarm.globalId}</td>
              <td>{alarm.clientInfo}</td>
              <td>{alarm.stationId}</td>
              <td className="text-danger ">{alarm.alarm}</td>
              <td>
                <Badge className=" py-2 rounded-pill" bg={alarm.category === "Critical" ? "danger" : "warning"}>
                  {alarm.category}
                </Badge>
              </td>
              <td>{alarm.state}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Button variant="light" className="border rounded-pill px-3">Previous</Button>
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

export default AlarmsTable;

