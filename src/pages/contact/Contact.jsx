import { useState } from 'react';
import { sendForm } from '@emailjs/browser';
import { Form, Button, Container } from 'react-bootstrap';
import './contact.css';

const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_REACT_APP_USER_ID;
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null); //'success', 'error, or null
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Your name is required';
    }

    if (
      !email ||
      !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email)
    ) {
      errors.email = 'Your email address is invalid';
    }

    if (!message) {
      errors.message = 'Your message is required';
    }

    return Object.keys(errors).length === 0;
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await sendForm(
        serviceId,
        templateId,
        event.target,
        publicKey
      );

      event.target.reset();

      setName('');
      setEmail('');
      setMessage('');

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again.'
      );
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

    // Clear any existing status messages when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setSubmitMessage('');
    }
  };

  return (
    <Container className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <Form onSubmit={sendEmail} className="contact-form">
        <Form.Group controlId="formName" className="form-group">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            name="from_name"
            value={name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="form-group">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            value={email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="form-group">
          <Form.Label className="form-label">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={message}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Send
        </Button>
        {submitStatus && (
          <div
            className={`alert mt-3 ${
              submitStatus === 'success' ? 'alert-success' : 'alert-error'
            }`}
          >
            {submitMessage}
          </div>
        )}
      </Form>
    </Container>
  );
}
