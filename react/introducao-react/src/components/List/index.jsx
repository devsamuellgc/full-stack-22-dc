import { ListItem } from "./components/ListItem";

export function List({ nome, items }) {
  return (
    <div>
      <h2 className="text-7xl">Lista de {nome}:</h2>
      <ul>
        {items.map((value, index) => (
          <ListItem key={index} item={value} />
        ))}
      </ul>
    </div>
  );
}
