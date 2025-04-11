import React from 'react'
import Card from '../component/Card'
import SideBar from '../component/SideBar'
import NavBar from '../component/NavBar'
import SidebarLatest from '../component/SidebarLatest'
import TableAlarams from '../component/TableAlarams'

function Alarms() {
  return (
    <div>
       
        <SidebarLatest/>
        <Card/>
        <TableAlarams/>
        
        
        
        
    </div>
  )
}

export default Alarms