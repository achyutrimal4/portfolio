import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import * as tb from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lhzszir", "template_fbkrcgo", form.current, {
        publicKey: "Q4PRr6kqkWkzyAnyb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="left-container__contact">
          <h1 className="title">Contact me</h1>
          <p>
            {" "}
            Send me a message and I will get back to you as soon as possible.
            Thank you!
          </p>
          <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-group">
                <div className="input-wrapper">
                  <input name="name" type="text" placeholder="your name" />
                </div>
                <div className="input-wrapper">
                  <input name="email" type="text" placeholder="your email" />
                </div>
              </div>
              <div className="input-group">
                <div className="input-wrapper message">
                  <textarea
                    name="message"
                    id=""
                    cols="10"
                    rows="3"
                    placeholder="your message"
                  ></textarea>
                </div>
              </div>
              <input type="submit" value="submit" className="primary-btn" />
            </form>
          </div>
        </div>
        <div className="right-container__contact">
          <div className="contact-box">
            <h1 className="subtitle">contact details</h1>
            <span>
              <tb.TbMailFilled />
              <a href="mailto:achyutrimal4@gmail.com">achyutrimal4@gmail.com</a>
            </span>
          </div>
          <div className="contact-box">
            <h1 className="subtitle">find me on</h1>
            <span>
              <tb.TbBrandGithubFilled />
              <a
                href="https://github.com/achyutrimal4"
                target="_blank"
                rel=" noopener noreferrer "
              >
                /achyutrimal4
              </a>
              <RxOpenInNewWindow />
            </span>
            <span>
              <tb.TbBrandLinkedin />
              <a
                href="https://www.linkedin.com/in/achyut-rimal-47a446143/"
                target="_blank"
                rel=" noopener noreferrer "
              >
                /achyut-rimal
              </a>
              <RxOpenInNewWindow />
            </span>
          </div>
          <div className="contact-box">
            <h1 className="subtitle"></h1>
            <span>
              <tb.TbLocationFilled />
              <p>London, United Kingdom</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
