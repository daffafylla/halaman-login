import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../Style/register.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");                              
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:2026/api/user/register", {
        email: email,
        password: password,
        
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil Register!",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        navigate("/hero");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body1 md:text-base lg:h-100vh sm:text-sm">
      <div className="container1">
       <pre>  <h3>        Login</h3> </pre>
        <form onSubmit={register} method="POST">
          
          <label>Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
          <br />
          <button type="submit">Login</button>
          <p>
            Belum punya akun? 
            <a href="/Register" className="Register-link">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
