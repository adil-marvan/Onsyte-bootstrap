import React from 'react';

const roles = ["Super Admin", "Admin", "Safety Officer", "Supervisor"];

const permissions = {
    Groups: ["View Groups", "Add Groups", "Edit Groups", "Delete Groups"],
    User: ["View User", "Add User", "Edit User", "Delete User"],
    Role: ["View Role", "Add Role", "Edit Role", "Delete Role"],
    Stations: ["View Stations", "Add Stations", "Edit Stations", "Delete Stations"]
};

const permissionMatrix = {
    "View Groups": [1, 1, 1, 1],
    "Add Groups": [1, 1, 0, 1],
    "Edit Groups": [0, 0, 0, 0],
    "Delete Groups": [0, 0, 0, 0],
    "View User": [0, 1, 1, 0],
    "Add User": [1, 1, 0, 0],
    "Edit User": [0, 1, 1, 0],
    "Delete User": [1, 0, 0, 0],
    "View Role": [0, 1, 1, 1],
    "Add Role": [0, 1, 1, 1],
    "Edit Role": [1, 0, 0, 0],
    "Delete Role": [0, 0, 0, 0],
    "View Stations": [1, 1, 1, 0],
    "Add Stations": [0, 0, 0, 0],
    "Edit Stations": [0, 0, 0, 0],
    "Delete Stations": [0, 0, 0, 0]
};

function PermissionMatrix() {
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Permissions</h5>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search.."
                    style={{ maxWidth: "200px" }}
                />
            </div>

            <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-light">
                        <tr>
                            <th className="text-start">Permission Name</th>
                            {roles.map((role, index) => (
                                <th key={index}>{role}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(permissions).map(([section, perms], i) => (
                            <React.Fragment key={i}>
                                <tr className="table-light">
                                    <td colSpan={roles.length + 1} className="fw-bold text-primary text-start">
                                        {section}
                                    </td>
                                </tr>
                                {perms.map((perm, index) => (
                                    <tr key={index}>
                                        <td className="text-start">{perm}</td>
                                        {permissionMatrix[perm].map((val, i) => (
                                            <td key={i}>
                                                <input type="checkbox" checked={val === 1} readOnly />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PermissionMatrix;




