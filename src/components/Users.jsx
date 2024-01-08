import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div>
        <Link to="/">Dobrodosli</Link>
        <Link to="/users">Korisnici</Link>
        <Link to="/orders">Narudzbe</Link>
      </div>
      <p>Useri...</p>
    </>
  );
}
