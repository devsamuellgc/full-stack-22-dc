// import { useUsersForm } from "./useUsersForm";

export function Form({ user, handleUser, handleSubmit }) {
  // const { user, handleUser, handleSubmit } = useUsersForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="
          flex flex-col gap-2 px-4 py-3 
          border rounded-md justify-center items-center bg-white shadow"
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          className="outline-none border border-black rounded px-2 py-1"
          placeholder="Seu nome aqui"
          id="name"
          name="name"
          value={user.name}
          onChange={handleUser}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="lastName">Sobrenome</label>
        <input
          type="text"
          className="outline-none border border-black rounded px-2 py-1"
          placeholder="Seu sobrenome aqui"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleUser}
        />
      </div>
      <button
        className="
            w-full h-10 flex justify-center items-center 
            text-white bg-sky-950 rounded-md shadow"
      >
        Enviar
      </button>
    </form>
  );
}
