import BinaryRain from "./components/BinaryRain";
import Girl from "./assets/firstanimation-ezgif.com-crop.gif";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import "./index.css";
import Skill from './assets/Skills Icon.png';
import Work from './assets/Work Icon.png';
import Project from './assets/Projects Icon.png';

function App() {
  return (
    <>
      <header className="relative min-h-screen flex items-center justify-center text-center overflow-x-hidden">
        <BinaryRain />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full overflow-x-hidden">
          {/* Responsive flex container */}
          <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center gap-6 lg:gap-12 pt-16 lg:pt-0">
            
            {/* Text Section */}
            <div className="flex-1 flex items-center text-center lg:text-left px-4">
              <div className="max-w-lg">
                <h1 className="text-white text-5xl sm:text-5xl md:text-6xl font-bold">
                  Hey, I'm <span className="text-5xl sm:text-5xl md:text-6xl font-bold text-[#F58499]">{`<Maliha Tanweer />`}</span>
                </h1>
                <p className="text-white text-base xs:text-lg sm:text-xl mt-4 sm:mt-6 opacity-90">
                  I'm a self-taught web developer who likes to develop web apps.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="image-container flex-1 flex justify-center lg:justify-end px-4 items-start sm:items-start lg:items-center">
              <img 
                src={Girl} 
                alt="Animated GIF" 
                className="w-full max-w-[95%] xs:max-w-[360px] sm:max-w-[480px] lg:max-w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom-aligned Icons */}
        <div className="absolute flex bottom-4 left-1/2 transform -translate-x-1/2 z-20 gap-2 sm:gap-4">
          <img className="icons hover:scale-110 transition-transform" src={Skill} alt="Skills Icon" />
            {/* <!-- Tooltip --> */}
  <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
               hidden group-hover:block 
               bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
    This is a tooltip
  </span>
          <img className="icons hover:scale-110 transition-transform" src={Project} alt="Project Icon" />
          <img className="icons hover:scale-110 transition-transform" src={Work} alt="Work Icon" />
        </div>
      </header>

      <div className="relative z-20 overflow-x-hidden" id="work-projects">
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
      </div>
    </>
  );
}

export default App;


{/* <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
  <BinaryRain />

  <div className="relative z-10 text-white overflow-x-hidden w-full">
    Use column on small screens, row on md+
    <div className="flex flex-col lg:flex-row h-screen items-center justify-center px-8">
      
      Text Section
      <div className="flex-1 flex items-center justify-center lg:block mb-6 md:mb-0 text-center md:text-left">
        <div>
          <h1 className="text-white text-4xl sm:text-5xl">
            Hey, I'm <span className="text-orange-400">{`<Maliha Tanweer />`}</span>
          </h1>
          <p className="text-white text-lg sm:text-xl mt-4">
            I'm a self-taught web developer who likes to develop web apps.
          </p>
        </div>
      </div>

      Image Section
      <div className="flex-1 flex justify-center lg:justify-end">
        <img src={Girl} alt="Animated GIF" className="max-w-[70%] md:max-w-[70%] lg:max-w-[65%]" />
      </div>

    </div>
  </div>
  <div>
    <h2 className="text-white">Hello Wrold</h2>
  </div>
</header> */}





      {/* <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-white text-4xl sm:text-5xl">
          Hey, I'm <span className="text-orange-400">{`<Maliha Tanweer />`}</span>
        </h1>
        <p className="text-white text-lg sm:text-xl mt-4">
          I'm a self-taught web developer who likes to develop web apps.
        </p>
      </div> */}


          {/* <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <BinaryRain />


      <div className="relative z-10  text-white overflow-x-hidden">
            <div className="flex h-screen items-center">
            <div className="flex-1">
              <h1 className="text-white text-5xl">
                Hey, I'm <span className="text-orange-400"> {`<Maliha Tanweer />`} </span>
              </h1>
              <p className="text-white text-xl">
                I'm a self-taught web developer who likes to develop web apps.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <img src={Girl} alt="Animated GIF" className="max-w-[70%]" />
            </div>
          </div>
      </div>
    </header> */}


    {/* <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BinaryRain />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="text-center ">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Hey, I'm{" "}
              <span className="text-orange-400">
                &#123;Maliha Tanweer&#125;
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl max-w-xl mx-auto md:mx-0">
              I'm a self-taught web developer who likes to develop web apps.
            </p>
          </div>

          <div className="md:flex-1 flex justify-center">
            <img
              src={Girl}
              alt="Animated Girl"
              className="w-[85%] md:w-[70%] max-w-sm"
            />
          </div>
        </div>
      </div>
      
    </div> */}




// function App() {
//   return (
//     <>
//       <div className="relative min-h-screen">
//         <BinaryRain />

//         <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
//           <div className="flex bg h-[100vh]">
//             <div className="flex-1 flex items-center justify-center">
//               <div>
//                 <h1 className="text-white text-[3em] font-bold">
//                   {" "}
//                   Hey, I'm{" "}
//                   <span className="text-orange-400">
//                     &#123;Maliha Tanweer&#125;
//                   </span>{" "}
//                 </h1>
//                 <p className="text-white text-xl">
//                   I'm a self-taught web developer who likes to develop web apps.
//                 </p>
//               </div>
//             </div>
//             <div className="flex-1 flex items-center justify-center">
//               <img src={Girl} alt="Animated GIF" className="max-w-[70%] w-[100%]" />
//             </div>
//           </div>
//         </div>

//       </div>

//       <div id="work-projects">
//         <WorkExperience />
//         <Projects />
//       </div>
//     </>
//   );
// }











      {/* <BinaryRain />  */}
      {/* <div style={{top: '20px', left: '50px'}} className="absolute z-10 p-10 text-white">
        <h1 className="text-4xl text-black font-bold">Welcome to My Website</h1>
        <p className="mt-4">This is a binary rain background effect.</p>
      </div> */}

      {/* <div className='flex'>
        <div>
          <h1 className="text-4xl text-black font-bold">Hey, I'm Maliha Tanweer. </h1>
          <p className='text-xl '>I'm a self-taught web developer who likes to develop web apps.</p>
        </div>
        <div>
          <img src={Girl} alt="Animated GIF" width="65%" />
        </div>
      </div> */}

      {/* <div className='flex bg-[#0D65E8] h-[80vh]'>
      <div className='flex-1 align-center'>
        <div className='text-white'>
          <h1 className="text-4xl font-bold ">Hey, I'm Maliha Tanweer</h1>
          <p className='text-xl'>I'm a self-taught web developer who likes to develop web apps.</p>
        </div>
      </div>
      <div className='flex-1'>
        <img src={Girl} alt="Animated GIF" width="75%" />
      </div>
    </div> */}

      {/* <div className='flex bg-[#0D65E8] h-[80vh]'>
  <div className='flex-1 '>
    <h1 className="text-4xl text-black font-bold ">Hey, I'm Maliha Tanweer.</h1>
    <p className='text-xl'>I'm a self-taught web developer who likes to develop web apps.</p>
  </div>
  <div className='flex-1'>
    <img className='ml-4 w-[100%] lg:w-[80%]' src={Girl} alt="Animated GIF"  />
  </div>
</div> */}
