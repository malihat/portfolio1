// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg';
import BinaryRain from "./components/BinaryRain";
import Girl from "./assets/firstanimation.gif";
// import {SVGatorComponent} from './components/SVGatorComponent';
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import "./index.css";
import Skills from './assets/Skills Icon.svg';
import Work from './assets/Work Icon.svg';
import Project from './assets/Projects Icon.svg';

function App() {
  return (
    <>

<header className="relative h-screen flex items-center justify-center text-center overflow-x-hidden">
  <BinaryRain />

  <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 text-white overflow-x-hidden w-full">
    {/* Use column on small screens, row on lg+ */}
    <div className="flex flex-col-reverse lg:flex-row h-screen items-center justify-center lg:pt-0">
      
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center lg:block mb-2 sm:mb-4 md:mb-0 text-center md:text-left">
        <div>
          <h1 className="text-white text-4xl sm:text-5xl">
            Hey, I'm <span className="text-orange-400">{`<Maliha Tanweer />`}</span>
          </h1>
          <p className="text-white text-lg sm:text-xl mt-4">
            I'm a self-taught web developer who likes to develop web apps.
          </p>
        </div>
      </div>

      {/* Image Section    className="object-contain md:max-w-[75%] lg:max-w-[70%]"*/}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img src={Girl} alt="Animated GIF" className="w-[100%] h-auto md:w-[480px] flex-shrink-0 object-contain" />
      </div>
    </div>
  </div>

  {/* Bottom-aligned Hello World */}
  <div className="absolute flex bottom-4 left-1/2 transform -translate-x-1/2 z-20">
    <img className="w-12 me-4" src={Skills} />
    <img className="w-12 me-4" src={Project} />
    <img className="w-12 me-4" src={Work} />
  </div>
</header>

  


      <div className="relative z-20" id="work-projects">
        <WorkExperience />
        <Projects />
      </div> 
    </>
  );
}