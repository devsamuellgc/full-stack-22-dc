import axios from "axios";
import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  function handleUser(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function createUser() {
    await axios.post(
      "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users",
      user
    );
    await fetchUsers();
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUser();
  }

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
    await fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { user, users, handleUser, handleSubmit, deleteUser };
}
