import { Routes, Route } from "react-router-dom";
import Signin from "../pages/signin/signin";
import SignUp from "../pages/signUp/signUp";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<Signin />} />
    </Routes>
  );
}
