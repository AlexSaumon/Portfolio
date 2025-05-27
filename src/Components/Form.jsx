import { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/Form.scss';

function Form() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jvrndx4', 
      'template_86l4ktm',  
      form.current,
      'lz0cBoFyhx84Okh1Q' 
    )
    .then(() => {
      alert('Message envoyé avec succès !');
    })
    .catch((error) => {
      console.error('Erreur:', error);
      alert('Une erreur est survenue.');
    });
  };

    return (
      <form ref={form} onSubmit={sendEmail}  className='Form'>
        <h2>Me contacter</h2>
        <label>
          <p>E-mail</p>
        </label>
        <input className='Email' type="email" name="user_email" placeholder='exemple@Email.com' required id="Contact" />
        <div className='Name-Surname'>
          <div className='name-container'>
            <label>
            <p>Nom</p>
            </label>
            <input className='Name' type="text" name="last_name" placeholder='Nom' id="Contact" />
          </div>
          <div className='name-container'>
            <label>
            <p>Prénom</p>
            </label>
            <input className='Name' type="text" name="first_name" placeholder='Prénom' id="Contact" />
          </div>
        </div>
          <label>
          <p>Message</p>
        </label>
        <textarea className='Message' name="message" placeholder='Votre message ici' required id="Contact" />
        <button type="submit">Envoyer</button>
      </form>
    );
}

export default Form;