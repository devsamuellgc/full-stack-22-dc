import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "..";

const data = [
  {
    firstName: "Samuel",
    lastName: "Lopes",
    age: 24,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("firstName", {
    header: () => <span>Nome</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: () => <span>Sobrenome</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: () => <span>Idade</span>,
    cell: (info) => info.renderValue(),
  }),
];

export function ClientsTable() {
  return <DataTable data={data} columns={columns} />;
}
