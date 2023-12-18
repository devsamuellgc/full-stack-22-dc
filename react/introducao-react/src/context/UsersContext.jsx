import { createContext, useContext, useState } from "react";

const UsersContext = createContext(null);

function UsersProvider({ children }) {
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

  function clearFields() {
    user.name = "";
    user.lastName = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (user.name.length > 2 && user.lastName.length >= 3) {
      createUser();
      clearFields();
      toast.success("Usuário criado com sucesso!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
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
    toast.success("Usuário deletado com sucesso!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
    await fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const values = {
    name,
    setName,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
}

function useUsersContext() {
  const context = useContext(UsersContext);
  return context;
}

export { UsersProvider, useUsersContext };
