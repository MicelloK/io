import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import StartScreen from "./components/StartScreen.tsx";
import VirtualClassCreator from "./components/VirtualClassCreator.tsx";
import LoginScreen from "./components/LoginScreen.tsx";
import WaitingRoomScreen from './components/WaitingRoomScreen.tsx';
import FormCreation from "./components/FormCreation.tsx";
import AnswerScreen from "./components/AnswerScreen.tsx";
import DisplayingRoomScreen from './components/DisplayingRoomScreen.tsx';
import AllStudentsAnswersScreen from "./components/AllStudentsAnswersScreen.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StartScreen />
    },
    {
        path: "/create",
        element: <VirtualClassCreator />
    },
    {
        path: "/join",
        element: <LoginScreen />
    },
    {
        path: "/class",
        element: <WaitingRoomScreen />
    },
    {
        path: "/class/displaying",
        element: <DisplayingRoomScreen />
    },
    {
        path: "/class/form",
        element: <FormCreation />
    },
    {
        path: "/class/answer",
        element: <AnswerScreen />
    },
    {
        path: "/class/answers",
        element: <AllStudentsAnswersScreen />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
