import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function ViewStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/students")
            .then(res => res.json())
            .then(data => setStudents(data));

    }, []);

    async function deleteStudent(rollNo) {

        if (!window.confirm("Delete Student?"))
            return;

        await fetch(
            `http://localhost:8080/students/${rollNo}`,
            {
                method: "DELETE"
            }
        );

        setStudents(
            students.filter(
                student => student.rollNo !== rollNo
            )
        );
    }

    return (

        <div>

            <Navbar />

            <div className="table-container">

                <h2>Student Details</h2>

                <table>

                    <thead>

                        <tr>
                            <th>Roll No</th>
                            <th>Name</th>
                            <th>Branch</th>
                            <th>CGPA</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            students.map(student => (

                                <tr key={student.rollNo}>

                                    <td>{student.rollNo}</td>
                                    <td>{student.name}</td>
                                    <td>{student.branch}</td>
                                    <td>{student.cgpa}</td>

                                    <td>

                                        <Link
                                            to={`/editstudent/${student.rollNo}`}
                                        >
                                            <button className="small-btn">
                                                Edit
                                            </button>
                                        </Link>

                                    </td>

                                    <td>

                                        <button
                                            className="small-btn"
                                            onClick={() =>
                                                deleteStudent(student.rollNo)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default ViewStudents;