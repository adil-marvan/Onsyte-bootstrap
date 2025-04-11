import React from 'react'
import AdminUserPageNav from '../component/AdminUserPageNav'
import SideBar from "../component/SideBar"
import AdminUserTable from '../component/AdminUserTable'

function AdminUsersPage() {
  return (
    <div>
       <SideBar/>
       <AdminUserTable/>
    </div>
  )
}

export default AdminUsersPage