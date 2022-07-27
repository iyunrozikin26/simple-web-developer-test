import React from "react";
import { Navigate } from "react-router-dom";

export function IsLogin({ children }) {
    const access_token = localStorage.getItem("access_token");
    
    if (!access_token) return <Navigate to="/login" replace />;
    else {
        return children;
    }
}

export function IsLogout({ children }) {
    const access_token = localStorage.getItem("access_token");
    
    if (access_token) return <Navigate to="/" replace />;
    else {
        return children;
    }
}