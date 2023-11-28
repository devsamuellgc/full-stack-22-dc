import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { ClientsTable } from "../components/Table/ClientsTable";
import Hooks from "../pages/Hooks";

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
        path: "/clientes",
        element: <ClientsTable />,
      },
      {
        path: "/produtos",
        element: <h1>Olá produtos</h1>,
      },
    ],
  }
]);
