import '../Styles/Form.scss';

function Form() {
    return (
      <div className='Form'>
        <h2>Me contacter</h2>
        <label>
          <p>E-mail</p>
        </label>
        <input className='Email' type="text" id="Contact" />
        <div className='Name-Surname'>
          <div className='name-container'>
            <label>
            <p>Nom</p>
            </label>
            <input className='Name' type="text" id="Contact" />
          </div>
          <div className='name-container'>
            <label>
            <p>Prenom</p>
            </label>
            <input className='Name' type="text" id="Contact" />
          </div>
        </div>
        <label>
          <p>Message</p>
        </label>
        <input className='Message' type="text" id="Contact" />
      </div>
    );
}

export default Form;