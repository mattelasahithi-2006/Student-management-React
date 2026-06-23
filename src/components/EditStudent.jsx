import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function EditStudent() {

    const { rollNo } = useParams();

    const navigate = useNavigate();

    const [student, setStudent] = useState({
        rollNo: "",
        name: "",
        branch: "",
        cgpa: ""
    });

    useEffect(() => {

        fetch(
            `http://localhost:8080/students/${rollNo}`
        )
            .then(res => res.json())
            .then(data => setStudent(data));

    }, []);

    const updateStudent = async (e) => {

        e.preventDefault();

        const response = await fetch(
            "http://localhost:8080/students",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            }
        );

        if (response.ok) {

            alert("Updated Successfully");

            navigate("/viewstudents");

        } else {

            alert("Update Failed");

        }
    };

    return (

        <div>

            <Navbar />

            <div className="container">

                <div className="card">

                    <h1>Edit Student</h1>

                    <form onSubmit={updateStudent}>

                        <label>Roll Number</label>

                        <input
                            type="text"
                            value={student.rollNo}
                            readOnly
                        />

                        <label>Name</label>

                        <input
                            type="text"
                            value={student.name}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    name: e.target.value
                                })
                            }
                        />

                        <label>Branch</label>

                        <input
                            type="text"
                            value={student.branch}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    branch: e.target.value
                                })
                            }
                        />

                        <label>CGPA</label>

                        <input
                            type="text"
                            value={student.cgpa}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    cgpa: e.target.value
                                })
                            }
                        />

                        <button>
                            Update Student
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default EditStudent;