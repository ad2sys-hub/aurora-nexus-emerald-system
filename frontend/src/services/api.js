export const API_URL = "https://aurora-api.onrender.com";

export async function createTicket(data) {
  const res = await fetch(`${API_URL}/tickets`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
