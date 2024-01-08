import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Link to="/">Dobrodosli</Link>
        <Link to="/users">Korisnici</Link>
        <Link to="/orders">Narudzbe</Link>
      </div>
      <button onClick={() => navigate("/users")}>Otvori korisnike</button>
      <p>Narudzbe...</p>
    </>
  );
}
