import { useState } from 'react';
import { sendForm } from '@emailjs/browser';

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

    if (!email || !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email)) {
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
      await sendForm(serviceId, templateId, event.target, publicKey);

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
      console.error('EmailJS error:', err);
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
    <div className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-gradient-teal rounded-3 shadow-lg p-5 animate-fade-in-up">
              {/* Header */}
              <div className="text-center mb-5">
                <h1 className="display-2 fw-bold text-light mb-3">
                  Let's Connect
                </h1>
                <p className="lead fs-4 text-tan">
                  Have a project in mind? I'd love to hear from you!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="row g-3 mb-5">
                <div className="col-md-4">
                  <a
                    href="mailto:elchinatalpf@gmail.com"
                    className="text-decoration-none"
                  >
                    <div className="text-center p-3 bg-dark bg-opacity-25 rounded-3 hover-lift">
                      <i className="bi bi-envelope fs-1 text-info mb-2 d-block"></i>
                      <p className="mb-0 text-light small">Email Me</p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="https://www.linkedin.com/in/javier-morales-08642baa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="text-center p-3 bg-dark bg-opacity-25 rounded-3 hover-lift">
                      <i className="bi bi-linkedin fs-1 text-info mb-2 d-block"></i>
                      <p className="mb-0 text-light small">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="https://github.com/elchinatalpf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="text-center p-3 bg-dark bg-opacity-25 rounded-3 hover-lift">
                      <i className="bi bi-github fs-1 text-info mb-2 d-block"></i>
                      <p className="mb-0 text-light small">View My Code</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={sendEmail}
                className="bg-dark bg-opacity-25 rounded-3 p-4"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="formName"
                      className="form-label text-light fw-semibold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="formName"
                      name="from_name"
                      value={name}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-dark bg-opacity-50 text-light border-0 shadow-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label
                      htmlFor="formEmail"
                      className="form-label text-light fw-semibold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="formEmail"
                      name="user_email"
                      value={email}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-dark bg-opacity-50 text-light border-0 shadow-sm"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="formMessage"
                      className="form-label text-light fw-semibold"
                    >
                      Message
                    </label>
                    <textarea
                      id="formMessage"
                      name="message"
                      value={message}
                      onChange={handleChange}
                      className="form-control form-control-lg bg-dark bg-opacity-50 text-light border-0 shadow-sm"
                      rows="5"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-outline-tan btn-lg px-5 py-2 fw-semibold text-uppercase shadow hover-lift"
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                {/* Alert Messages */}
                {submitStatus && (
                  <div
                    className={`alert mt-4 ${
                      submitStatus === 'success'
                        ? 'alert-success bg-success bg-opacity-25 border-success text-light'
                        : 'alert-danger bg-danger bg-opacity-25 border-danger text-light'
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <i
                        className={`bi ${submitStatus === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle'} fs-4 me-2`}
                      ></i>
                      {submitMessage}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
