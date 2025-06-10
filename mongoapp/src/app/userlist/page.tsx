import DeleteUser from "../../lib/DeleteUser";
import Link from "next/link";

const userList = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/products", {
      cache: "no-cache",
    });
    const response = await data.json();
    console.log(response);
    // Assuming the API returns an object with a 'data' property that is an array
    return response.data || []; // Return empty array if data is not available
  } catch (error) {
    console.error("Error fetching user list:", error);
    return []; // Return empty array in case of error
  }
};

export default async function Page() {
  const realData = await userList();
  console.log(realData);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Users List
      </h1>

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
                <div>
                  {ele.age}
                </div>
                <div>
                  {ele.university}
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href={`/userlist/${ele._id}`}
                  className="bg-green-700 text-white py-2 px-3 rounded-md font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 text-sm"
                >
                  Edit user
                </Link>
                {/* Assuming DeleteUser is a client component and handles its own state/logic */}
                <div className="py-1 px-3">
                  <DeleteUser id={ele._id} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
