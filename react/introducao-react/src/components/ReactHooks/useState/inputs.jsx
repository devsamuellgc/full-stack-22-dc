import { useEffect, useState } from "react";

export function Inputs() {
  const [user, setUser] = useState({
    nome: "",
    lastName: "",
    date: "",
  });

  function handleInput(e) {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleDateShow(value) {
    const date = new Date(value).toLocaleDateString("pt-br", {
      dateStyle: "short",
      hour12: false,
      timeZone: "UTC",
    });

    return date;
  }

  useEffect(() => {
    console.log(handleDateShow(user.date));
  }, []);

  return (
    <>
      <h2>Lidando com Inputs no React com useState</h2>
      <div className="flex flex-col gap-2">
        <input
          className="border border-black rounded px-2 py-1 outline-none"
          type="text"
          placeholder="Nome"
          name="nome"
          value={user.nome}
          onChange={handleInput}
        />
        <input
          className="border border-black rounded px-2 py-1 outline-none"
          type="text"
          placeholder="Sobrenome"
          name="lastName"
          value={user.lastName}
          onChange={handleInput}
        />
        <input
          className="border border-black rounded px-2 py-1 outline-none"
          type="date"
          placeholder="Data de aniversário"
          name="date"
          value={user.date}
          onChange={handleInput}
        />
      </div>
      <div>
        <p>
          {user.name} {user.lastName}
        </p>
        <p>{user.date ? handleDateShow(user.date) : ""}</p>
      </div>
    </>
  );
}
