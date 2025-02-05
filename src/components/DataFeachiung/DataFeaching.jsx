// import React, { useEffect, useState } from 'react'



// const DataFeaching = () => {


//  const [users,setUsers]=useState([]);

//  const getData=()=>{
//      fetch('https://jsonplaceholder.typicode.com/users')
//      .then((res)=>res.json())
//      .then((data)=>setUsers(data.slice(0,5)))
//      .catch((err)=>console.error(" this is data fetching error ", err)
//      )
   
//  }

//  useEffect(()=>{
//     getData()
//  },[])


 
//   return (
//     <div>
//         <h1> Data Fetching with fetch and Promises </h1>
//         <div className="border p-5">
// {
//     users.map((user)=>( 
//     <div key={user.id}
//     className='p-2 border bg-yellow-400'
//     >
//         <p>name:{user.name}</p>
//         <p> Phone:{user.phone}</p>
//         <p> Email:{user.email}</p>
//         <p> Id:{user.id}</p>
//         <p>userName {user.username}</p>
        

//     </div>))
// }
             
//         </div>

//     </div>
//   )
// }

// export default DataFeaching



import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFeaching = () => {

    const [data,setData]=useState([])

    const getData  = async()=>{

        try {
      const res= await   axios.get('https://jsonplaceholder.typicode.com/users') ;  
      setData(res.data) 

        } catch (error) {
            console.log(error.message);
            
        }
 
    }

    useEffect(()=>{
        getData()
    },[])

    console.log(data);
    
  return (
    <div>
<h1>hello world</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

   {
    data.map((item)=>{
        return <div
        className='p-4 bg-slate-500 text-white rounded-xl'
        key={item.id}>
             <p>name:{item.name}</p>
             <p>email:{item.email}</p>
             <p>userName: {item.username}</p>
             <p></p>
        </div>
    })
   }
</div>
    </div>
  )
}

export default DataFeaching