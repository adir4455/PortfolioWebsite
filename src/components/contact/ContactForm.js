import React from "react";
import emailjs from "emailjs-com";
import { useGlobalContext } from "../../context";

function ContactForm() {
  const { isSubmitted, setIsSubmitted } = useGlobalContext();

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
    setIsSubmitted(true);
  }

  return (
    <section id="contact-a" className="text-center py-3">
      <div className="container">
        {!isSubmitted && <h2 className="section-title">Contact Me</h2>}
        {!isSubmitted && <div className="bottom-line"></div>}
        {!isSubmitted && <p className="lead">Here is how you can reach me</p>}
        {!isSubmitted && (
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
        )}
        {isSubmitted && (
          <div className="submit">
            <p>Successfully Submitted!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
