import '../../App.scss'
import Form from '../../Components/Form'
import Footer from '../../Components/Footer'
import Scroll from '../../Components/Scroll'
import Skill from '../../Components/Skill-icon'
import Project from '../../Components/Project'
import ServiceSection from '../../Components/Service'
import falconImg from '../../picture/falcon.png';

function Home() {
  return (
        <>
      <Scroll />
      <div className="app">
        <div className='description part-body'>
          <div className='introduction-container'>
            <p className='introduction'>
              Je conçois et réalise des sites web en fonction de vos besoins, en vous accompagnant pour vous aider à concrétiser vos projets.
            </p>
          </div>
          <div className='profile-pic-big-container'>
            <img src={falconImg} className="profile-pic-big" alt="Falcon" />
          </div>
        </div>

        <div className='projets-recent part-body'>
          <section id='projet'><h2 className='part-title'>Projets récents</h2></section>
          <Project />
        </div>

        <div className='service part-body'>
          <section id='service'><h2 className='part-title'>Services</h2></section>
          <ServiceSection />
        </div>

        <div className='competences part-body'>
          <section id='competence'><h2 className='part-title'>Compétences</h2></section>
          <Skill />
        </div>

        <Form />
      </div>
      <Footer />
    </>
  );
}

export default Home;