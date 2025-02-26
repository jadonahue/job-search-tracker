import axios from "axios";

export const signupUser = async (formData) => {
    try {
        const response = await axios.post("/api/signup", formData, {
            headers: { "Content-Type": "application/json" },
        })

        return response.data; // Axios automatically parses JSON responses
    } catch (error) {
        // Handles errors properly
        if (error.response) {
            // Server responded with a status other than 2xx
            throw new Error(error.response.data.message || "Signup failed");
        } else if (error.request) {
            // Request was made but no response received
            throw new Error("No response from server");
        } else {
            // Something else happened
            throw new Error(error.message);
        }
    }
}