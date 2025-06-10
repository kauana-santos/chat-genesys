import { Link } from "react-router-dom"
import "./Navbar.scss"
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link> */}
      <div className="barraLateralMenu">
        <button><img src="" alt="Conversas" /></button>
        <button><img src="" alt="configurações" /></button>
        <button><img src="" alt="perfil" /></button>
      </div>

      <div className="LogOff">
        <button><img src="" alt="logoff" /></button>
      </div>
          
    </nav>
  )
}

export default Navbar