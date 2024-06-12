import { getToken } from "./StorageService.tsx";
import axios from "axios";
import { environment } from "../environments/environment.tsx";

export const createForm = (form: any) => {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    };

    const data = {
        longQuestionFields: form.longQuestions.questions,
        shortQuestionFields: form.shortQuestions.questions,
        multiSelectionFields: form.multipleSelectionQuestions.questions,
        singleSelectionFields: form.singleSelectionQuestions.questions,
        checkboxFields: form.checkboxQuestions.questions,
    };
    return axios.post(environment.backEnd + "/form", data, axiosConfig);
}

export const getAnswers = (name: string) => {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    };
    return axios.get(environment.backEnd + "/answers" + name, axiosConfig);
}

export const handleFormImport = () => {
    console.log("Importing form");
};
