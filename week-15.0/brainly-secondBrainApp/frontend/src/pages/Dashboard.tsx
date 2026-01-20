import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">
          Your Second Brain
        </h1>
        <p className="text-gray-500 mt-2">
          Content will appear here
        </p>
      </main>
    </div>
  )
}

export default Dashboard
