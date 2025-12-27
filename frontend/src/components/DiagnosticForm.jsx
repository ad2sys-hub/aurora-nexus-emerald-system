import { useState } from "react";

function DiagnosticForm() {
  const [form, setForm] = useState({
    device: "",
    issue: "",
    urgency: "Moyenne",
  });

  async function submitDiagnostic() {
    const res = await fetch("https://aurora-api.onrender.com/diagnostics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert("Diagnostic envoyé !");
  }

  return (
    <div>
      <h3>Créer un diagnostic</h3>

      <input
        type="text"
        placeholder="Appareil"
        value={form.device}
        onChange={(e) => setForm({ ...form, device: e.target.value })}
      />

      <input
        type="text"
        placeholder="Problème"
        value={form.issue}
        onChange={(e) => setForm({ ...form, issue: e.target.value })}
      />

      <select
        value={form.urgency}
        onChange={(e) => setForm({ ...form, urgency: e.target.value })}
      >
        <option>Faible</option>
        <option>Moyenne</option>
        <option>Haute</option>
      </select>

      <button onClick={submitDiagnostic}>Envoyer</button>
    </div>
  );
}

export default DiagnosticForm;
