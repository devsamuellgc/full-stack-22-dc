import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { ClientsTable } from "../components/shered/Table/ClientsTable";
import Hooks from "../pages/Hooks";
import UsersPage from "../pages/Users";
import { UsersProvider } from "../context/UsersContext";

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
        element: (
          <UsersProvider>
            <UsersPage />
          </UsersProvider>
        ),
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
