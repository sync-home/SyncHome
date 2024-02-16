export async function getRole(email) {
    email = 'admin@admin.com';
    try {
        const res = await fetch(`https://synchome-server.vercel.app/api/v1/user-role/${email}`, {
            cache: 'force-cache'
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json()
    } catch (error) {
        console.log(error);
        return { message: error?.message }
    }
}
// const res = await fetch(`https://synchome-server.vercel.app/api/v1/user-role/${email}`