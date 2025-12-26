import { useState, useEffect } from "react";
import { createTicket } from "../services/api";
import TicketList from "./TicketList";
...
<TicketList />

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState("");

  // Simulation d’un fetch de tickets (à remplacer par ton API plus tard)
  useEffect(() => {
    setTickets([
      { id: 1, title: "Diagnostic PC portable", status: "En cours" },
      { id: 2, title: "Installation Windows", status: "Terminé" },
    ]);
  }, []);

  async function handleCreateTicket() {
    if (!newTicket.trim()) return;

    const result = await createTicket({ title: newTicket });

    // Ajout local (en attendant ton backend complet)
    setTickets([...tickets, { id: Date.now(), title: newTicket, status: "Nouveau" }]);
    setNewTicket("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tableau de bord – Tickets</h2>

      {/* Formulaire de création */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Titre du ticket"
          value={newTicket}
          onChange={(e) => setNewTicket(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleCreateTicket}>Créer un ticket</button>
      </div>

      {/* Liste des tickets */}
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} style={{ marginBottom: "10px" }}>
            <strong>{ticket.title}</strong> — {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
