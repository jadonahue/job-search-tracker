"use client"

import { useSignup } from "../store/signupStore.js";
import Button from "./Button";

export default function SignupForm() {

    const { formData, handleChange, handleSubmit, error, loading } = useSignup();

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto p-4 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>

            <label className="block mb-2">
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded text-gray-700"
                />
            </label>

            <label className="block mb-2">
                Email:
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded text-gray-700"
                />
            </label>

            <label className="block mb-2">
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded text-gray-700"
                />
            </label>

            <label className="block mb-2">
                Confirm Password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full border p-2 rounded text-gray-700"
                />
            </label>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex justify-center col-span-1">
                <Button label={loading ? "Signing up..." : "Sign Up"} type="submit" disabled={loading} className="w-auto" />
            </div>
        </form>
    )
}