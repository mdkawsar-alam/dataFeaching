import React, { useEffect, useState } from 'react'

const WithoutDependency = () => {
 const [count, setCount]=useState(0);

 useEffect(()=>{
    console.log("Side effect");
    

 },[])

  return (
    <div>
        {
            console.log("rendering")
        }
        <h1>WithoutDependency</h1>
         
         <p>{count}</p>


         <button 
         onClick={()=>setCount(count+1)} 
         className='bg-gray-400 text-white p-4'

         >
            
            Increment</button>
    </div>
  )
}

export default WithoutDependency