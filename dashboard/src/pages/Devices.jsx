import { useEffect, useState } from "react";
import api from "../services/api";
import Card from "../components/Card";

export default function Devices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    api.get("/devices").then(res => setDevices(res.data));
  }, []);

  return (
    <div className="space-y-4">
      {devices.map((d) => (
        <Card key={d.id}>
          <h3>{d.name}</h3>
          <p>Status: {d.status}</p>
        </Card>
      ))}
    </div>
  );
}