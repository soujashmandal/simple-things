import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <h2>Devices</h2>
        <p>5 Active</p>
      </Card>

      <Card>
        <h2>Events</h2>
        <p>120 today</p>
      </Card>

      <Card>
        <h2>Rules</h2>
        <p>3 Active</p>
      </Card>
    </div>
  );
}