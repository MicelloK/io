import "./WaitingRoomScreen.css";

import StudentComponent from "./studentComponent";
import {getAccessCode, getClassName, getStudents} from "../services/VirtualClassService";

import QRCode from "react-qr-code";
import {useEffect, useState} from "react";
import {environment} from "../environments/environment.tsx";
import {ActionButton} from "./formComponents";
import {isTeacher} from "../services/UserRoleService.ts";
import {useNavigate} from "react-router-dom";


function DisplayingRoomScreen() {

    const [gameCode, setGameCode] = useState('');
    const [className, setClassName] = useState('');
    const [isTeacherField, setIsTeacher] = useState(false);
    const [studentList, setStudentList] = useState([]);

    const navigate = useNavigate();

    const gameAddress = environment.gameAddress;

    useEffect(() => {
        const fetchData = async () => {
            const [gameCodeResponse, classNameResponse, studentListResponse, isTeacherResponse] = await Promise.all([
                getAccessCode(),
                getClassName(),
                getStudents(),
                isTeacher()
            ]);

            setGameCode(gameCodeResponse.data);
            setClassName(classNameResponse.data);
            setStudentList(studentListResponse.data);
            setIsTeacher(isTeacherResponse.data);
        };

        fetchData();
    }, []);

    return (
        <div className="wrapper">
            <div className="header">
                <div className="qr-container">
                    <QRCode size={256} style={{height: "22vh", maxWidth: "100%", width: "auto"}}
                            value={gameAddress + "?code=" + gameCode}/>
                </div>
                <div className="game-address">
                    <p>Kod dostępu: <strong>{gameCode}</strong></p>
                </div>
                <div className="class-name">
                    <p>Klasa: {className}</p>
                </div>
                {
                    isTeacherField ? (
                        <ActionButton
                            type="button"
                            label="Zobacz odpowiedzi"
                            variant="primary"
                            onClick={() =>
                                navigate("/class/answers")
                            }
                        />
                    ) : null
                }
            </div>
            <div className="virtualClass">
                {studentList.length == 0 ? (
                    <h2>Oczekiwanie na graczy...</h2>
                ) : (
                    <div className="students-container">
                        {studentList.map((student, index) => (
                            <StudentComponent key={index} studentName={student}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DisplayingRoomScreen;