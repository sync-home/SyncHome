export const getParkingData=async()=>{
    const res= await fetch("https://synchome-server-pink.vercel.app/parking")
    return res.json()

}