import React from 'react'
import SidebarLatest from '../component/SidebarLatest'
import StationStatusNav from "../component/StationStatus/StationStatusNav"
import SideBarStationStatus from "../component/SideBarStationStatus"
import Card from '../component/StationStatus/Card'
import BigCard from "../component/StationStatus/BigCard"
import OperationCard from '../component/StationStatus/OperationCard'

function StationStatus() {
  return (
    <div style={{backgroundColor:"#FAFAFA"}}>
        <SideBarStationStatus/>
        <div className="container px-3">
  <OperationCard />
    </div>

        
        <Card/>
        <BigCard/>
        
    </div>
  )
}

export default StationStatus