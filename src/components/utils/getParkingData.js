export const getParkingData=async()=>{
    const res= await fetch("https://synchome-server.vercel.app/parking")
    return res.json()

}