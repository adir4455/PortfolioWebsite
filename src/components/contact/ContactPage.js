import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactNavBar from "../navbar/ContactNavBar";

function ContactPage() {
  return (
    <>
      <ContactNavBar />
      <ContactForm />
      <ContactInfo />
    </>
  );
}

export default ContactPage;
