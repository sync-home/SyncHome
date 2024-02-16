export const getVisitors = async()=>{
    const res= await fetch("https://synchome-server-pink.vercel.app/visitors")
    return res.json();

}