import { useState } from "react";
import { useEffect } from "react"

export default function Home1()
{

    const [manufaturars, setManufacturars] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    
    
    useEffect(() => {

   

       (async () => {
        const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json',{
            method: 'GET',
        });
        const jsonResponse = await res.json();
        setManufacturars(jsonResponse.Results);
        setIsLoading(false)
       })();

      


        // console.log(res.json())
    }, []) 

    return(
        <>
        <ol>
            {
                isLoading && <li>loding...</li>
            }
            {
                !isLoading && manufaturars.map(mfr => <li key={mfr.Mfr_ID}>
                    <h3>{mfr.Mfr_Name}</h3>
                    <p>{mfr.Country}</p>
                </li>)
            }
        </ol>
        </>
    )
}