import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
       form.current,
      'YOUR_PUBLIC_KEY'
      )
      .then((result) => {
          console.log(result.text)
          console.log("message sent")
      }, (error) => {
          console.log(error.text)
      });
    }

  return (
    <>
    <div className= 'container'>
    <form id="contact-form" ref={form} onSubmit={sendEmail} method="post" action="send-email.php" role="form">
      
      <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" required />
      </div>
      <div className="form-group">
          <label for="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" required />
      </div>
      <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" rows="5" id="message" name="message" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
  </form>
    </div>
     
    </>
  )
}

export default ContactUs