import express from "express";
import authService from "../service/authService.js";

const router = express.Router();

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authService.login(email, password);
        console.log("User:", user);

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.json({ message: "Login successful", user });  // ✅ respond with user
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
});

// Signup Route
router.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = await authService.signup(email, password);
        res.json({ message: "Signup successful", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "error signing up" });

    }

})

export default router;