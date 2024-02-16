export async function getRole(email) {

    try {
        const res = await fetch(`http://localhost:5000/api/v1/users/${email}`, {
            cache: 'force-cache'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const responseData = await res.json();

        // Check if responseData is empty or undefined
        if (!responseData) {
            throw new Error('Empty response data');
        }

        return responseData;
    } catch (error) {
        // console.log(error);
        return { message: error?.message }
    }
}
// const res = await fetch(`https://synchome-server.vercel.app/api/v1/user-role/${email}`