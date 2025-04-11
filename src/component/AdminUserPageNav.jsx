import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AdminUserPageNav = () => {
  const navigate = useNavigate(); 

  const AccessRole = () => {
    navigate("/AdminRolePage");
  };

  const PermissionNavigate = () => {
    navigate("/PermissionPage");
  };


  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container justify-content-center">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Groups
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#" onClick={AccessRole}>
              Access Role
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Stations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#" onClick={PermissionNavigate}>
              Pesmissions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Operator
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Email Notification
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Stage Names DC
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Alarm DC
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark custom-nav-link" href="#">
              Performance
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminUserPageNav;


