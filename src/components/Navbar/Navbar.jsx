import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <Link to="/" className="navbar-brand">Buenas Chelas</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-lg-3">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/category/nacional" className="nav-link">Cervezas Nacionales</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/importada" className="nav-link">Cervezas Importadas</Link>
          </li>
          {/*  <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              Estilos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Lager</a>
              <a className="dropdown-item" href="#">Roja</a>
              <a className="dropdown-item" href="#">Negra</a>
            </div>
          </li> */}
        </ul>        
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;