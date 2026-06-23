import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        if (email === "" || password === "") {
            alert("All fields are required");
            return;
        }

        try {

            // GET all users
            const response = await fetch("http://localhost:8080/users");

            if (!response.ok) {
                alert("Unable to fetch users");
                return;
            }

            const users = await response.json();

            // Compare entered values with fetched users
            const foundUser = users.find(
                user =>
                    user.email === email &&
                    user.password === password
            );

            if (foundUser) {

                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(foundUser)
                );

                alert("Login Successful");

                navigate("/dashboard");

            } else {

                alert("Invalid Email or Password");

            }

        } catch (error) {

            console.error(error);
            alert("Server Error");

        }
    };

    return (
        <div className="container">

            <div className="card">

                <h1>Welcome to Login Page</h1>

                <form onSubmit={handleLogin}>

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="link">
                    <Link to="/register">
                        Don't have an account? Register here
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Login;