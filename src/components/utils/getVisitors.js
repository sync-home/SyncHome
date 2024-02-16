export const getVisitors = async()=>{
    const res= await fetch("https://synchome-server.vercel.app/visitors")
    return res.json();

}