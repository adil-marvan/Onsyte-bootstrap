import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BatchDataCards = () => {
  return (
    <div className="container my-3">
      <div className="row g-3">
        
        <div className="col-md-3">
          <div className="card shadow-sm p-4" style={{ height: "220px" }}>
            <h6 className="text-primary fw-bold">Active Data</h6>
            <div className="row">
              <div className="col-6">
                <p className="text-muted mb-0 small">Current Batch Size</p>
                <h6 className="fw-bold">30 GAL</h6>
              </div>
              <div className="col-6">
                <p className="text-muted mb-0 small">Process Stage (65535)</p>
                <h6 className="fw-bold">N/A</h6>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <p className="text-muted mb-0 small">Time Elapsed (Stage)</p>
                <h6 className="fw-bold">01:23:58</h6>
              </div>
              <div className="col-6">
                <p className="text-muted mb-0 small">Time Left (Stage)</p>
                <h6 className="fw-bold">00:06:01</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3"> 
          <div className="card shadow-sm p-4" style={{ height: "220px" }}>
            <h6 className="text-primary fw-bold">Last Batch</h6>
            <div className="row">
              <div className="col-6">
                <p className="text-muted mb-0 small">Last Batch Size</p>
                <h6 className="fw-bold">30 GAL</h6>
              </div>
              <div className="col-6">
                <p className="text-muted mb-0 small">Start Time (XFER)</p>
                <h6 className="fw-bold">13:18:02</h6>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <p className="text-muted mb-0 small">End Time (DISCH)</p>
                <h6 className="fw-bold">19:33:58</h6>
              </div>
              <div className="col-6">
                <p className="text-muted mb-0 small">Batch Duration (Hours)</p>
                <h6 className="fw-bold">6.25</h6>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BatchDataCards;

