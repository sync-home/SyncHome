export const getParkingData=async()=>{
    const res= await fetch("http://localhost:5000/parking")
    return res.json()

}