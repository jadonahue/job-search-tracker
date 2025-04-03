"use client"

import { createContext, useContext, useState } from "react"
import { signupUser } from "../service/signupService"

const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //Handle form submission (calls service)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return; // Prevent form submission if passwords do not match
        }

        try {
            setLoading(true);
            const response = await signupUser(formData) // Call API service
            console.log("Signup successful:", response);
        } catch (err) {
            setError(err.message || "Signup failed")
        } finally {
            setLoading(false);
        }
    };

    return (
        <SignupContext.Provider value={{ formData, handleChange, handleSubmit, error, loading }}>
            {children}
        </SignupContext.Provider>
    )
};

export const useSignup = () => useContext(SignupContext);