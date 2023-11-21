import logo from "../../assets/images/logo.webp";

export function Header() {
  return (
    <header
      className="
         py-4 
         flex 
         px-10 
         items-center
         justify-between
         bg-sky-900"
    >
      <img className="h-10" src={logo} alt="" />
      <div className="flex items-center gap-2 text-white">
        <box-icon name="user-circle" color="#fff"></box-icon>
        <p>Olá, Samuel</p>
      </div>
    </header>
  );
}
