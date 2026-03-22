export default function Sidebar() {
    return (
      <div className="w-64 bg-gray-900 p-4">
        <h1 className="text-xl font-bold mb-8">Home AI</h1>
  
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-400">🏠 Dashboard</a>
          <a href="#" className="block hover:text-blue-400">📡 Devices</a>
          <a href="#" className="block hover:text-blue-400">⚙️ Rules</a>
          <a href="#" className="block hover:text-blue-400">🔴 Events</a>
        </nav>
      </div>
    );
  }