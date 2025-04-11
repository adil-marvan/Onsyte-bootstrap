import React from "react";
import { FaPlay, FaBell, FaPause, FaTimes, FaRedo, FaForward } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const OperationCard = () => {
  return (
    <div
      className="card p-3 shadow-sm"
      style={{ maxWidth: "650px", fontSize: "14px", borderRadius: "12px" }}
    >
      
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="text-primary fw-bold mb-0">Operations</h6>
        <div className="d-flex align-items-center">
          <span className="me-1">Auto</span>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="autoSwitch" />
          </div>
        </div>
      </div>

      
      <div className="d-flex flex-wrap mt-2 align-items-center">
        <button className="btn btn-success btn-sm d-flex align-items-center me-2 rounded-pill px-3">
          <FaPlay className="me-1" size={12} /> Start OK
        </button>
        <button className="btn btn-light btn-sm text-dark d-flex align-items-center border rounded-pill px-3">
          <FaBell className="me-1 text-secondary" size={12} /> Alarm
        </button>
      </div>

      
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-success btn-sm active me-2 rounded px-3">XFER</button>
        <button className="btn btn-secondary btn-sm me-2 rounded px-3">DISCH</button>
        <button className="btn btn-secondary btn-sm me-2 rounded px-3">AERATE</button>
        <button className="btn btn-secondary btn-sm rounded px-3">RATION</button>
      </div>

    
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-outline-primary btn-sm me-2 rounded-pill px-3">
          <FaPause className="me-1" size={12} /> Pause
        </button>
        <button className="btn btn-outline-danger btn-sm me-2 rounded-pill px-3">
          <FaTimes className="me-1" size={12} /> Abort
        </button>
        <button className="btn btn-outline-success btn-sm me-2 rounded-pill px-3">
          <FaRedo className="me-1" size={12} /> Reset
        </button>
        <button className="btn btn-outline-warning btn-sm rounded-pill px-3">
          <FaForward className="me-1" size={12} /> Skip
        </button>
      </div>
    </div>
  );
};

export default OperationCard;




