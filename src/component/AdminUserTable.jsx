import React, { useState } from "react";
import { Table, Form, Button, Pagination } from "react-bootstrap";
import iconPencil from "../assets/Admin-user/pencil-button.png";
import iconBasket from "../assets/Admin-user/busket.png";
import UserModal from "./UserModal";

const UserData = [
    {
        id: "1",
        username: "rforester",
        email: "FLAB07156",
        phone: "(770) 3806892",
        access: "SuperAdmin",
        group: "OnSyte - Master",
    },
    {
        id: "4",
        username: "admin",
        email: "rvaldes@ltgec.com",
        phone: "(904) 248-8173",
        access: "SuperAdmin",
        group: "OnSyte - Master",
    },
];

function AdminUserTable() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleUser=()=>{
        setIsModalOpen(true)
    };
    return (
        <div
            className="container mt-4 p-3"
            style={{
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}

        >
            {/* Header with Search and Add User Button */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">List</h5>
                <div className="d-flex gap-2">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search.."
                            className="form-control rounded-pill w-auto"
                            style={{ minWidth: "200px" }}
                        />
                    </Form>
                    <Button className="btn btn-primary rounded-pill px-3"onClick={handleUser}>+ Add User</Button>
                </div>
            </div>

            {/* Styled Table */}
            <Table hover className="align-middle">
                <thead className="bg-light">
                    <tr>
                        <th className="py-3 fw-normal">Id</th>
                        <th className="py-3 fw-normal">User name</th>
                        <th className="py-3 fw-normal">Email</th>
                        <th className="py-3 fw-normal">Phone</th>
                        <th className="py-3 fw-normal">Access Level</th>
                        <th className="py-3 fw-normal">Group</th>
                        <th className="py-3 fw-normal">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {UserData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.access}</td>
                            <td>{user.group}</td>
                            <td className="icon d-flex gap-2">
                                <button className="border-0 bg-transparent">
                                    <img src={iconPencil} alt="Edit" className="action-icon" />
                                </button>
                                <button className="border-0 bg-transparent">
                                    <img src={iconBasket} alt="Delete" className="action-icon" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <Button variant="light" className="border rounded-pill px-3">
                    ← Previous
                </Button>
                <Pagination className="mb-0">
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>10</Pagination.Item>
                </Pagination>
                <Button variant="light" className="border rounded-pill px-3">
                    Next →
                </Button>
                <UserModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} />
            </div>
        </div>
    );
}

export default AdminUserTable;