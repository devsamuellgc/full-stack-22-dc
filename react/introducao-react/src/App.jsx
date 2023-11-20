import { List } from "./components/List";

export default function App() {
  const convidados = ["Samuel", "Lopes", "Teste"];
  return (
    <>
      <List nome="Convidados" items={convidados} />
    </>
  );
}
