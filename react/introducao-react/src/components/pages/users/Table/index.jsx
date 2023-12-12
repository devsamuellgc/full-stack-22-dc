// import { useUsersTable } from "./hooks/useTable";

export function UsersTable({ users, deleteUser }) {
  // const { users, deleteUser } = useUsersTable();

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>
              <button onClick={() => deleteUser(user.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
