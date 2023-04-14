import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import '../style/contact/contact.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrb0ech",
        "template_z6dudix",
        form.current,
        "ZHFpEGnBi8b1Dnqcc"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const defaultLang = localStorage.getItem('lang') || 'hr';

  if (defaultLang === 'hr'){
    return (
      <StyledContactForm>
      <h3>Email kontakt forma</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label>Vaše ime:</label>
          <input type="text" name="from_name" />
          <label>Vaše prezime:</label>
          <input type="text" name="from_last_name" />
          <label>Vaš email:</label>
          <input type="email" name="user_email" />
          <label>Vaš kontakt broj:</label>
          <input type="number" name="user_phone" />
          <label>Poruka</label>
          <textarea name="message" />
          <input type="submit" id="send-message" value="Pošaljite poruku" />
        </form>
      </StyledContactForm>
    );
  } else {
    return (
      <StyledContactForm>
      <h3>Email contact form</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label>Your name:</label>
          <input type="text" name="from_name" />
          <label>Your surname:</label>
          <input type="text" name="from_last_name" />
          <label>Your email:</label>
          <input type="email" name="user_email" />
          <label>Phone number:</label>
          <input type="number" name="user_phone" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" id="send-message" value="Send message" />
        </form>
      </StyledContactForm>
    );
  }
};

export default ContactForm;

// Styles
const StyledContactForm = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    padding: 5%;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;