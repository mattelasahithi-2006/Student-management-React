import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [conpwd, setConpwd] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    if (password !== conpwd) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      email,
      name,
      password
    };

    try {

      const response = await fetch(
        "http://localhost:8080/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        }
      );

      if (response.ok) {

        alert("Registration Successful");

        navigate("/login");

      } else {

        alert("Registration Failed");

      }

    } catch (error) {

      alert("Server Error");

    }

  };

  return (

    <div className="container">

      <div className="card">

        <h1>Register as Student</h1>

        <form onSubmit={handleRegister}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={conpwd}
            onChange={(e) => setConpwd(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

        <div className="link">
          <Link to="/login">
            Already have an account? Login here
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Register;