
import '../Styles/Header.scss';

function Banner() {
    return (
      <header className='Profile'>
        <div>
          <h1 className='Profile-pic'>Img place holder</h1>
        </div>
        <div className='Description'>
            <h3 className='Job-name'>Développeuse webFrontend & Backend </h3>
            <div className='Button'>
                <a href='/' className='Job-name'>Git Hub </a>
                <a href='/' className='Job-name'>CV </a>
            </div>
        </div>

      </header>
    );
}

export default Banner;