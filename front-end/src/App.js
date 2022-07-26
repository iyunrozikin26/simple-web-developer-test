import React from "react";
import { Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="flex bg-slate-200">
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<AddForm />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
