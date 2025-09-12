"use client"
import React, { useEffect } from "react";
import recipeImg from '../assets/Recipes.png';
import booksImg from '../assets/Books.png';
import searchImg from '../assets/Search.png';
import todoImg from '../assets/TodoList.png'
import AOS from "aos";
import "aos/dist/aos.css";
import '../index.css';


const projectsList = [
  {
    id: 1,
    title: "Recipe App",
    description: "Search for any food, the recipes will show. You can add it to the favorites. I used useContext hook to get the list of the recipes.",
    link: "https://malihat.github.io/recipes-app/",
    img: recipeImg
  },
  {
    id: 2,
    title: "Books",
    description: "Create a book and it will be added to the list, the book can be edited and deleted. Json server is used to save the books.",
    link: "https://github.com/yourusername/ecommerce-app",
    img: booksImg
  },
  {
    id: 3,
    title: "Search Photos",
    description: "A simple search for images of anything. Its a simple Reactjs.",
    link: "https://malihat.github.io/search-images/",
    img: searchImg
  },
  {
    id: 4,
    title: "Todo App",
    description: "A simple todo app lets you create, edit and delete. Its made with Reactjs and Tailwind.",
    link: "https://malihat.github.io/search-images/",
    img: todoImg
  }
];


const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'This is a description for Project Alpha.',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Details about Project Beta go here.',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'Project Gamma is a fascinating project.',
  },
];


import { useState } from 'react';
// import './Modal.css'; // For modal styling

// Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

// Main Component
export default function Projects() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false });
  }, []);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    // onClick={() => openModal(project)}
  <div className="mx-auto px-6 sm:px-6 lg:px-8">
      {/* <section> */}
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="zoom-in">
      Projects
    </h2>

    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectsList.map((project) => (
        <div
          key={project.id}
          className="bg-whiterounded-2xl shadow-md hover:shadow-xl rounded border border-gray-200 transition duration-300 p-4 flex flex-col justify-between"
          data-aos="zoom-in"
        >
          <div>
            <div className="w-full h-52 mb-4 overflow-hidden rounded-lg">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-md text-white mb-2">
              {project.title}
            </h3>

            <p className="text-[#D2C6DE] text-sm mb-6">
              {project.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-[#F58499] bg-[#F58499] text-white px-4 py-2 rounded-md text-sm hover:border-[#FF6E89] hover:bg-transparent transition"
            >
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer border border-[#F58499] text-white px-4 py-2 rounded-md text-sm hover:bg-[#F58499] transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
{/* </section> */}

      {/* <section >
        <div className="w-full mx-auto">
          <h2 className="text-4xl font-bold" data-aos="zoom-in">
            Projects
          </h2>
          <div className="py-8 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectsList.map(project => (
              <div
                key={project.id}
                className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full"
                data-aos="zoom-in"
              >
                <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <img src={project.img} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  {project.title}
                </h3>
                <p id="project-desc" className="text-white mb-4">
                  {project.description}
                </p>

                <button id="github" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Github
                </button>
                <button id="live" class="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition duration-300">
                  Live
                </button>

              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <Modal isOpen={!!activeProject} onClose={closeModal}>
        {activeProject && (
          <>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
          </>
        )}
      </Modal> */}
    </div>
  );
}



// import React, { useState } from 'react';

// const Projects = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>My Projects</h1>
//       <button onClick={openModal} style={buttonStyle}>
//         Open Modal
//       </button>

//       {isModalOpen && (
//         <div style={overlayStyle} onClick={closeModal}>
//           <div style={modalStyle} onClick={e => e.stopPropagation()}>
//             <h2>Modal Title</h2>
//             <p>This is a modal window inside the Projects component.</p>
//             <button onClick={closeModal} style={buttonStyle}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// Basic inline styles
// const overlayStyle = {
//   position: 'fixed',
//   top: 0, left: 0,
//   width: '100%', height: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   zIndex: 1000,
// };

// const modalStyle = {
//   backgroundColor: '#fff',
//   padding: '2rem',
//   borderRadius: '8px',
//   maxWidth: '500px',
//   width: '90%',
//   boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
// };

// const buttonStyle = {
//   padding: '0.5rem 1rem',
//   fontSize: '1rem',
//   cursor: 'pointer',
// };

// export default Projects;