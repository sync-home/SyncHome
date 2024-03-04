// Replace with your API base URL

import { baseURL } from "@/components/utils/getBaseURL";

const fetchPublic = async (endpoint, options = {}) => {
    console.log(baseURL);
    const url = `${baseURL}${endpoint}`;

    try {
        const response = await fetch(url, options);
        // console.log(response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

export default fetchPublic;