import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold text-center">My Todo List</h1>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Welcome to the Home Page
          </h2>
          <p className="mb-6 text-gray-600 text-center">
            Manage your tasks efficiently!
          </p>

          <div className="flex flex-col space-y-4">
            <Link
              href={"/users"}
              className="block bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Go to Add Users Page
            </Link>
            <Link
              href={"/userlist"}
              className="block bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Users List Page
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-blue-600 text-white text-center py-4">
        &copy; 2025 My Todo App
      </footer>
    </main>
  );
}
