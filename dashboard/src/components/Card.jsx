export default function Card({ children }) {
    return (
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        {children}
      </div>
    );
  }