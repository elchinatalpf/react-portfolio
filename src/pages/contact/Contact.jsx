import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './contact.css';

const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
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
      templateId,
      event.target,
      publicKey,
    );
    
    event.target.reset();
    
    setName('');
    setEmail('');
    setMessage('');
    
    console.log("Email sent successfully" ,result);
  } catch (err) {
    console.log("Error sending email", err);
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

        </Form>
    </Container>
      );
    }