export default function Contact() {



  return (

    <div>
      <h1>Contact Me</h1>

      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="user-name">Name</label>
          <input type="text" className="user-name" name="username" required/>
        </div>

        <div>
          <label htmlFor="user-email" className="user-email" name="user-email">Email</label>
          <input type="text" className="user-email" name="user-email" required />
        </div>

        <div className="contact-form">
          <label htmlFor="message" className="user-message" >Message</label>
          <textarea className="message" name="message" required></textarea>
        </div>

        <div>
          <input type="submit" value="send" />          
        </div>

      </form>
    </div>

  );
}