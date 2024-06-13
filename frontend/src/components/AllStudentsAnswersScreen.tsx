import "./AllStudentsAnswersScreen.css";
import "./StudentAnswersScreen.css";

import StudentAnswersScreen from "./StudentAnswersScreen.tsx";
import {useEffect, useState} from "react";
import {getStudents} from "../services/VirtualClassService";

function AllStudentsAnswersScreen() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then((response) => {
            setStudents(response.data);
        });
    }, []);

    return (
        <div className="all-students-container">
            {students.map((student, index) => (
                <StudentAnswersScreen key={index} name={student} />
            ))}
        </div>
    )
}

export default AllStudentsAnswersScreen;