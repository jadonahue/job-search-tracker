import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

console.log("authService is being loaded!");

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const authService = {
    async login(email, password) {
        console.log("Login attempt:", email, password);

        console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
        console.log("SUPABASE_ANON_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

        const res = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        console.log("Res User Info:", res.data.user);


        // const { user, error } = await supabase.auth.signInWithPassword({
        //     email,
        //     password,
        // });

        // if (error) {
        //     console.error("Login failed:", error.message);
        //     return { error: error.message };
        // }

        return res.data.user;
    },

    async logout() {
        await supabase.auth.signOut();
    },

    async getUser() {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            console.error("Failed to get user:", error.message);
            return { error: error.message };
        }
        return { user: data.user };
    },
};

export default authService;