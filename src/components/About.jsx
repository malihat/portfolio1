import backgroundImage from '../assets/bg-img-aboutMe1.png';

const About = () => {
  return (


    // <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-10">
    //   <h2 className="text-white text-4xl font-bold text-center mb-12">
    //     A Bit About Me 
    //   </h2>
    //   <div className="bg-[#3d204d] ">

    //     <div className="flex items-center justify-center">
    //       <p className="text-white p-7 text-xl drop-shadow-lg">
    //         My name is Maliha and I am a self-taught web developer from New York. I have a bachelor's degree from Hunter College (CUNY), major in biology and minor in computer science. I have completed my internship as a web designer/developer in long island, NY. I am currenlty working part time as a Web Developer at WorkSmart Coworking.
    //         After completing my minor I was interested in programming, so I started looking at differnt careers and I decided to go for web development. I took few online courses and gained knowledge and experience in programming. Below are some of the projects that I have worked on.
    //       </p>
    //       <img src={backgroundImage} className='absolute w-[220px] h-[150px]' />
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-10">
  <h2 className="text-white text-4xl font-bold text-center mb-12">
    A Bit About Me
  </h2>

  <div className="bg-[#3d204d] relative p-10 rounded-lg overflow-hidden">
    {/* Background image */}
    <img 
      src={backgroundImage} 
      alt="Background" 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/3 h-full object-contain "
    />

    {/* Text content */}
    <p className="relative text-white text-md drop-shadow-lg z-10">
      My name is Maliha and I am a self-taught web developer from New York. 
      I have a bachelor's degree from Hunter College (CUNY), major in biology 
      and minor in computer science. I have completed my internship as a web 
      designer/developer in Long Island, NY. I am currently working part time 
      as a Web Developer at WorkSmart Coworking.
      <br /><br />
      After completing my minor I was interested in programming, so I started 
      looking at different careers and I decided to go for web development. 
      I took few online courses and gained knowledge and experience in 
      programming. Below are some of the projects that I have worked on.
    </p>
  </div>
</div>




  )
}

export default About