import "./AllStudentsAnswersScreen.css";
import "./StudentAnswersScreen.css";

import StudentAnswersScreen from "./StudentAnswersScreen";

function AllStudentsAnswersScreen() {
    const students = ["Krzysztof Kowalski", "Jan NieKowalski", "Jadwiga Nowak"];

    return (
        <div className="all-students-container">
            {students.map((student, index) => (
                <StudentAnswersScreen key={index} name={student} />
            ))}
        </div>
    )
}

export default AllStudentsAnswersScreen;

