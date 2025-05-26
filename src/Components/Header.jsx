import { NavLink } from 'react-router';
import '../Styles/Header.scss';

function Header() {
    return (
      <header className='Header'>
          <div className='Title'><h1>Alexandre Salmon</h1></div>
          <nav>
            <NavLink to="/Contact" >Contact</NavLink>
            <NavLink to="/Apropos" >Projet</NavLink>
          </nav> 
      </header>
    );
}

export default Header;