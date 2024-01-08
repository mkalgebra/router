import { Link } from "react-router-dom";

export default function IndexComp() {
  return (
    <>
      <div>
        <Link to="/">Dobrodosli</Link>
        <Link to="/users">Korisnici</Link>
        <Link to="/orders">Narudzbe</Link>
      </div>
      <p>
        Dobrodosli na nase web mjesto, kako Vam mozemo pomoci gospodo haaaa?
      </p>
    </>
  );
}
