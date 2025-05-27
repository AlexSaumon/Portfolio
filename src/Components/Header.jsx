import '../Styles/Header.scss';

function Header() {
    return (
      <header className='header' id="main-header">
          <div className='Title'><h1>Alexandre Salmon</h1></div>
          <nav>
            <a href="#projet">Projets</a>
            <a href="#service">Services</a>
            <a href="#competence">Compétences</a>
            <a href="#form">Contact</a>
          </nav> 
      </header>
    );
}

export default Header;