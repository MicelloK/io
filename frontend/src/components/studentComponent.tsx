import React from "react";
import "./studentComponent.css";
import { removeStudent } from "../services/LoginService";

type StudentComponentProps = {
    studentName: string;
};

const StudentComponent: React.FC<StudentComponentProps> = ({ studentName }) => {
    const handleRemoveStudent = (name: string) => {
        removeStudent(name)
        .catch(() => {
            alert("Błąd przy usuwaniu studenta");
        })
    }

    return (
        <div className="student">
            <div className="avatar"></div>
            <p className="student-name">{studentName}</p>
            <div className="delete-student">
                <button className="w-full" onClick={()=>handleRemoveStudent(studentName)}>Usuń uczestnika</button>
            </div>
        </div>
    );
};

export default StudentComponent;