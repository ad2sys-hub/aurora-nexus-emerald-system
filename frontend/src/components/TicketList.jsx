import { useEffect, useState } from "react";

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function fetchTickets() {
      const res = await fetch("https://aurora-api.onrender.com/tickets");
      const data = await res.json();
      setTickets(data.tickets || []);
    }

    fetchTickets();
  }, []);

  return (
    <div>
      <h3>Tickets en direct</h3>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            <strong>{ticket.title}</strong> — {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
