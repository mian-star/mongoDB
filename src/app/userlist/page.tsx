"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteUser from "../../lib/DeleteUser";

export default function Page() {
  const [realData, setRealData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        {
          cache: "no-cache",
        }
      );
      const data = await res.json();
      setRealData(data.data || []);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👇 handle delete success
  const handleDelete = (id) => {
    setRealData((prev) => prev.filter((user) => user._id !== id));
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold text-center">My Todo List</h1>
      </header>

      <div className="container mx-auto p-4">
        {realData.length === 0 ? (
          <p className="text-center text-gray-600">No users found.</p>
        ) : (
          <ul className="space-y-4">
            {realData.map((ele) => (
              <li
                key={ele._id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center"
              >
                <div className="flex-grow mb-4 md:mb-0">
                  <div className="text-xl font-semibold text-blue-600 hover:underline">
                    {ele.name}
                  </div>
                  <div>{ele.age}</div>
                  <div>{ele.university}</div>
                </div>

                <div className="flex space-x-4">
                  <Link
                    href={`/userlist/${ele._id}`}
                    className="bg-green-700 text-white py-2 px-3 rounded-md font-semibold hover:bg-green-500"
                  >
                    Edit user
                  </Link>
                  <div className="bg-red-600 text-white py-2 px-3 rounded-md font-semibold hover:bg-red-700">
                    <DeleteUser id={ele._id} onDeleteSuccess={handleDelete} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
        >
          ← Go to Home
        </Link>
      </div>
    </main>
  );
}

// export const dynamic = "force-dynamic";
// import DeleteUser from "../../lib/DeleteUser";
// import Link from "next/link";

// const userList = async () => {
//   try {
//     const data = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
//       {
//         cache: "no-cache",
//       }
//     );
//     const response = await data.json();
//     console.log(response);
//     // Assuming the API returns an object with a 'data' property that is an array
//     return response.data || []; // Return empty array if data is not available
//   } catch (error) {
//     console.error("Error fetching user list:", error);
//     return []; // Return empty array in case of error
//   }
// };

// export default async function Page() {
//   const realData = await userList();
//   console.log(realData);

//   return (
//     <main className="flex flex-col min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white p-4 shadow">
//         <h1 className="text-2xl font-bold text-center">My Todo List</h1>
//       </header>
//       <div className="container mx-auto p-4">
//         {realData.length === 0 ? (
//           <p className="text-center text-gray-600">No users found.</p>
//         ) : (
//           <ul className="space-y-4">
//             {realData.map((ele) => (
//               <li
//                 key={ele._id}
//                 className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center"
//               >
//                 <div className="flex-grow mb-4 md:mb-0">
//                   <div className="text-xl font-semibold text-blue-600 hover:underline">
//                     {ele.name}
//                   </div>
//                   <div>{ele.age}</div>
//                   <div>{ele.university}</div>
//                 </div>

//                 <div className="flex space-x-4">
//                   <Link
//                     href={`/userlist/${ele._id}`}
//                     className="bg-green-700 text-white py-2 px-3 rounded-md font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 text-sm"
//                   >
//                     Edit user
//                   </Link>
//                   {/* Assuming DeleteUser is a client component and handles its own state/logic */}
//                   <div className="bg-red-600 text-white py-2 px-3 rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 text-sm">
//                     <DeleteUser id={ele._id} />
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </main>
//   );
// }
