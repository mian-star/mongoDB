'use client';

export default function DeleteUser({ id, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();

      if (data.success) {
        alert("User deleted successfully.");
        if (onDeleteSuccess) onDeleteSuccess(id); // 👈 update parent
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred.");
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete User
    </button>
  );
}


















// 'use client'

// import { useRouter } from "next/navigation";

// export default function DeleteCom(props) { // Changed component name to DeleteCom
//     const router = useRouter();

//     const myfun = async () => {
//         try {
//             const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${props.id}`, {
//                 method: "DELETE"
//             });

//             const response = await request.json();

//             if (response.success) {
//                 alert('User deleted successfully...');
//                 router.push("/userlist");
//             } else {
//                 // Handle potential API errors (e.g., show a message)
//                 alert('Failed to delete user. Please try again.');
//             }
//         } catch (error) {
//             console.error("Error deleting user:", error);
//             alert('An error occurred while deleting the user.');
//         }
//     }

//     return (
//         <button
//             onClick={myfun}
//         >
//             Delete User
//         </button>
//     )
// }