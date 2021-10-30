import React from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ahq9w76",
        e.target,
        "user_qkiMCZkzMTkaAfEJdyzq1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id="contact-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="bottom-line"></div>
        <p className="lead">Here is how you can reach me</p>
        <form onSubmit={sendEmail}>
          <div className="text-fields">
            <input
              type="text"
              className="text-input name-input"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="text"
              className="text-input subject-input"
              placeholder="Subject"
              name="subject"
              required
            />
            <input
              type="email"
              className="text-input email-input"
              placeholder="Email Address"
              name="email"
              required
            />
            <input
              type="text"
              className="text-input phone-input"
              placeholder="Phone Number"
              name="phone"
            />
            <textarea
              type="text"
              className="text-input message-input"
              placeholder="Enter Message"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-dark">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
