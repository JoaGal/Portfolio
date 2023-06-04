import ProjectsItems from "./projectsItems/ProjectsItems";
import invoice from "../Assets/images/Invoices.ico";
import Movie from "../Assets/images/Movie.ico";
import CandyWorld from "../Assets/images/CandyWorld.ico";
import Pokemon from "../Assets/images/Pokemon.ico";
import Clima from "../Assets/images/Clima.ico";
import Resume from "../Assets/images/CV.ico";
import Task from "../Assets/images/Task.ico";
import ShooterAim from "../Assets/images/ShooterAim.ico";
import DangerousCave from "../Assets/images/DangerousCave.ico";
import ShooterNative from "../Assets/images/ShooterNative.ico";
import OurFoods from "../Assets/images/OurFoods.ico";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="projects__container" id="projects">
      <div className="container">
        <div className="section__title">
          <p>Algunos de mis ultimos trabajos</p>
          <h2>Proyectos</h2>
        </div>
        <div className="projects__allItems">
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
              desc="Nextjs y Fribase. Podes buscar el clima de cualquier ciudad del mundo. Te dirá la temperatura, humedad y viento."
            />
          </Link>
          <Link target="_blank" href="https://our-foods-joagal.vercel.app/">
            <ProjectsItems
              img={OurFoods}
              title="OurFoods"
              desc="Nextjs. Entra y encontra recetas de comidas de cualquier parte del mundo. Te dirá los ingredientes y como prepararla."
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
              desc="React y TypeScript app. Es un sitio web simple donde puedes anotar tareas, cosas que necesitas comprar o hacer."
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
          <Link target="_blank" href="https://expo.dev/@joagal/shooter-native">
            <ProjectsItems
              img={ShooterNative}
              title="ShooterNative"
              desc="React Native app. Creado con expo-cli, es una réplica de ShooterAim, solo cambia el lenguaje de programación."
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
        </div>
      </div>
    </div>
  );
};
