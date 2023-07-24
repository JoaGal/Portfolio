import AboutImg from "../Assets/images/JoaTotal.jpeg";
import Image from "next/image";

export const About = ({t}) => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <div className="img__side">
            <Image src={AboutImg} alt="mee" className="img__side__main-img" />
          </div>
          <div className="text__side">
            <h4>{t.about.title}</h4>
            <h3>
              {t.about.subtitle}
            </h3>
            <p>
              {t.about.description1} <br />
              {t.about.description2}<br />
              •React<br />
              •Next<br /> 
              •TypeScript<br/>
              •Redux<br />
              •Nodejs<br />
              •SQL Server<br />
              •MySQL.<br />
              {t.about.description3} <br />
              {t.about.description4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
