import ProjectsItems from "./projectsItems/ProjectsItems";
import Movie from "../Assets/images/Movie.ico";
import CandyWorld from "../Assets/images/CandyWorld.ico";
import Pokemon from "../Assets/images/Pokemon.ico";
import Clima from "../Assets/images/Clima.ico";
import Resume from "../Assets/images/CV.ico";
import Task from "../Assets/images/Task.ico";
import ShooterAim from "../Assets/images/ShooterAim.ico";
import DangerousCave from "../Assets/images/DangerousCave.ico";
import ShooterNative from "../Assets/images/ShooterNative.ico";

export const Projects = () => {
  return (
    <div className="projects__container" id="projects">
      <div className="container">
        <div className="section__title">
          <p>Algunos de mis ultimos trabajos</p>
          <h2>Proyectos</h2>
        </div>
        <div className="projects__allItems">
          <a href="https://shooteraim-joagal.vercel.app/">
            <ProjectsItems
              img={ShooterAim}
              title="ShooterAim"
              desc="React app. Where you will be able to improve your precision, reaction and reflexes in shooting games."
            />
          </a>
          <a href="https://create-your-resume.vercel.app/">
            <ProjectsItems
              img={Resume}
              title="Create Resume"
              desc="React app. On this website you can create your 100% professional resume. It will help you get a job."
            />
          </a>
          <a href="https://expo.dev/@joagal/shooter-native">
            <ProjectsItems
              img={ShooterNative}
              title="ShooterNative"
              desc="React Native app. Created with expo-cli, it is a replica of ShooterAim, just change the programming language."
            />
          </a>
          <a href="https://task-joagal.vercel.app/">
            <ProjectsItems
              img={Task}
              title="Task"
              desc="React and TypeScript app. It is a simple website where you can write down tasks, things you need to buy or do."
            />
          </a>
          <a href="https://weather-joagal.vercel.app/">
            <ProjectsItems
              img={Clima}
              title="Weather"
              desc="React app. It indicates the weather of four Argentine provinces."
            />
          </a>
          <a href="https://movie-joagal.vercel.app/">
            <ProjectsItems
              img={Movie}
              title="Movie"
              desc="React app. In this place you can search for movies of all genres, see their rating and review."
            />
          </a>
          <a href="https://pokemon-joagal.vercel.app/">
            <ProjectsItems
              img={Pokemon}
              title="Pokemon"
              desc="React app. Where are you going to find your pokemones, see their characteristics and abilities."
            />
          </a>
          <a href="https://candy-world-git-master-joagal.vercel.app/">
            <ProjectsItems
              img={CandyWorld}
              title="Candy World"
              desc="React app. Where you will find different types of games with candies related to old Candy-Crush."
            />
          </a>
          <a href="https://dandgerous-cave-joagal.vercel.app/">
            <ProjectsItems
              img={DangerousCave}
              title="DangerousCave"
              desc="JavaScript and Canvas PC Game. Dodge the stalactites and make the best score."
            />
          </a>
        </div>
      </div>
    </div>
  );
};
