import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage'
import Dashboard from './Pages/Dashboard';
import Alarms from './Pages/Alarms';
import HistoryPage from './Pages/HistoryPage';
import AdminUsersPage from './Pages/AdminUsersPage';
import AdminSation from './Pages/AdminStation';
import AdminStation from './Pages/AdminStation';
import StationStatus from './Pages/StationStatus';
import StationStatusEdit from './Pages/StationStatusEdit';
import StatioStatusOta from './Pages/StatioStatusOta';
import StationStatusAlarmPage from './Pages/StationStatusAlarmPage';
import AdminRolePage from './Pages/AdminRolePage';
import PermissionsPage from './Pages/PermissionsPage';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Alarms" element={<Alarms/>}/>
      <Route path='/HistoryPage'element={<HistoryPage/>}/>
      <Route path="/AdminUserPage" element={<AdminUsersPage/>}/>
      <Route path='/AdminStationPage' element={<AdminStation/>}/>
      <Route path="/StationStatus"  element={<StationStatus/>}/>
      <Route path='/stationStatusEdit'element={<StationStatusEdit/>}/>
      <Route path='/StationStatusOta'element={< StatioStatusOta/>}/>
      <Route path='/StationStatusAlarmPage' element={<StationStatusAlarmPage/>}/>
      <Route path='/AdminRolePage' element={<AdminRolePage/>}/>
      <Route path='/PermissionPage' element={<PermissionsPage/>}/>
     
    </Routes>
  </Router>
   
  )
}

export default App