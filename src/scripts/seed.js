import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Initialize Supabase client
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // Service role key (Backend only)
);

const seedDatabase = async () => {
    try {
        console.log("Seeding test user...");

        // Test User Credentials
        const email = "testuser@example.com"
        const password = "Test1234!";

        // Create a test user in Supabase Auth
        const { data: user, error: authError } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true, // Automatically confirms email
        });

        if (authError) throw authError;
        console.log("Test user created:", user);

        // Insert user details into the "user" table (if needed)
        const { data: userData, error: dbError } = await supabase.from("users").insert([
            { id: user.user.id, name: "Test User", email }
        ]);

        if (dbError) throw dbError;
        console.log("User record inserted:", userData);

    } catch (error) {
        console.error("Seeding failed:", error);
    } finally {
        process.exit();
    }
};

// Run the function
seedDatabase();