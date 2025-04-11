import React from 'react'
import SidebarLatest from '../component/SidebarLatest'
import Card from '../component/Card'
import TableDashboard from '../component/TableDasboard'

function Dashboard() {
  return (
    <div>
      <SidebarLatest/>
      <Card/>
      <div className="flex-grow-1 p-4" style={{ marginLeft: "80px", paddingTop: "60px" }}>
                <TableDashboard/>
              </div>
    </div>
  )
}

export default Dashboard