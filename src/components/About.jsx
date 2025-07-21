import backgroundImage from '../assets/aboutMe-2.png'; // If local

const About = () => {
  return (
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    //     <h2 className="text-white text-4xl font-bold text-center mb-12">
    //       A Bit About Me 
    //     </h2>

    //     <div className="border px-6 py-8 rounded-md">
    //       <p className="text-white text-lg"> My name is Maliha and I am a self-taught web developer from New York. I have a bachelor's degree from Hunter College (CUNY), major in biology and minor in computer science.
    //         I have completed my internship as a web designer/developer in long island, NY. I am currenlty working part time as a Web Developer at WorkSmart Coworking. 
    //       </p>
    //           <br></br>
    //       <p className="text-white text-lg">
    //         After completing my minor I was interested in programming, so I started looking at differnt careers and I decided to go for web development. I took few online courses and gained knowledge and experience in programming. Below are some of the projects that I have worked on.
    //       </p>
    //     </div>
    // </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-white text-4xl font-bold text-center mb-12">
        A Bit About Me 
      </h2>
      <div className="relative w-full h-[500px] sm:h-[400px] md:h-[350px] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})`, imageRendering: 'auto'}} >
        {/* <div className="absolute inset-0  "></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white p-5  text-xl drop-shadow-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h1>
        </div>
      </div>
    </div>

  )
}

export default About