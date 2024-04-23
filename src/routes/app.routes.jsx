import { Routes, Route } from "react-router-dom"

import New from "../pages/new/new";
import Home from "../pages/home/Home"
import  Datails  from "../pages/datails/datails";
import Profile from "../pages/profile/profile"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New />}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/datails/:id" element={<Datails />}/>
        </Routes>
    )
}