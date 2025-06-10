import EcobankLogo from "../assets/Frame.svg"

const MyIssues = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-4">
            <img src={EcobankLogo || "/placeholder.svg"} alt="Ecobank Logo" className="h-10" />
          </div>
          <div className="w-full h-0.5 bg-[#0082BB]"></div>
        </div>
      </header>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6">My Issues</h1>
        <p>Your issues will appear here.</p>
      </main>
    </div>
  )
}

export default MyIssues
