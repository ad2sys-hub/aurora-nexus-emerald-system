import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function fetchMessage() {
    const res = await fetch("https://aurora-api.onrender.com/");
    const data = await res.json();
    setMessage(data.message);
  }

  return (
    <div>
      <h1>Aurora Nexus Emerald System</h1>
      <button onClick={fetchMessage}>Ping API</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
