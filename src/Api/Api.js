export const Getservices=async()=>{



try {
  
const res=await fetch(`${process.env.NEXT_PUBLIC_Base_URL}services/api`)
const data=res.json()
return data

} catch (error) {
  console.log(error);
  return []
  
}


}

export const GetBlogs=async ()=>{
  try {
       const res=await fetch(`${process.env.NEXT_PUBLIC_Base_URL}blogs/api`)
    const data=res.json()
  return data
  } catch (error) {
    console.log(error);
  return []
  }
}