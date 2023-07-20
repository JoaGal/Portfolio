import { BsGithub, BsLinkedin } from "react-icons/bs";
import hand from "../Assets/images/hand.png";
import {SiCss3, SiHtml5, SiJavascript, SiMicrosoftsqlserver, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export const InitialHome = () => {
  return (
    <div className="hero" id="home">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__main">
              <div className="hero__text">
                <h1>Soy Joaquin Galdeano</h1>
                <Image src={hand} alt="waving_hand" />
                <p>
                 Tengo 22 años y trabajo como Desarrollador Frontend desde Argetina. 📍
                </p>
                <span>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/joaquin-galdeano-174281209/"
                  >
                    <BsLinkedin className="hero__icon-button"/>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/JoaGal"
                  >
                    <BsGithub className="hero__icon-button"/>
                  </Link>
                  <a id="hero__button" href="./Mi-Curriculum.pdf" download="JoaquinGaldeano_CV">
                    Descargar CV
                  </a>
                </span>
              </div>
              <div className="hero__image"></div>
            </div>
            <div className="skills">
              <p>Habilidades</p>
              <div className="logos">
                <ul>
                  <li>
                    <SiReact color="#00ccff" className="hero__icon"/>
                  </li>
                  <li>
                    <SiNextdotjs className="hero__icon" color="#000000"/>
                  </li>
                  <li>
                  <SiMicrosoftsqlserver className="hero__icon" color="#ff0000"/>
                  </li>
                  <li>
                    <SiTypescript className="hero__icon" color="#007acc"/>
                  </li>
                  <li>
                    <SiJavascript className="hero__icon" color="#f7df1e" />
                  </li>
                  <li>
                    <SiHtml5 className="hero__icon" color="#cc5200"/>
                  </li>
                  <li>
                    <SiCss3 className="hero__icon" color="#007acc"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
