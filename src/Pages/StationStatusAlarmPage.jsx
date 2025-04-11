import React from 'react'
import StationStatusNav from "../component/StationStatus/StationStatusNav"
import AlarmPage from '../component/alarm/Alarm'
import SideBarStationStatus from "../component/SideBarStationStatus"

function StationStatusAlarmPage() {
  return (
    <div >
        
        <SideBarStationStatus/>
        <AlarmPage/>

    </div>
  )
}

export default StationStatusAlarmPage