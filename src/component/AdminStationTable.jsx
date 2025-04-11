import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StationsTable = () => {
  const stations = [
    {
      id: 1,
      detailId: "FL-LAK-1",
      clientId: "C10-1091-V2",
      stationNo: "FLA08756",
      description: "Florida",
      operator: "Lake County",
      permitNo: "32757",
      modelNo: "400",
      state: "112.00",
      actions: "112.00",
      zip: "12100",
      latitude: "12100",
      county: "12100",
    },
    {
      id: 2,
      detailId: "FL-LAK-2",
      clientId: "C10-1091-V2",
      stationNo: "FLA08756",
      description: "Florida",
      operator: "Lake County",
      permitNo: "32757",
      modelNo: "25.5",
      state: "85.00",
      actions: "85.00",
      zip: "85.00",
      latitude: "85.00",
      county: "65.00",
    },
    {
      id: 3,
      detailId: "FL-LAK-3",
      clientId: "C10-1091-V2",
      stationNo: "FLA08756",
      description: "Florida",
      operator: "Lake County",
      permitNo: "32757",
      modelNo: "400",
      state: "80.00",
      actions: "80.00",
      zip: "80.00",
      latitude: "80.00",
      county: "60.00",
    },
    {
        id: 3,
        detailId: "FL-LAK-3",
        clientId: "C10-1091-V2",
        stationNo: "FLA08756",
        description: "Florida",
        operator: "Lake County",
        permitNo: "32757",
        modelNo: "400",
        state: "80.00",
        actions: "80.00",
        zip: "80.00",
        latitude: "80.00",
        county: "60.00",
      },
      {
        id: 3,
        detailId: "FL-LAK-3",
        clientId: "C10-1091-V2",
        stationNo: "FLA08756",
        description: "Florida",
        operator: "Lake County",
        permitNo: "32757",
        modelNo: "400",
        state: "80.00",
        actions: "80.00",
        zip: "80.00",
        latitude: "80.00",
        county: "60.00",
      },
      {
        id: 3,
        detailId: "FL-LAK-3",
        clientId: "C10-1091-V2",
        stationNo: "FLA08756",
        description: "Florida",
        operator: "Lake County",
        permitNo: "32757",
        modelNo: "400",
        state: "80.00",
        actions: "80.00",
        zip: "80.00",
        latitude: "80.00",
        county: "60.00",
      },
      {
        id: 3,
        detailId: "FL-LAK-3",
        clientId: "C10-1091-V2",
        stationNo: "FLA08756",
        description: "Florida",
        operator: "Lake County",
        permitNo: "32757",
        modelNo: "400",
        state: "80.00",
        actions: "80.00",
        zip: "80.00",
        latitude: "80.00",
        county: "60.00",
      },
      {
        id: 3,
        detailId: "FL-LAK-3",
        clientId: "C10-1091-V2",
        stationNo: "FLA08756",
        description: "Florida",
        operator: "Lake County",
        permitNo: "32757",
        modelNo: "400",
        state: "80.00",
        actions: "80.00",
        zip: "80.00",
        latitude: "80.00",
        county: "60.00",
      },
      {
        id: 3,
        detailId: "FL-LAK-3",
        clientId: "C10-1091-V2",
        stationNo: "FLA08756",
        description: "Florida",
        operator: "Lake County",
        permitNo: "32757",
        modelNo: "400",
        state: "80.00",
        actions: "80.00",
        zip: "80.00",
        latitude: "80.00",
        county: "60.00",
      },
  ];

  return (
    <div className="container mt-4">
      
     

      {/* Table Section */}
      <div className=" mt-3">
        <div className="card-body">
          <h5 className="mb-3 fw-bold">Stations</h5>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="">
                <tr className="text-uppercase text-secondary small">
                  <th>Id</th>
                  <th>Global id</th>
                  <th>Client Info</th>
                  <th>Station #</th>
                  <th>Description</th>
                  <th>Operator</th>
                  <th>Permit No</th>
                  <th>Model No</th>
                  <th>State</th>
                  <th>Actions</th>
                  <th>Zip</th>
                  <th>Latitude</th>
                  <th>County</th>
                </tr>
              </thead>
              <tbody>
  {stations.map((station, index) => (
    <tr key={index} className={`${index % 2 === 0 ? "even-row table-light" : "odd-row"}`}>
      <td>{station.id}</td>
      <td>{station.detailId}</td>
      <td>{station.clientId}</td>
      <td>{station.stationNo}</td>
      <td>{station.description}</td>
      <td>{station.operator}</td>
      <td>{station.permitNo}</td>
      <td>{station.modelNo}</td>
      <td>{station.state}</td>
      <td>{station.actions}</td>
      <td>{station.zip}</td>
      <td>{station.latitude}</td>
      <td>{station.county}</td>
    </tr>
  ))}
</tbody>


               
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationsTable;
