const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Buenas Chelas</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-lg-3">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cervezas Nacionales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cervezas Importadas</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              Estilos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Lager</a>
              <a className="dropdown-item" href="#">Roja</a>
              <a className="dropdown-item" href="#">Negra</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="buscar marca" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
        <button className="btn btn-outline-secondary ml-2"><i className="fas fa-shopping-cart"></i><span className="cart-counter">99</span></button>
      </div>
    </nav>
  );
}

export default Navbar;