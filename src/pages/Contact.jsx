import React from "react";
import emailjs from '@emailjs/browser';
import env from 'react-dotenv';

const serviceId = import.meta.env.REACT_APP_SERVICE_ID;
const formId = import.meta.env.REACT_APP_FORM_ID;
const publicKey = import.meta.env.REACT_APP_USER_ID;

const sendEmail = async (event) => {
  event.preventDefault();

  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_REACT_APP_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_FORM_ID,
      event.target,
      import.meta.env.VITE_REACT_APP_USER_ID,
    );

    event.target.reset();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export default function Contact() {

  return (

    <div>
      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="user-name">Name</label>
          <input type="text" className="user-name" name="from_name" required/>
        </div>

        <div>
          <label htmlFor="user-email" className="user-email" name="user-email">Email</label>
          <input type="text" className="user-email" name="user_email" required />
        </div>

        <div className="contact-form">
          <label htmlFor="message" className="user-message" >Message</label>
          <textarea className="message" name="message" required></textarea>
        </div>

        <div>
          <input type="submit" value="send"  className="btn btn-primary" />          
        </div>

      </form>
    </div>

  );
}