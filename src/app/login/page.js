"use client";

import { useState } from "react";
import { useAuth } from "@/store/authStore"
import Button from "@/components/Button";

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Submitting login...");

        try {
            await login(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl text-indigo-800 font-bold mb-4">Login</h2>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <Button label="Login" type="submit" />
            </form>
        </div>
    );
}