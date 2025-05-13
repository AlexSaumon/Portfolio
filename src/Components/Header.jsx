import { NavLink } from 'react-router';
import '../Styles/Header.scss';

function Header() {
    return (
      <header>
          <h1>Alexandre Salmon</h1>
          <nav>
            <NavLink to="/Contact" >Contact</NavLink>
            <NavLink to="/Apropos" >Projet</NavLink>
          </nav> 
      </header>
    );
}

export default Header;