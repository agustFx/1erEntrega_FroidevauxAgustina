import './navbar.css'
import Dropdown from './Dropdown/Dropdown';
import Secciones from './Secciones/Secciones';
import NameBrand from './NameBrand/NameBrand';
import CartWidge from './CartWidge/CartWidge';

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NameBrand/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Secciones/>
        <Dropdown/>
      </ul>
      <CartWidge/>
    </div>
  </div>
</nav>

  )
}

export default Navbar;
