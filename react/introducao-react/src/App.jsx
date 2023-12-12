import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />;
      <ToastContainer />
    </>
  );
}

// import { List } from "./components/List";
// const convidados = ["Samuel", "Lopes", "Teste"];
{
  /* <List nome="Convidados" items={convidados} /> */
}
