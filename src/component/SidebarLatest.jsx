import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/LoginPage/loginpage/logo 1 .png";
import image1 from "../assets/Sidebar-image/image1new.png";
import image2 from "../assets/Sidebar-image/image.2.png";
import image3 from "../assets/Sidebar-image/image.3.png";
import image4 from "../assets/Sidebar-image/image.4.png";
import image5 from "../assets/Sidebar-image/image.5.png";
import image6 from "../assets/Sidebar-image/image6.png";
import image7 from "../assets/Sidebar-image/image.7.png";
import image8 from "../assets/Sidebar-image/image.8.png";
import image9 from "../assets/Sidebar-image/image.9.png";
import { Link } from "react-router-dom"; // Import Link for navigation
import NavBar from "./NavBar";

const SidebarLatest = () => {
  // Sidebar items with navigation links
  const sidebarItems = [
    { img: image1, path: "/Dashboard" },
    { img: image2, path: "/StationStatus" },
    { img: image3, path: "/Alarms" },
    { img: image4, path: "/reports" },
    { img: image5, path: "/settings" },
    { img: image6, path: "/AdminUserPage" },
    { img: image7, path: "/profile" },
    { img: image8, path: "/support" },
    { img: image9, path: "/logout" },
  ];

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <NavBar />

      <div className="d-flex">
        {/* Sidebar */}
        <div
          className="bg-light d-flex flex-column align-items-center text-center p-2"
          style={{
            width: "80px",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            paddingTop: "60px", // Prevent overlap with NavBar
            borderRight: "1px solid #ddd",
          }}
        >
          {/* Logo */}
          <a href="/" className="mb-4">
            <img src={logo} alt="Logo" className="img-fluid" style={{ width: "50px" }} />
          </a>

          {/* Navigation Icons */}
          <ul className="nav nav-pills flex-column w-100">
            {sidebarItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={item.path} className="nav-link py-3">
                  <img src={item.img} alt={`icon-${index}`} className="img-fluid" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
      </div>
    </div>
  );
};

export default SidebarLatest;
