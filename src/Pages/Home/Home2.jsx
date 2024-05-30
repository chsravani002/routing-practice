import { useEffect, useState } from "react"

export default function Home2(){
const [catdata,setcatdata]=useState([])
useEffect(()=>{
    (async () => {
    const res=await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json',{
        method:'GET'
    })
   const jsonresponse= await res.json();
   setcatdata(jsonresponse)
})()},[])



    return(
        <ol>{catdata.map((value)=>{
            <li>value.Mfr_Name</li>

        })}
        </ol>
    )
}