'use client'

import { useRouter } from "next/navigation";

export default function DeleteCom(props) { // Changed component name to DeleteCom
    const router = useRouter();

    const myfun = async () => {
        try {
            const request = await fetch(`http://localhost:3000/api/products/${props.id}`, {
                method: "DELETE"
            });

            const response = await request.json();

            if (response.success) {
                alert('User deleted successfully...');
                router.push("/userlist");
            } else {
                // Handle potential API errors (e.g., show a message)
                alert('Failed to delete user. Please try again.');
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert('An error occurred while deleting the user.');
        }
    }

    return (
        <button
            onClick={myfun}
            className="bg-red-600 text-white py-1 px-3 rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 text-sm"
        >
            Delete User
        </button>
    )
}