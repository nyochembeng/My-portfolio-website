import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();
  const serviceId = 'gmail_contact_service';
  const contactFormId = 'contact_form';
  const autoReplyId = 'auto_reply';
  const publicKey = '1k8UN9AL89KIfTcW_';

  const resetFormFields = (form) => {
    // Clear the values of all form fields
    form.querySelectorAll('input, textarea').forEach((field) => {
      field.value = '';
    });
  };

  const sendNotificationEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      to_name: 'Nyochembeng Enzo Nkengafack',
      to_email: 'nyochembengn@gmail.com',
      from_name: form.current.name.value,
      from_email: form.current.email.value,
      reply_to: form.current.email.value,
      message: form.current.message.value,
    };

    emailjs.send(serviceId, contactFormId, emailParams, publicKey)
      .then((result) => {
        console.log(result.text);

        // Alert
        alert('Your message has been sent successfully!');
        const alertBox = document.querySelector('.alert');
        alertBox.style.backgroundColor = 'orange';
        alertBox.style.color = 'white';

        // Reset the form fields
        form.current.reset();

        // Remove the alert box after 2 seconds
        setTimeout(() => {
          alertBox.remove();
        }, 2000);
      },
        (error) => {
          console.log(error.text);

          // Alert
          alert('There was an error sending your message. Please check your internet connection and try again.');
          const alertBox = document.querySelector('.alert');
          alertBox.style.backgroundColor = 'red';
          alertBox.style.color = 'white';

          // Remove the alert box after 3 seconds
          setTimeout(() => {
            alertBox.remove();
          }, 3000);
        });
  };

  // Receive auto-reply email from visitor
  const sendAutoReplyEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      to_name: form.current.name.value,
      to_email: form.current.email.value,
      from_name: 'Nyochembeng Enzo Nkengafack',
      from_email: 'nyochembengn@gmail.com',
      reply_to: 'nyochembengn@gmail.com',
    };

    emailjs.send(serviceId, autoReplyId, emailParams, publicKey)
      .then((result) => {
        console.log(result.text);
      },
        (error) => {
          console.log(error.text);
        });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send notification email to me
    sendNotificationEmail(e);

    // Send auto-reply email to visitor
    sendAutoReplyEmail(e);

    // Reset the form fields forcefully
    resetFormFields(form.current);
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>nyochembengn@gmail.com</h5>
            <a href="mailto:nyochembengn@gmail.com" target="_blank" rel="noreferrer"> Send a message </a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option__icon" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> Hit me up</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>Direct message</h5>
            <a href="https://web.whatsapp.com/send?phone=+237682113688" target="_blank" rel="noreferrer"> Inbox me </a>
          </article>

        </div>
        <form ref={form} onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required ></textarea>
          <button type="submit" className="btn btn-primary"> Send Message </button>
        </form>
      </div>
      <div className="alert"></div>
    </section>
  );
}

export default Contact;
