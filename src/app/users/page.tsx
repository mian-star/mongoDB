"use client";
import Link from "next/link";
import { useState } from "react";

export default function Users() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [university, setUniversity] = useState("");

  const showData = async () => {
    // Basic validation
    if (!name || !age || !university) {
      alert("Please fill in all fields.");
      return;
    }

    // Simple age validation (optional)

    try {
      let data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, age, university }), // Convert age to number
        }
      );

      let response = await data.json();

      console.log(response);

      if (response.success) {
        alert("User added successfully!");
        setName("");
        setAge("");
        setUniversity("");
      } else {
        // Handle potential API errors (e.g., show a message)
        alert("Failed to add user. Please try again.");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert("An error occurred while adding the user.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add User In DataBase
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your Name!"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your Age!"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your University Name!"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
          <button
            onClick={showData}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
        >
          ← Go to Home
        </Link>
      </div>
    </div>
  );
}

// 'use client'
// import { useState } from 'react'

// export default function users(){

//     const[name,setName] = useState('')
//     const[age,setAge] = useState('')
//     const[university,setUniversity] = useState('')

//     const showData = async ()=>{
//         let data = await fetch('http://localhost:3000/api/products',{
//             method : 'POST',
//             body : JSON.stringify({name,age,university})
//         });

//         let response = await data.json();
//         console.log(response);

//         if(response.success){
//             alert('user added successfully..')
//         }
//         setName('');
//         setAge('');
//         setUniversity('');

//     }
//     return (
//         <div >
//             <div className='outer-container'>
//               <h1 className='h1'>Add User In DataBase</h1>
//                 <div>
//                    <input className='input' type="text" placeholder="Enter your Name!" value={name} onChange={(e)=>setName(e.target.value)}/>
//                    <input className='input' type="text" placeholder="Enter your Age!" value={age} onChange={(e)=>setAge(e.target.value)}/>
//                    <input className='input' type="text" placeholder="Enter your University Name!" value={university} onChange={(e)=>setUniversity(e.target.value)}/>
//                    <button onClick={showData} className='btn'>Add user</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
