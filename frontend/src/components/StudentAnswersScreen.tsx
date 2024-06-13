import "./StudentAnswersScreen.css";

import {SetStateAction, useEffect, useState} from "react";
import {getAnswers} from "../services/FormService";


function StudentAnswersScreen (props: {name: string}) {
    const { name } = props;
    // const answers = [
    //     {
    //         question: "Jego ulubiony kolor?",
    //         answers: ["Czerwony", "Niebieski", "Zielony", "Żółty"]
    //     },
    //     {
    //         question: "Czy lubi pizzę?",
    //         answers: ["TakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakaTakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakaTakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakaTakaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaka", "Tak", "Tak", "Nie"]
    //     }
    // ]

    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        getAnswers(name).then((response: { data: SetStateAction<never[]>; }) => {
            setAnswers(response.data);
        });
    }, [name]);
    console.log(answers);

    return (
        <div className="student-container">
            <h1 className="name">{name}</h1>
            <div className="question-container">
                {answers.map((answer, index) => (
                    <div key={index} className="question">
                        <div className="question-name">
                            <h2>{answer.question}</h2>
                        </div>
                        <div className="answers">
                            <ul>
                                {answer.answers.map((answer, index) => (
                                    <li key={index}>{answer}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentAnswersScreen;