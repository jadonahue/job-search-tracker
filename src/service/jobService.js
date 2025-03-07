import axios from "axios";


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