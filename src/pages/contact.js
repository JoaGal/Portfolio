import { useRef } from "react";
import { MdLocalPhone } from "react-icons/md";
import {BsGithub} from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  const name = useRef("");
  const email = useRef("");
  const message = useRef("");
  const form = useRef();

  const handleSubmit = (e) => {
    if (
      name.current.value.length >= 5 &&
      email.current.value.length >= 10 &&
      message.current.value.length >= 10
    ) {
      emailjs
        .sendForm(
          "service_n8uruzc",
          "template_1e6lq61",
          form.current,
          "0X9jHOM3v2U7vNPrn"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message Send");
          },
          (error) => {
            console.log(error.text);
            alert("Message Not Send");
          }
        );
      e.preventDefault();
    } else {
      e.preventDefault();
      alert("Message Not Send");
    }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@600&family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Link href="/" className="contact__comeBack">
        Inicio
      </Link>
      <div className="container__contact">
        <div className="container">
          <div className="section__title">
            <h2>Contactos</h2>
            <p>Ponete en contacto</p>
          </div>
          <form onSubmit={handleSubmit} ref={form}>
            <div className="contactSection__wrapper">
              <div className="left">
                <div className="contact__boxItem">
                  <div className="contact__icon">
                    <MdLocalPhone className="icon-c" color="#b3b3b3" />
                  </div>
                  <p className="contact__text">+54 3624712344</p>
                </div>
                <div className="contact__boxItem">
                  <div className="contact__icon">
                    <AiFillLinkedin className="icon-c" color="#007acc" />
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/joaquin-galdeano-174281209/"
                    target="_blanck"
                  >
                    www.linkedin.com/in/joaquin-galdeano-174281209/
                  </Link>
                </div>
                <div className="contact__boxItem">
                  <div className="contact__icon">
                    <BsGithub className="icon-c" color="#333333" />
                  </div>
                  <Link href="https://github.com/JoaGal" target="_blanck">
                    github.com/JoaGal
                  </Link>
                </div>
              </div>
              <div className="right">
                <div className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="contact-label">
                      Nombre
                      <input
                        className="input-textarea"
                        type="text"
                        id="name"
                        name="user_name"
                        ref={name}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="contact-label">
                      Email
                      <input
                        className="input-textarea"
                        type="email"
                        id="email"
                        name="user_email"
                        ref={email}
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="contact-label">
                      Mensaje
                      <textarea
                        className="input-textarea"
                        type="text"
                        id="message"
                        name="message"
                        ref={message}
                      />
                    </label>
                  </div>
                  <button type="submit" className="contact-button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
