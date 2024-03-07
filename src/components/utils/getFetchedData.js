// Replace with your API base URL

import { baseURL } from "@/components/utils/getBaseURL";

const fetchPublic = async (endpoint = '/', options = {}) => {
    const url = `${baseURL}${endpoint}`;
    // console.log(url);

    try {
        const response = await fetch(url, options);
        // console.log(response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        // console.error('Error fetching data:', error.message);
        throw error;
    }
};

export default fetchPublic;