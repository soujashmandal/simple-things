import useWebSocket from "../hooks/useWebSocket";

export default function Events() {
  const events = useWebSocket("ws://localhost:8000/ws/events");

  return (
    <div className="space-y-2">
      {events.map((e, i) => (
        <div key={i} className="bg-gray-800 p-2 rounded">
          {e.type} → {e.source}
        </div>
      ))}
    </div>
  );
}