
import { useState, useCallback } from "react";
import FleetCard from "../components/FleetCard";

export default function Admin() {
  const [fleets, setFleets] = useState([]);
  const [form, setForm] = useState({
    reg: "", category: "", driver: "", status: "Available"
  });

  const addFleet = () => {
    if (!form.reg || !form.category || !form.driver) {
      alert("All fields required");
      return;
    }
    setFleets([...fleets, { ...form, id: Date.now() }]);
    setForm({ reg: "", category: "", driver: "", status: "Available" });
  };

  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new driver name");
    if (!name || !name.trim()) return;
    setFleets(fleets =>
      fleets.map(f => f.id === id ? { ...f, driver: name } : f)
    );
  }, []);

  const toggleStatus = useCallback((id) => {
    setFleets(fleets =>
      fleets.map(f => f.id === id ? { ...f, status: f.status === "Available" ? "Unavailable" : "Available" } : f)
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (confirm("Delete vehicle?")) {
      setFleets(fleets => fleets.filter(f => f.id !== id));
    }
  }, []);

  return (
    <div className="dashboard">
      <aside>
        <h3>Add Fleet</h3>
        <input placeholder="Reg No" value={form.reg} onChange={e => setForm({...form, reg:e.target.value})} />
        <select value={form.category} onChange={e => setForm({...form, category:e.target.value})}>
          <option value="">Select Category</option>
          <option>Auto</option><option>Car</option><option>Truck</option><option>Bus</option>
        </select>
        <input placeholder="Driver Name" value={form.driver} onChange={e => setForm({...form, driver:e.target.value})} />
        <select value={form.status} onChange={e => setForm({...form, status:e.target.value})}>
          <option>Available</option>
          <option>Unavailable</option>
        </select>
        <button onClick={addFleet}>Add Fleet</button>
      </aside>

      <main className="grid">
        {fleets.map(f => (
          <FleetCard
            key={f.id}
            data={f}
            onUpdate={updateDriver}
            onToggle={toggleStatus}
            onDelete={deleteFleet}
          />
        ))}
      </main>
    </div>
  );
}
