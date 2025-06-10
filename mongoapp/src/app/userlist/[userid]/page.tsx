"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [university, setUniversity] = useState("");

    useEffect(() => {
        callData();
    }, []);

    const callData = async () => {
        const id = params.userid;
        try {
            const myRequest = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
            const response = await myRequest.json();

            if (response.newData) {
                setName(response.newData.name);
                setAge(response.newData.age);
                setUniversity(response.newData.university);
            } else {
                console.error("User data not found for ID:", id);
                // Optionally, redirect or show an error message
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Optionally, redirect or show an error message
        }
    };

    const myfun = async () => {
        const id = params.userid;

        // Basic validation
        if (!name || !age || !university) {
            alert('Please fill in all fields.');
            return;
        }

        

        try {
            const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, age, university }), // Convert age to number
            });

            const response = await request.json();

            if (response.success) {
                alert('User updated successfully!');
                router.push("/userlist");
            } else {
                // Handle potential API errors (e.g., show a message)
                alert('Failed to update user. Please try again.');
            }
        } catch (error) {
            console.error("Error updating user:", error);
            alert('An error occurred while updating the user.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Edit User Page
                </h1>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter your Age"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter your University"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                    />
                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                        onClick={myfun}
                    >
                        Edit user
                    </button>
                </div>
            </div>
        </div>
    );
}
























// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import "./style.css";
// import { Router } from "next/router";

// export default function Page({ params }) {
//   const router = useRouter()

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [university, setUniversity] = useState("");

//   useEffect(() => {
//     callData();
//   }, []);

//   const callData = async () => {
//     const id = params.userid;

//     // console.log(id);
//     const myRequest = await fetch(`http://localhost:3000/api/products/${id}`);
//     const response = await myRequest.json();
//     // console.log(response);
    
//     setName(response.newData.name)
//     setAge(response.newData.age)
//     setUniversity(response.newData.university)
    
//   };

//   const myfun = async() => {
//     const id = params.userid;
//     const request = await fetch(`http://localhost:3000/api/products/${id}`,{
//         method: "PUT",
//         body:JSON.stringify({name,age,university})
//     })
//     const response = await request.json()
    
//     if(response.success){
//         router.push("/userlist")
//         alert('user updated successfully....')
//     }

//     // console.log(name, age, university);
//   };
//   return (
//     <div className="body">
//       <div className="container">
//         <h1 className="heading">Edit User Page</h1>

//         <input
//           type="text"
//           placeholder="Enter your Name"
//           className="input"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter your Age"
//           className="input"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter your University"
//           className="input"
//           value={university}
//           onChange={(e) => setUniversity(e.target.value)}
//         />
//         <button className="button" onClick={myfun}>
//           Edit user
//         </button>
//       </div>
//     </div>
//   );
// }
