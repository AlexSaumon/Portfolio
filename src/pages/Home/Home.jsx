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
            <Project />
          </div>
          <div className='Service part-body'>
            <section id='service'><h2 className='Part-title'>Services</h2></section>
            <ServiceSection />
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