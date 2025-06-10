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
        >
            Delete User
        </button>
    )
}