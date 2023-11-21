import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function MainLayout() {
  return (
    <main>
      <Header />
      <section className="min-h-screen flex bg-slate-100">
        <Sidebar />
        <div className="p-5">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
