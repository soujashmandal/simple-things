import { useEffect, useState } from "react";

export default function useWebSocket(url) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      setEvents((prev) => [data, ...prev]);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => ws.close();
  }, [url]);

  return events;
}