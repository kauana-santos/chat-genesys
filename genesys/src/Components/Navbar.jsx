import { Link } from "react-router-dom"
import "./Navbar.scss"
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidebar">
      {/* <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link> */}
      <nav className="sidebar-nav">
        <div className="barraLateralMenu">
          <button><Link to="/">Home</Link></button>
          <button><Link to="/contact">Contato</Link></button>
          <button><img src="" alt="perfil" /></button>
        </div>
        <div className="LogOff">
          <button><img src="" alt="logoff" /></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar