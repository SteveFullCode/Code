import { Routes, Route } from "react-router-dom"
import Signin from "../pages/signin/signin";
import SignUp from "../pages/signUp/signUp";


export default function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    )
}