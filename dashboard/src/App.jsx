import { useState } from "react";
import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Rules from "./pages/Rules";
import Events from "./pages/Events";

export default function App() {
  const [page, setPage] = useState("dashboard");

  let content;

  if (page === "dashboard") content = <Dashboard />;
  if (page === "devices") content = <Devices />;
  if (page === "rules") content = <Rules />;
  if (page === "events") content = <Events />;

  return (
    <MainLayout>
      <div className="mb-4 space-x-2">
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("devices")}>Devices</button>
        <button onClick={() => setPage("rules")}>Rules</button>
        <button onClick={() => setPage("events")}>Events</button>
      </div>

      {content}
    </MainLayout>
  );
}