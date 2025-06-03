import '../Styles/Skill-icon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import OCImg from '../picture/20640b174.png';

function Skill() {
    return (
      <div className='skill-section'>
        <h3 className='sub-part-title'>Front End</h3>
                    <div className='skills'>
                      <div className='skill-container'>
                        <p>React</p>
                        <div className='skill-icon-button'><FontAwesomeIcon className='skill-icon' icon={faReact} /></div>
                      </div>
                      <div className='skill-container'>
                        <p>CSS</p>
                        <div className='skill-icon-button' ><FontAwesomeIcon icon={faCss} className='skill-icon'/></div>
                      </div>
                      <div className='skill-container'>
                        <p>Javascript</p>
                        <div className='skill-icon-button' ><FontAwesomeIcon icon={faJs} className='skill-icon' /></div>
                      </div>
                    </div>
                    <h3 className='sub-part-title'>Back End</h3>
                    <div className='skills'>
                      <div className='skill-container'>
                        <p>Node JS</p>
                        <div className='skill-icon-button' ><FontAwesomeIcon icon={faNodeJs} className='skill-icon'/></div>
                      </div>
                      <div className='skill-container'>
                        <p>MongoDB</p>
                        <div className='skill-icon-button' ><FontAwesomeIcon icon={faDatabase} className='skill-icon' /></div>
                      </div>
                      <div className='skill-container'>
                        <p>Express</p>
                        <div className='skill-icon-button' ><FontAwesomeIcon icon={faServer} className='skill-icon' /></div>
                      </div>
                    </div>
                    <h3 className='sub-part-title'>Formation</h3>
                    <div className='courses'>
                        <div className='skill-icon-button' ><img src={OCImg} className='skill-icon' alt="Falcon" /></div>
                        <p className='courses-description'>2024-2025 Formation Dévellopeur-Dévellopeuse Web à Openclassrom </p>
                    </div>    
      </div>
    );
}

export default Skill;