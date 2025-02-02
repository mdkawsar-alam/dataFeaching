import React, { useEffect, useState } from 'react'

const WithDepency = () => {
 const [name, setName]=useState(" ");

 const [count, setCount]=useState(0)

 useEffect(() => {
 
 console.log("Side Effect");
 
  
 }, [name ,count])
 

const handleIncrement=()=>{
setCount(count+1 )
}

  return (
    <div>
        {
            console.log(" rendering")
            
        }
         <form action="">
            <input
            onChange={(e)=>setName(e.target.value)}
            type="text"
             className='border'
             />
            
         </form>
         <button
          className='bg-blue-900 p-2'
         onClick={handleIncrement}>Increment</button>

         <p>{count}</p>
    </div>
  )
}

export default WithDepency