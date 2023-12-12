import axios from "axios";
import { useEffect, useState } from "react";

export function useUsersTable() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await axios.get(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
    );
    setUsers(response.data);
  }

  async function deleteUser(id) {
    await axios.delete(
      `https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`
    );
    await fetchUsers()
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, deleteUser };
}
