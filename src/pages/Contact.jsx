import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const formId = import.meta.env.VITE_REACT_APP_FORM_ID;
const publicKey = import.meta.env.VITE_REACT_APP_USER_ID;

export default function Contact() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ validationErrors, setValidationErrors ] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Your name is required";
    }

    if (!email || !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) {
      errors.email = "Your email address is invalid";
    }

    if (!message) {
      errors.message = "Your message is required";
    } 

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

const sendEmail = async (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  try {
    const result = await emailjs.sendForm(
      serviceId,
      formId,
      event.target,
      publicKey,
    );

    event.target.reset();

    setName('');
    setEmail('');
    setMessage('');

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'from_name':
        setName(value);
        break;
      case 'user_email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
          break;
    }
    
  };

  return (
    <div>
      <h1>Contact Me</h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <form className="contact-form" onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="user-name">Name</label>
                <input
                type="text"
                className="user-name form-control"
                name="from_name"
                value={name}
                onChange={handleChange}
                required />
              </div>

              <div>
                <label htmlFor="user-email" className="user-email" name="user-email">
                  Email
                </label>
                <input
                type="text"
                className="user-email form-control"
                name="user_email"
                value={email}
                onChange={handleChange}
                required />
              </div>

              <div className="contact-form">
                <label htmlFor="message" className="user-message">
                  Message
                </label>
                <textarea
                className="message form-control"
                name="message"
                value={message}
                onChange={handleChange}
                required></textarea>
              </div>

              <div>
                <input
                type="submit" value="send" className="btn btn-primary" />
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}