import AboutImg from "../Assets/images/JoaTotal.jpeg";
import Image from "next/image";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="img__side">
            <Image src={AboutImg} alt="mee" className="img__side__main-img" />
          </div>
          <div className="text__side">
            <h4>Sobre Mi</h4>
            <h3>
             Mi nombre es Joaquin Galdeano, tengo 22 años y soy de Resistencia, Chaco, Argentina.
            </h3>
            <p>
              Empece con progrmacion en 2021, iniciando con HTML, CSS y JavaScript. Creando pequeños proyectos. <br />
              En el año 2022 consegui mi primer trabajo como Desarrollador Frontend en ITERART y hoy dia me encuentro trabajando con •React, •Next, •TypeScript, •Redux, •Nodejs, •SQL Server y •MySQL.
              Sigo aprendiendo y mejorando mis habilidades. <br />
              Me gusta hacer deporte, programar, la musica y junterme con amigos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
