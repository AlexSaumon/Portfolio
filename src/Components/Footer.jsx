import { NavLink } from 'react-router';
import '../Styles/Header.scss';

function Footer() {
    return (
      <header>
          <h3>Alexandre Salmon</h3>
          <nav>
            <NavLink to="/Contact" >Contact</NavLink>
            <NavLink to="/Apropos" >Projet</NavLink>
          </nav> 
          <p>lien RS place holder</p>
      </header>
    );
}

export default Footer;