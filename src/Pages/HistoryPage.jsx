import React from "react";
import SidebarLatest from "../component/SidebarLatest";
import Card from "../component/Card";
import HistoryTable from "../component/HistoryTable";

function HistoryPage() {
  return (
    <div style={{ backgroundColor: "#FAFAFA", minHeight: "100vh", padding: "20px" }}>
      <SidebarLatest />
      <Card />
      <HistoryTable />
    </div>
  );
}

export default HistoryPage;
