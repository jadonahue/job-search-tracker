"use client";

import { createContext, useContext, useEffect, useState } from "react";
import authService from "@/service/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        authService.getUser().then(setUser);
    }, []);

    const login = async (email, password) => {
        try {
            const user = await authService.login(email, password);
            setUser(user);
            console.log("Login successful:", user);  // Log user data
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message);  // Update error state
        }
    };

    const logout = async () => {
        await authService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);