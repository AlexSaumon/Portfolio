import { NavLink } from 'react-router';
import '../Styles/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
      <footer className='footer'>
          <h3>Alexandre Salmon</h3>
          <div className='phone-mail'>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <p>06 98 61 54 92</p>
          </div>
          <div className='phone-mail'>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>salmon_alexandre@outlook.fr</p>
          </div>
      </footer>
    );
}

export default Footer;