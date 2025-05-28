import '../../App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from '../../Components/Form'
import Footer from '../../Components/Footer'
import Scroll from '../../Components/Scroll'
import Skill from '../../Components/Skill-icon'
import falconImg from '../../picture/falcon.png';
import kasa from '../../picture/kasa.png';
import Mon_vieux_grimoire from '../../picture/Mon_vieux_grimoire.png';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <><Scroll />
    <div className="App">
          <div className='Description part-body' >
            <div className='Introduction-container'>
                <p className='Introduction'>Je conçois et réalise des sites web en fonctions de vos besoins et en vous accompagnant pour vous aidez à réaliser vos projets. </p>
            </div>
            <div className='Profile-pic-big-container'>
                <img src={falconImg} className="Profile-pic-big" alt="Falcon" />
            </div>
          </div>
          <div className='Projets-recent part-body'>
            <section id='projet'><h2  className='Part-title'>Projets récents</h2></section>
            <div className='projet-body'>
              <div className='projet'>
                <img src={Mon_vieux_grimoire} className="projet-pic" alt="Falcon" />
                <div className='projet-description'>
                  <h3>Mon vieux grimoire</h3>
                  <p>Site web de notation de livre. Les utilisateur.ices peuvent créent de nouvelles page
                    quand ils sont connecter afin d'ajouter un nouveau livre et de mettre une note visible 
                    par le public.
                  </p>
                  <a href='https://github.com/AlexSaumon' className='Button'>Git Hub </a>
                </div>
              </div>
              <div className='projet'>
                <img src={kasa} className="projet-pic" alt="Falcon" />
                <div className='projet-description'>
                  <h3>Kasa</h3>
                  <p>Application web de location immobilière. Les utilisateur.ices peuvent consulter 
                    les divers logement ouver à la location.
                  </p>
                  <a href='https://github.com/AlexSaumon' className='Button'>Git Hub </a>
                </div>
              </div>
            </div>
          </div>
          <div className='Service part-body'>
            <section id='service'><h2 className='Part-title'>Services</h2></section>
            <div className='service-container'>
              <div className='service-description'>
                <div className='service-title'>
                  <FontAwesomeIcon className='service-icon' icon={faDesktop} />
                  <h3>Création d'application web</h3>
                </div>
                <p>De la conception à la mise en ligne, je réalise des sites vitrines, 
                  e-commerces, applications web, mobiles ou de bureau, entièrement adaptés à vos 
                  besoins et à vos objectifs. 
                </p>
              </div>
              <div className='service-description'>
                <div className='service-title'>
                  <FontAwesomeIcon className='service-icon' icon={faWrench} />
                  <h3>Accompagnement et maintenance</h3>
                </div>
                <p>Je vous accompagne sur le long terme : correction de bugs, mises à jour techniques, 
                  ajout de nouvelles fonctionnalités ou optimisation des performances.
                </p>
              </div>
              <div className='service-description'>
                <div className='service-title'>
                  <FontAwesomeIcon className='service-icon' icon={faAccessibleIcon} />
                  <h3>Accessibilité</h3>
                </div>
                <p>Je conçois des interfaces inclusives, accessibles à tous les utilisateurs, 
                  quels que soient leurs handicaps.</p>
              </div>
            </div>
          </div>
          <div className='Competences part-body'>
            <section id='competence'><h2 className='Part-title'>Compétences</h2></section>
            <Skill />
          </div>
        <Form />
    </div>
    <Footer />
    </>

  );
}

export default Home;