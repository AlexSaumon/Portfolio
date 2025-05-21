import '../../App.css'
import Header from '../../Components/Header'
import Form from '../../Components/Form'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'

function Home() {
  return (
    <><Header />
    <div className="App">
        <Banner />
          <div className='Description'>
            <h2>Description</h2>
          </div>
          <div className='Projets'>
            <h2>Projets récents</h2>
          </div>
          <div className='Service'>
            <h2>Services</h2>
          </div>
          <div className='Competences'>
            <h2>Compétences</h2>
          </div>
        <Form />
    </div>
    <Footer />
    </>

  );
}

export default Home;