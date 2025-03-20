import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/LoginPage/loginpage/logo 1 .png";
import frame from "../../assets/LoginPage/loginpage/Frame 2.png";

const LoginPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ email, password }), 
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); 
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-80 shadow-lg rounded-4 overflow-hidden p-5 gap-4 bg-white">
     
        <div className="col-md-6 p-5 bg-light rounded-4 ">
        <div >
            {/* <img src={logo} alt="Logo" /> */}
            <img src={logo} alt="Logo" className="h-auto" style={{ width: "10%" }} />



        </div>
          
          <h2 className="fw-bold mt-3 text-center ">Welcome to Onsyte</h2>
          <p className="text-muted text-center">
            Advanced wastewater treatment made simple. Log in to manage
            sustainable water solutions.
          </p>

          
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="eve.holt@reqres.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-end">
              <a href="/" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
            <button className="btn btn-primary w-100 mt-3" type="submit">
              Login
            </button>
          </form>
        </div>

        
        <div className="col-md-5 d-none d-md-block">
          <img
            src={frame}
            alt="Background"
            className="w-100 h-100 object-fit-cover rounded-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


