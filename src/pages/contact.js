import React from 'react';
import SocialFollow from "../components/socialFollow";
import ContactForm from "../components/contactForm";
import "../styles.css";


function contact() {
  return (
    <div>
      <h1>Contact Me!</h1>
      <p>Do not hesitate to reach out to me!</p>
      <p>Follow the links below to view my work, or drop a message below!</p>

      <SocialFollow />
      
      <ContactForm />
    </div>
  )
}

export default contact