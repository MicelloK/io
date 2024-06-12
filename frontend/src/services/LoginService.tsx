import axios from "axios";
import {environment} from "../environments/environment.tsx";
import {getToken} from "./StorageService.tsx";

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
};


export const joinClass = (code: string, name: string) => {
    const data = {
        code,
        name
    };
    return axios.post(environment.backEnd + "/class/join", data, axiosConfig);
}

export const removeStudent = () => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + getToken()
    };
    return axios.delete(environment.backEnd = "/class/remove", {headers: headers})
};

