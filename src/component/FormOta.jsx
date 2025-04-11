import React from "react";

function FormOta() {
  return (
    <div className="container mt-3 p-3 shadow-lg  rounded bg-white">
      <h4 className="mb-3">Over-The-Air</h4>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="stationId" className="form-label">STATION ID</label>
          <input type="text" className="form-control" id="stationId" value="FL_LAK.9" disabled />
        </div>

        <div className="col-md-4">
          <label htmlFor="controllerSerial" className="form-label">CONTROLLER SERIAL NO</label>
          <input type="text" className="form-control" id="controllerSerial" value="18587" disabled />
        </div>

        <div className="col-md-6">
          <label htmlFor="firmwareVersion" className="form-label">Firmware Version</label>
          <input type="text" className="form-control" id="firmwareVersion" placeholder="Enter" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" placeholder="Enter" rows="5"></textarea>
        </div>

        <div className="col-md-6">
          <label htmlFor="fileUpload" className="form-label">File Upload</label>
          <div className="input-group">
            <input type="text" className="form-control" id="fileUpload" placeholder="Choose file" readOnly />
            <button className="btn btn-primary" type="button">Browse</button>
          </div>
        </div>

        <div className="col-12 text-end">
          <button className="btn btn-primary" type="submit">Install Firmware</button>
        </div>
      </form>
    </div>
  );
}

export default FormOta;
