import React from 'react'
import SideBar from "../component/SideBar"
import SidebarLatest from '../component/SidebarLatest'
import AdminStationTable from "../component/AdminStationTable"

function AdminStation() {
  return (
    <div>
        <SideBar/>
        <AdminStationTable/>
    </div>
  )
}

export default AdminStation