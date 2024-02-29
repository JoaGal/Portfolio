import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ProjectsItems from "./projectsItems/ProjectsItems";
import invoice from "../Assets/images/Invoices.ico";
import Pokemon from "../Assets/images/Pokemon.ico";
import Resume from "../Assets/images/CV.ico";
import ShooterAim from "../Assets/images/ShooterAim.ico";
import ShooterNative from "../Assets/images/ShooterNative.ico";
import Transport from "../Assets/images/Transport.ico";
import OurFoods from "../Assets/images/OurFoods.ico";
import ControlSotck from "../Assets/images/ControlStock.ico";

export const Projects = ({t}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div  id="projects">
      <div className="container">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
        <Carousel responsive={responsive}>
            <ProjectsItems
              img={ControlSotck}
              title="Control Stock"
              links="https://control-stock-joagal.vercel.app/"
              desc={t.projects.project1}
            />
            <ProjectsItems
              img={invoice}
              title="Invoices"
              links="https://invoicesfrontend-joagal.vercel.app/"
              desc={t.projects.project2}
            />
            <ProjectsItems
              img={Resume}
              title="Create Resume"
              links="https://create-cv-s.vercel.app/"
              desc={t.projects.project3}
            />
            <ProjectsItems
              img={OurFoods}
              title="OurFoods"
              links="https://our-foods-joagal.vercel.app/"
              desc={t.projects.project4}
            />
            <ProjectsItems
              img={Transport}
              title="Transport"
              links="https://expo.dev/@joagal/transport-app"
              desc={t.projects.project5}
            />
            <ProjectsItems
              img={ShooterNative}
              title="ShooterNative"
              links="https://expo.dev/@joagal/shooter-native"
              desc={t.projects.project6}
            />
            <ProjectsItems
              img={ShooterAim}
              title="ShooterAim"
              links="https://shooteraim-joagal.vercel.app/"
              desc={t.projects.project7}
            />
            <ProjectsItems
              img={Pokemon}
              title="Pokemon"
              links="https://pokemon-joagal.vercel.app/"
              desc={t.projects.project8}
            />
          </Carousel>
        {/* <div className="projects__allItems">
          <Link target="_blank" href="https://control-stock-joagal.vercel.app/">
            <ProjectsItems
              img={ControlSotck}
              title="Control Stock"
              desc="MERN Stack (MySQL, Express, React, Nodejs). Podes controlar, editar y calcular el stock de mercaderia."
            />
          </Link>
          <Link target="_blank" href="https://invoices-joagal.vercel.app/">
            <ProjectsItems
              img={invoice}
              title="Invoices"
              desc="Vite app usando Redux y Tailwind. Podes agendar todas las facturas para ser organizado y no olvidartelas."
            />
          </Link>
          <Link target="_blank" href="https://create-cv-s.vercel.app/">
            <ProjectsItems
              img={Resume}
              title="Create Resume"
              desc="React app. En esta web podes crear tu currículum 100% profesional. Te ayudará a conseguir un trabajo."
            />
          </Link>
          <Link target="_blank" href="https://weather-joagal.vercel.app/">
            <ProjectsItems
              img={Clima}
              title="Weather"
              desc="Nextjs con Fribase app. Podes buscar el clima de cualquier parte del mundo. Te dirá la temperatura, humedad..."
            />
          </Link>
          <Link target="_blank" href="https://expo.dev/@joagal/transport-app">
            <ProjectsItems
              img={Transport}
              title="Transport"
              desc="React native app. Podras encontrar diferentes transportes para viajar. Te dirá el precio, duración..."
            />
          </Link>
          <Link target="_blank" href="https://our-foods-joagal.vercel.app/">
            <ProjectsItems
              img={OurFoods}
              title="OurFoods"
              desc="Nextjs con Redux app. Encontra recetas de cualquier parte del mundo. Te dirá los ingredientes y como prepararla."
            />
          </Link>
          <Link target="_blank" href="https://expo.dev/@joagal/shooter-native">
            <ProjectsItems
              img={ShooterNative}
              title="ShooterNative"
              desc="React Native app. Creado con expo-cli, es una réplica de ShooterAim, solo cambia el lenguaje de programación."
            />
          </Link>
          <Link target="_blank" href="https://shooteraim-joagal.vercel.app/">
            <ProjectsItems
              img={ShooterAim}
              title="ShooterAim"
              desc="React app. Donde podras mejorar tu precisión, reacción y reflejos en juegos de disparos."
            />
          </Link>
          <Link target="_blank" href="https://task-joagal.vercel.app/">
            <ProjectsItems
              img={Task}
              title="Task"
              desc="React con TypeScript app. Es un sitio web simple donde puedes anotar tareas, cosas que necesitas comprar o hacer."
            />
          </Link>
          <Link target="_blank" href="https://movie-joagal.vercel.app/">
            <ProjectsItems
              img={Movie}
              title="Movie"
              desc="React app. En este lugar puedes buscar películas de todos los géneros, ver su calificación y reseña."
            />
          </Link>
          <Link target="_blank" href="https://pokemon-joagal.vercel.app/">
            <ProjectsItems
              img={Pokemon}
              title="Pokemon"
              desc="React app. Aca vas a encontrar tus pokemones, mira sus caracteristicas y habilidades."
            />
          </Link>
          <Link target="_blank" href="https://candy-world-git-master-joagal.vercel.app/">
            <ProjectsItems
              img={CandyWorld}
              title="Candy World"
              desc="React app. Donde encontrarás diferentes tipos de juegos con caramelos relacionados con el antiguo Candy-Crush."
            />
          </Link>
          <Link target="_blank" href="https://dandgerous-cave-joagal.vercel.app/">
            <ProjectsItems
              img={DangerousCave}
              title="DangerousCave"
              desc="JavaScript y Canvas PC Game. Esquiva las estalactitas y consigue la mejor puntuación."
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};
