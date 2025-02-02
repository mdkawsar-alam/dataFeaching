import React, { useEffect, useState } from 'react'



const DataFeaching = () => {


 const [users,setUsers]=useState([]);

 const getData=()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then((res)=>res.json())
     .then((data)=>setUsers(data.slice(0,5)))
     .catch((err)=>console.error(" this is data fetching error ", err)
     )
   
 }

 useEffect(()=>{
    getData()
 },[])


 
  return (
    <div>
        <h1> Data Fetching with fetch and Promises </h1>
        <div className="border p-5">
{
    users.map((user)=>( 
    <div key={user.id}
    className='p-2 border bg-yellow-400'
    >
        <p>name:{user.name}</p>
        <p> Phone:{user.phone}</p>
        <p> Email:{user.email}</p>
        <p> Id:{user.id}</p>
        <p>userName {user.username}</p>
        

    </div>))
}
             
        </div>

    </div>
  )
}

export default DataFeaching