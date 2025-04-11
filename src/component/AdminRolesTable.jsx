// import React, { useState } from 'react'
// import pencil_img from "../assets/Admin-user/pencil-button.png"
// import busket_img from "../assets/Admin-user/busket.png"
// import AddRoleModal from './AddRoleModal';
// import iconBasket from "../assets/Admin-user/busket.png";

// function AdminRolesTable() {
//     const [isModalOpen,setIsModalOpen]=useState(false);
    
//     const roles = [
//         { id: 1, name: "Super Admin", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non vel nullam." },
//         { id: 2, name: "Admin", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non." },
//         { id: 3, name: "Safety Officer", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non vel nullam." },
//         { id: 4, name: "Supervisor", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non vel nullam. Lorem ipsum dolor sit amet consectetur. Varius porttitor." }
//     ];

//     const handleuserUpdated=()=>{
//         console.log("hallo")
//         setIsModalOpen(true)
//     }
//     return (
//         <div className="container mt-4">
//             <div className="d-flex justify-content-between mb-3">


//                 <div className="d-flex align-items-center">
//                     <h5 className="fw-bold me-3">Access Roles</h5>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search.."
//                         style={{ maxWidth: "200px" }}
//                     />
//                 </div>


//                 <button className="btn btn-primary d-flex align-items-center" onClick={handleuserUpdated}>
//                     <img src={iconBasket} alt="" className="me-2" /> Add Role
//                 </button>

//             </div>
//             <div className="table-responsive">
//                 <table className="table ">
//                     <thead className="border-bottom">
//                         <tr>
//                             <th>
//                                 <input type="checkbox" />
//                             </th>
//                             <th className="text-muted">Role Name</th>
//                             <th className="text-muted">Description</th>
//                             <th className="text-muted text-center">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {roles.map((role) => (
//                             <tr key={role.id} className="border-bottom">
//                                 <td>
//                                     <input type="checkbox" />
//                                 </td>
//                                 <td className="fw-bold">{role.name}</td>
//                                 <td>{role.description}</td>
//                                 <td className="text-center d-flex align-items-center justify-content-center gap-2">
//                                     <button className="btn btn-light btn-sm">
//                                         <img src={pencil_img} alt="Edit" />
//                                     </button>
//                                     <button className="btn btn-light btn-sm">
//                                         <img src={busket_img} alt="Delete" />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <AddRoleModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
//             </div>

//         </div>
//     )
// }

// export default AdminRolesTable


import React from 'react';
import pencil_img from "../assets/Admin-user/pencil-button.png";
import busket_img from "../assets/Admin-user/busket.png";
import AddRoleModal from './AddRoleModal';
import iconBasket from "../assets/Admin-user/busket.png";

function AdminRolesTable() {
    const roles = [
        { id: 1, name: "Super Admin", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non vel nullam." },
        { id: 2, name: "Admin", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non." },
        { id: 3, name: "Safety Officer", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non vel nullam." },
        { id: 4, name: "Supervisor", description: "Lorem ipsum dolor sit amet consectetur. Varius porttitor non amet in metus tincidunt non vel nullam. Lorem ipsum dolor sit amet consectetur. Varius porttitor." }
    ];

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center">
                    <h5 className="fw-bold me-3">Access Roles</h5>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search.."
                        style={{ maxWidth: "200px" }}
                    />
                </div>

                <button
                    className="btn btn-primary d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#addRoleModal"
                >
                    <img src={iconBasket} alt="" className="me-2" /> Add Role
                </button>
            </div>

            <div className="table-responsive">
                <table className="table ">
                    <thead className="border-bottom">
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th className="text-muted">Role Name</th>
                            <th className="text-muted">Description</th>
                            <th className="text-muted text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role) => (
                            <tr key={role.id} className="border-bottom">
                                <td><input type="checkbox" /></td>
                                <td className="fw-bold">{role.name}</td>
                                <td>{role.description}</td>
                                <td className="text-center d-flex align-items-center justify-content-center gap-2">
                                    <button className="btn btn-light btn-sm">
                                        <img src={pencil_img} alt="Edit" />
                                    </button>
                                    <button className="btn btn-light btn-sm">
                                        <img src={busket_img} alt="Delete" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal is included once at the end of the component */}
            <AddRoleModal />
        </div>
    );
}

export default AdminRolesTable;









