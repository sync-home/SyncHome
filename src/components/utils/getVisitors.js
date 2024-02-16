export const getVisitors = async()=>{
    const res= await fetch("http://localhost:5000/visitors")
    return res.json();

}