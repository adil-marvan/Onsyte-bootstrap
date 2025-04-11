import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import bell from "../assets/Nav-image/alarm-bell.1.png";
import message from "../assets/Nav-image/messages.png";
import oval from "../assets/Nav-image/Oval.png";

function NavBar() {
  return (
    <nav 
      className="navbar navbar-light bg-white border-bottom border-light d-flex align-items-center justify-content-end" 
      style={{ height: "60px", width: "93%", margin: "0 auto", padding: "0 20px" }}
    >
      {/* Icons Section */}
      <div className="d-flex align-items-center gap-4">
        {/* Message Icon */}
        <img src={message} alt="Messages" style={{ width: "24px", height: "24px" }} />

        {/* Bell Icon */}
        <img src={bell} alt="Notifications" style={{ width: "24px", height: "24px" }} />

        {/* Profile Image */}
        <img 
          src={oval} 
          alt="Profile" 
          className="rounded-circle" 
          style={{ width: "30px", height: "30px", objectFit: "cover" }}
        />
      </div>
    </nav>
  );
}

export default NavBar;



