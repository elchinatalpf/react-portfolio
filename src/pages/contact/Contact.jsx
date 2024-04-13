import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './contact.css';

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
    <Container className="contact-container">
      <h1>Contact Me</h1>
      <Form onSubmit={sendEmail}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            name="from_name"
            value={name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name={message}
            value={message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
        {/* <div className="container">
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
        </div> */}
        </Form>
    </Container>
  );
}