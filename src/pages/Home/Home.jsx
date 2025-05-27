import '../../App.scss'
import Header from '../../Components/Header'
import Form from '../../Components/Form'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import Scroll from '../../Components/Scroll'
import Skill from '../../Components/Skill-icon'
import falconImg from '../../picture/falcon.png';
import test1 from '../../picture/ffxiv_11052025_225429_674.png';
import test2 from '../../picture/ffxiv_18052025_211712_588.png';

function Home() {
  return (
    <><Scroll />
    <div className="App">
          <div className='Description part-body' >
            <div className='Introduction-container'>
                <p className='Introduction'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras </p>
            </div>
            <div className='Profile-pic-big-container'>
                <img src={falconImg} className="Profile-pic-big" alt="Falcon" />
            </div>
          </div>
          <div className='Projets-recent part-body'>
            <h2 className='Part-title'>Projets récents</h2>
            <div className='projet'>
              <img src={test1} className="projet-pic" alt="Falcon" />
              <p className='projet-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras </p>
            </div>
            <div className='projet'>
              <img src={test2} className="projet-pic" alt="Falcon" />
              <p className='projet-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras </p>
            </div>
          </div>
          <div className='Service part-body'>
            <h2 className='Part-title'>Services</h2>
            <div className='service-container'>
              <p className='service-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras </p>
              <p className='service-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras </p>
              <p className='service-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras </p>
            </div>
          </div>
          <div className='Competences part-body'>
            <h2 className='Part-title'>Compétences</h2>
            <Skill />
          </div>
        <Form />
    </div>
    <Footer />
    </>

  );
}

export default Home;