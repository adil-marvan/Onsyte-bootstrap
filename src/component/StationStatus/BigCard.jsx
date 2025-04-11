import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StationDetailsCard = () => {
  return (
    <div className="container my-4">
       <div className="card shadow-sm p-2 justfy-content-begning" style={{ maxWidth: "700px",  }}>
        <div className="card-body">
          {/* Section Title */}
          <h5 className="text-primary fw-bold">Details</h5>

          {/* First Row */}
          <div className="row mt-3">
            <div className="col-md-3"><p className="text-muted mb-0">Redox</p><h6 className="fw-bold">30.23</h6></div>
            <div className="col-md-3"><p className="text-muted mb-0">pH Level</p><h6 className="fw-bold">8</h6></div>
            <div className="col-md-3"><p className="text-muted mb-0">Total Air Runtime</p><h6 className="fw-bold">36.3 C</h6></div>
            <div className="col-md-3"><p className="text-muted mb-0">Air State</p><h6 className="fw-bold">8</h6></div>
          </div>

          {/* Second Row */}
          <div className="row mt-3">
            <div className="col-md-3"><p className="text-muted mb-0">PCB Temp</p><h6 className="fw-bold">12.5 C</h6></div>
            <div className="col-md-3"><p className="text-muted mb-0">Tank Temp</p><h6 className="fw-bold">36.3 C</h6></div>
            <div className="col-md-3"><p className="text-muted mb-0">Air Current Run Time</p><h6 className="fw-bold">12:54</h6></div>
          </div>

          {/* Light Grey Section */}
          <div className="p-3 mt-3" style={{ backgroundColor: "#F8F9FA", borderRadius: "8px" }}>
            <div className="row">
              <div className="col-md-3"><p className="text-muted mb-0">Total Batches Started</p><h6 className="fw-bold">610</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">Total Batches Treated</p><h6 className="fw-bold">512</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">Total Wastewater Treated</p><h6 className="fw-bold">54,235</h6></div>
            </div>

            <div className="row mt-3">
              <div className="col-md-3"><p className="text-muted mb-0">Daily Discharge Flow (Gallons)</p><h6 className="fw-bold">345.45</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">Average Batch Size</p><h6 className="fw-bold">105.93</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">Total System Runtime (Days)</p><h6 className="fw-bold">157</h6></div>
              <div className="row mt-3">
              <div className="col-md-3"><p className="text-muted mb-0">Xfer Pump Runtime</p><h6 className="fw-bold">38.93</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">Discharge Pump Runtime</p><h6 className="fw-bold">512</h6></div>
              </div>
              <div className="row mt-3">
             
            <div className="col-md-3"><p className="text-muted mb-0">Blower Runtime</p><h6 className="fw-bold">345.45</h6></div>
            <div className="col-md-3"><p className="text-muted mb-0">Ration Pump Runtime</p><h6 className="fw-bold">157</h6></div>
            </div>
            </div>
          </div>

          {/* Another Row */}
        
          {/* Another Section */}
          <div className="p-3 mt-3 border rounded">
            <div className="row">
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 1 STATE</p><h6 className="fw-bold">ON</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 1 CURRENT ON TIME</p><h6 className="fw-bold">512</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 1 TOTAL RUNTIME</p><h6 className="fw-bold">12:12</h6></div>
            </div>

            <div className="row mt-3">
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 2 STATE</p><h6 className="fw-bold">345.45</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 2 CURRENT ON TIME</p><h6 className="fw-bold">105.93</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 2 TOTAL RUNTIME</p><h6 className="fw-bold">157</h6></div>
            </div>

            <div className="row mt-3">
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 3 STATE</p><h6 className="fw-bold">38.93</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 3 CURRENT ON TIME</p><h6 className="fw-bold">512</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">PUMP 3 TOTAL RUNTIME</p><h6 className="fw-bold">54,235</h6></div>
            </div>

            <div className="row mt-3">
              <div className="col-md-3"><p className="text-muted mb-0">TANK 2 PRESSURE (GALLONS)</p><h6 className="fw-bold">345.45</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">TANK 3 PRESSURE (GALLONS)</p><h6 className="fw-bold">105.93</h6></div>
              <div className="col-md-3"><p className="text-muted mb-0">TANK 2 LEVEL (INCHES)</p><h6 className="fw-bold">157</h6></div>
            </div>

            <div className="row mt-3">
              <div className="col-md-3"><p className="text-muted mb-0">TANK 3 LEVEL (INCHES)</p><h6 className="fw-bold">38.93</h6></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationDetailsCard;
