import { useEffect, useState } from "react";
import axios from "axios";

export function UseEffectComponent() {
  const [users, setUsers] = useState([]);

  async function fetchAllUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    setUsers(response.data);
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="border-t p-2 mt-2 border-black">
      <h2>Lidando com o useEffect</h2>
    </div>
  );
}
