import { useState } from "react";
import Navbar from "./Navbar";

function AddStudent() {

    const [student, setStudent] = useState({
        rollNo: "",
        name: "",
        branch: "",
        cgpa: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch(
            "http://localhost:8080/students",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            }
        );

        if (response.ok) {

            alert("Student Added Successfully");

            setStudent({
                rollNo: "",
                name: "",
                branch: "",
                cgpa: ""
            });

        } else {

            alert("Failed to Add Student");

        }
    };

    return (

        <div>

            <Navbar />

            <div className="container">

                <div className="card">

                    <h1>Add Student</h1>

                    <form onSubmit={handleSubmit}>

                        <label>Roll Number</label>
                        <input
                            type="text"
                            value={student.rollNo}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    rollNo: e.target.value
                                })
                            }
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

                        <button>Add Student</button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AddStudent;