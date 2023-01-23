import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMassage', 'template_gn8oq7v', form.current, '6Sub_TiFZ8T3dChzk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="enviarEmail">
      <label>Name</label>
      <input required type="text" name="name"  />
      <label>Email</label>
      <input required type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input required type="submit" value="Enviar" />
    </form>
  );
};