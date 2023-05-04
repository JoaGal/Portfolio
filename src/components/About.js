import AboutImg from "../Assets/images/JoaTotal.jpeg";
import AboutItem from "./aboutComponents/AboutItem";
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
            <h4>Perfil</h4>
            <h3>
              Desarrollador dedicado a front-end. <br /> Viviendo en Argentina,
              Chaco 📍
            </h3>
            <p>
              Como desarrollador front-end junior, poseo habilidades en React,
              Next, SQL Server, JavaScript, TypeScript, HTML5 y CSS3. Me destaco
              en el diseño y mantenimiento de sitios web responsivos que ofrecen
              una experiencia de usuario fluida. Mi experiencia radica en la
              creación de interfaces dinámicas y atractivas mediante la
              escritura de código limpio y optimizado. También soy un trabajador
              en equipo que prospera colaborando para producir aplicaciones web
              sobresalientes. A su vez sigo aprendiendo y mejorando mis
              habilidades en Front-end y Back-end.
            </p>
          </div>
        </div>
      </div>
      <div className="about__info__item">
        <h1 className="about__info__heading">Experiencia</h1>
        <AboutItem
          title="ITERART"
          items={[
            "Desarrollador Front-end - Hibrido - Chaco, Argentina.",
            "04/10/22 - Actualidad",
          ]}
        />
        <AboutItem
          title=" "
          items={[
            "Creo componentes reutilizables. Desarrollo sitios web responsive y actualizo diseños.",
          ]}
        />
      </div>
      <div className="about__info__item">
        <h1 className="about__info__heading">Educacion</h1>
        <AboutItem
          title="Secundaria"
          items={["EES N 76 Colegio Nacional José M. Paz"]}
        />
        <AboutItem
          title="Universidad"
          items={["Universidad Tecnológica Nacional - UTN"]}
        />
        <AboutItem
          title="Curso"
          items={["React Developer - Devlights Bootcamp"]}
        />
        <AboutItem
          title="Curso"
          items={["React - Hooks y MERN - Udemy (Ferando Herrera)"]}
        />
        <AboutItem
          title="Curso"
          items={["Master en SQL Server - Udemy (Mariano Puglisi)"]}
        />
        <AboutItem
          title="Curso"
          items={["Programacion / Testing de la Universidad Tecnologica Nacional - Argentina pROGRAMA 4.0"]}
        />
        <AboutItem
          title="Curso"
          items={["Desarrollo Web (PYTHON-DJANGO & SQL SERVER) - Informatorio"]}
        />
        <AboutItem
          title="Curso"
          items={["Introducción a la Programación (JavaScript) - Informatorio"]}
        />
      </div>
    </div>
  );
};
