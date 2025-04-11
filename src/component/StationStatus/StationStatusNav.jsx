import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/Third-page-nav/logo.png";
import { Link } from "react-router-dom";

const StationNavbar = () => {

  return (
    <div className="container-fluid bg-white shadow-sm p-3 rounded">
      <div className="d-flex align-items-center">
        {/* Profile Box */}
        <div
          className="profile-box d-flex align-items-center justify-content-center me-3"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            backgroundColor: "#FFC107", // Yellow background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "40px", height: "30px" }} />
        </div>

        {/* Station Info */}
        <div className="d-flex flex-column">
          <h5 className="mb-0">
            FL_LAK.1 <i className="bi bi-patch-check-fill text-primary"></i>
          </h5>
          <small className="text-muted">FL_LAK.1 • Florida, State County</small>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="d-flex flex-wrap mt-3 justfy-content-center">
        {["Alarm Status", "Connection PLC", "Inbound Service", "Outbound Service"].map((status, index) => (
          <div
            key={index}
            className="status-box d-flex flex-column align-items-center p-2 mx-2"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "8px 12px",
              textAlign: "center",
              minWidth: "120px",
              backgroundColor: "#F8F9FA",
            }}
          >
            <span className="badge bg-success">OK</span>
            <small className="text-muted">{status}</small>
          </div>
        ))}
        <div
          className="status-box d-flex flex-column align-items-center p-2 mx-2"
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "8px 12px",
            textAlign: "center",
            minWidth: "120px",
            backgroundColor: "#F8F9FA",
          }}
        >
          <span className="fw-bold">00:00:30</span>
          <small className="text-muted">Time Elapsed</small>
        </div>
        <div
          className="status-box d-flex flex-column align-items-center p-2 mx-2"
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "8px 12px",
            textAlign: "center",
            minWidth: "120px",
            backgroundColor: "#F8F9FA",
          }}
        >
          <span className="fw-bold">00:10:00</span>
          <small className="text-muted">Time Out</small>
        </div>
      </div>

      {/* Navigation Tabs */}
      {/* <ul className="nav mt-3">
        {["Station Status", "Station Id", "Alarms", "Station Info"].map((tab, index) => (
          <li key={index} className="nav-item">
            <a
              href="#"
              className={`nav-link ${index === 0 ? "active text-primary fw-bold" : "text-muted"}`}
              style={{ borderBottom: index === 0 ? "2px solid #007bff" : "none" }}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul> */}

<ul className="nav mt-3">
  {[
    { name: "Station Status", path: "/StationStatus" },
    { name: "Station Id", path: "/stationStatusEdit" },
    { name: "Alarms", path: "/StationStatusAlarmPage" },
    { name: "Station Info", path: "/station-info" },
    { name: "ota", path: "/StationStatusOta" },
  ].map((tab, index) => (
    <li key={index} className="nav-item">
      <Link
        to={tab.path}
        className={`nav-link ${index === 0 ? "active text-primary fw-bold" : "text-muted"}`}
        style={{ borderBottom: index === 0 ? "2px solid #007bff" : "none" }}
      >
        {tab.name}
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
};

export default StationNavbar;

