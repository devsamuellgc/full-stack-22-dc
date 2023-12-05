import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="w-2/12 bg-white">
      <ul className="flex flex-col gap-2 px-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuários</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/clientes">Clientes</Link>
        </li>
      </ul>
    </div>
  );
}
