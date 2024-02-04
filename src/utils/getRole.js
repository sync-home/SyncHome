export async function getRole(email) {
    const res = await fetch(`http://localhost:5000/api/v1/user-role/${email}`, {
        cache: 'force-cache'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}