import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VesselSettings = () => {
    return (
        <div className="container my-4">
            <div className="card shadow-sm  p-4">
                <h6 className="text-primary fw-bold">Vessel</h6>

                {/* Vessel Selection */}
                <div className="mb-3">
                    <label className="form-label">Select</label>
                    <div className="row">
                        <div className="col-md-2">
                            <select className="form-select bg-white" disabled>
                                <option>825 DZ CONCRETE TANK</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="row g-3">

                    <div className="col-md-2">
                        <label className="form-label">DT HIGH LEVEL (IN)</label>
                        <input type="text" className="form-control text-center" value="48" readOnly />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">RT HIGH LEVEL (IN)</label>
                        <input type="text" className="form-control text-center" value="52" readOnly />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">P2_OFFSET</label>
                        <input type="text" className="form-control text-center" value="-3" readOnly />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">P3_OFFSET</label>
                        <input type="text" className="form-control text-center" value="-3" readOnly />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">SLOW_TIME %</label>
                        <input type="text" className="form-control text-center" value="48" readOnly />
                    </div>


                    <div className="row">
                        <div className="col-md-2">
                            <label className="form-label">DT XDUCER OFFSET</label>
                            <input type="text" className="form-control text-center" value="-3" readOnly />
                        </div>

                        <div className="col-md-2">
                            <label className="form-label">RT XDUCER OFFSET</label>
                            <input type="text" className="form-control text-center" value="-3" readOnly />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VesselSettings;
