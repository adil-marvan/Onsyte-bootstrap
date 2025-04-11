import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import filter from "../assets/Table-image/filter .png"

function TableDashboard() {
  return (
    <div className="container-fluid p-3">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">
          All Stations <span className="text-primary">(100 entries)</span>
        </h5>
        <div className="d-flex gap-2">
          <input type="text" className="form-control search-bar" placeholder="Search..." />
          <button className="btn btn-light filter-btn">
            <img src={filter} alt="" />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-hover align-middle custom-table">
          <thead className="table-light">
            <tr>
              <th>Global Id and Mod</th>
              <th>Client Info</th>
              <th>Permit No</th>
              <th>Connection</th>
              <th>Alarm</th>
              <th>State</th>
              <th>Country</th>
              <th>Zip</th>
              <th>Daily Capacity</th>
              <th>Daily Flow</th>
              <th>RTL</th>
              <th>DTL</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Data */}
            <tr>
              <td>FL-LAK-1</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-dark">Online</span></td>
              <td></td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>121.00</td>
              <td>121.00</td>
              <td>121.00</td>
            </tr>
        
            <tr>
              <td>FL-LAK-8</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-danger">Online</span></td>
              <td></td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>150.00</td>
              <td>150.00</td>
              <td>150.00</td>
            </tr>
          
            <tr>
              <td>FL-LAK-8</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-light">Online</span></td>
              <td></td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>150.00</td>
              <td>150.00</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td>FL-LAK-8</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-success">Online</span></td>
              <td></td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>150.00</td>
              <td>150.00</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td>FL-LAK-8</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-success">Online</span></td>
              <td></td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>150.00</td>
              <td>150.00</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td>FL-LAK-8</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-light">Online</span></td>
              <td></td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>150.00</td>
              <td>150.00</td>
              <td>150.00</td>
            </tr>
            <tr>
              <td>FL-LAK-6</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-success">Online</span></td>
              <td className="text-danger fw-bold">CRITICAL</td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>70.5</td>
              <td>70.5</td>
              <td>70.5</td>
            </tr>
            <tr>
              <td>FL-LAK-8</td>
              <td>FL-LAK-1</td>
              <td>FLAB07156</td>
              <td><span className="badge bg-success">Online</span></td>
              <td></td>
              <td>Florida</td>
              <td>Lake County</td>
              <td>32757</td>
              <td>400</td>
              <td>150.00</td>
              <td>150.00</td>
              <td>150.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDashboard;
