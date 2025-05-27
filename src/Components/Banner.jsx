
import '../Styles/Banner.scss';
import falconImg from '../picture/falcon.png';
import salmonCV from '../CV/SALMON-alexandre-CV.pdf';

function Banner() {
    return (
      <header className='Banner' id="banner">
        <div className='Profile'>
          <img src={falconImg} className="Profile-pic" alt="Falcon" />
        </div>
        <div className='Banner-text'>
            <h2 className='Job-name'>Développeuse web <br />Frontend & Backend </h2>
            <div className='Button-container'>
                <a href='/' className='Button'>Git Hub </a>
                <a href={salmonCV} target="_blank" rel="noopener noreferrer"  className='Button'>CV </a>
            </div>
        </div>

      </header>
    );
}

export default Banner;