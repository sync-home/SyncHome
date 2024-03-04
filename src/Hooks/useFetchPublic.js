// Replace with your API base URL

import { baseURL } from "@/components/utils/getBaseURL";

export async function fetchPublic(endpoint, options = {}) {
    const url = `${baseURL}${endpoint}`;

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}