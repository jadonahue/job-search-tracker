import axios from "axios";
// import supabase from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


export const getJobs = async (filters = {}) => {
    try {
        // Convert filters object to query parameters
        const query = new URLSearchParams(filters).toString();
        console.log("Fetching jobs with filters:", filters)

        const response = await axios.get(`http://localhost:5001/api/jobs?${query}`);

        // Remove the first item from the jobs array
        const validJobs = response.data.slice(1);

        console.log("Fetched jobs:", validJobs);
        return validJobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return []; // Return empty array on error
    }
}

export async function getSavedJobsForUser() {
    try {
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw new Error(userError.message);
        if (!user) throw new Error("User not authenticated");

        const { data: savedJobs, error: jobsError } = await supabase
            .from("saved_jobs")
            .select("job_id")
            .eq("user_id", user.id);

        if (jobsError) throw new Error(jobsError.message);

        return savedJobs.map((row) => row.job_id);
    } catch (error) {
        console.error("Error in getSavedJobsForUser:", error.message);
        return [];
    }
}

export async function postSavedJobForUser(job) {
    try {

        console.log("testing postsaved");

        const response = await supabase.auth.getUser();
        console.log(response, "batman");

        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser();


        if (userError) throw new Error(userError.message);
        if (!user) throw new Error("User not authenticated");

        const { error: insertError } = await supabase
            .from("saved_jobs")
            .insert([
                {
                    user_id: user.id,
                    job_id: job.id,     // This should be a string or number
                    job_data: job       // This holds the full job object (needs to be in `jsonb` column)
                }
            ]);

        if (insertError) throw new Error(insertError.message);

        return { success: true };
    } catch (error) {
        console.error("Error in postSavedJobForUser:", error.message);
        return { success: false, message: error.message };
    }
}


