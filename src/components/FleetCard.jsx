
import React from "react";

function FleetCard({ data, onUpdate, onToggle, onDelete }) {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=150&h=150&fit=crop&crop=center" alt="Vehicle" />
      <h4>{data.reg}</h4>
      <p>{data.category}</p>
      <p>Driver: {data.driver}</p>
      <p>Status: {data.status}</p>
      <button onClick={() => onUpdate(data.id)}>Update Driver</button>
      <button onClick={() => onToggle(data.id)}>Toggle Status</button>
      <button onClick={() => onDelete(data.id)}>Delete</button>
    </div>
  );
}

export default React.memo(FleetCard);
