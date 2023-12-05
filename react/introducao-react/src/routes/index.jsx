import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { ClientsTable } from "../components/shered/Table/ClientsTable";
import Hooks from "../pages/Hooks";
import UsersPage from "../pages/Users";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Hooks />,
      },
      {
        path: "/usuarios",
        element: <UsersPage />,
      },
      {
        path: "/clientes",
        element: <ClientsTable />,
      },
      {
        path: "/produtos",
        element: <h1>Olá produtos</h1>,
      },
    ],
  },
]);
