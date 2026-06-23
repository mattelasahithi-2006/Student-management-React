import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="home">

      <h1>Welcome Please Login</h1>

      <div className="home-buttons">

        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/">
          <button>Home</button>
        </Link>

      </div>

    </div>
  );
}

export default Index;