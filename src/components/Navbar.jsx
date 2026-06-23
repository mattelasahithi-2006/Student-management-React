import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/addstudent">Add Student</Link>
        </li>

        <li>
          <Link to="/viewstudents">View Student</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;