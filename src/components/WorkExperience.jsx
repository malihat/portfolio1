import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';


const experiences = [
    {
        id: 1,
        role: "Web Designer",
        company: "Tzumi Electronics",
        duration: "March 2023 - Present",
        description: ["Developing responsive websites using WordPress", "Updating ecommerce sites in WordPress by adding new products",
                "Utilizing design tools like Figma and Photopea for image editing and design tasks", "Implementing JavaScript for enhancing existing WordPress widgets",
                "Creating and styling blogs using HTML and Bootstrap", "Managing email marketing campaigns using Klaviyo, including template modification"
         ]
    },
    {
        id: 2,
        role: "Web Developer",
        company: "WorkSmart Coworking",
        duration: "July 2021 - March 2022",
        description:
            ["Created mobile app and website mock-ups using Figma design tool", "Conducted PSD to HTML conversion",
             "Developed responsive websites using WordPress and Webflow", "Integrated features into Webflow using JavaScript",
             "Created newsletters in MailChimp and Constant Contacts"
            ]
    },
    {
        id: 3,
        role: "Backend Developer Intern",
        company: "FOCUSLOOK",
        duration: "May 2021 - February 2022",
        description:
           ["Edited the existing backend code using JavaScript (Expressjs)", "Used Nodejs and Mongodb for backend development"]
    },
    {
        id: 4,
        role: "Web Developer Intern",
        company: "Probe Point Media",
        duration: "December 2019 - March 2020",
        description:
           ["Collaborated with the developer to build wireframes for fully responsive website", "Designed website mock-ups using Figma and Adobe Photoshop",
            "Developed websites using HTML, CSS, Bootstrap and JavaScript", "Ensured cross-browser compatibility"
           ]
    },
];

const WorkExperience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
      <>
        <div id="work-experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-white text-4xl font-bold text-center mb-12" data-aos="zoom-in">
            Work Experience
          </h2>

  <div className="flex flex-col gap-y-12 md:gap-y-24 relative">
    {experiences.map((exp, index) => (
      <div
        key={exp.id}
        className={`relative z-10 flex flex-col md:flex-row items-center ${
          index % 2 === 0 ? "md:justify-start" : "md:justify-end"
        }`}
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-delay={index * 200}
      >
        {/* Timeline Dot - Only shows on md+ */}
{/* <<<<<<< HEAD
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20 bg-dark border-4 border-[#00B6D2] rounded-full h-10 w-10 items-center justify-center shadow-md">
======= */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20 bg-dark border-4 border-[#02BCC9] rounded-full h-10 w-10 items-center justify-center shadow-md">
{/* >>>>>>> b6dd0e9509da051e32110c63ea5e617efd0421c5 */}
          <ImportantDevicesIcon className="h-6 w-6 text-[#00B6D2]" />
        </div>

        {/* Card */}
        <div
          className={`bg-[#332847] shadow-lg rounded-xl p-6 md:p-8 w-full md:w-[45%] ${
            index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
          }`}
        >
          
          <h3 className="text-white text-2xl font-semibold mb-2">
            {exp.role}
          </h3>
          <p className="text-white text-md mb-4">
            <span className="font-medium">{exp.company}</span> &bull;{" "}
            {exp.duration}
          </p>
          <ul className="list-disc list-inside space-y-2 text-white text-sm">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>


        </>
    );
};




//   <div className="relative flex flex-col gap-y-8 md:gap-y-24">
//     {experiences.map((exp, index) => (
//       <div
//         key={exp.id}
//         className={`relative z-10 flex flex-col md:flex-row items-center ${
//           index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//         }`}
//         data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
//         data-aos-delay={index * 200}
//       >

//         <div className="hidden md:flex md:absolute left-1/2 transform -translate-x-1/2 z-20 bg-white border-4 border-cyan-200 rounded-full h-10 w-10 items-center justify-center shadow-md">
//             <ImportantDevicesIcon className="h-6 w-6 text-cyan-400" />
//         </div>

//         {/* Card */}
//         <div
//           className={`bg-[#3b1433] shadow-lg rounded-xl mt-0 md:mt-12 p-6 md:p-8 w-full md:w-[45%] ${
//             index % 2 === 0 ? "md:ml-auto text-left" : "md:mr-auto text-left"
//           }`}
//         >
//           <h3 className="text-white text-2xl font-semibold text-gray-800 mb-2">{exp.role}</h3>
//           <p className="text-white text-md mb-4">
//             <span className="font-medium">{exp.company}</span> &bull; {exp.duration}
//           </p>
//           <ul className="text-white list-disc list-inside space-y-2 text-gray-700 text-sm">
//             {exp.description.map((desc, i) => (
//               <li key={i}>{desc}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     ))}
//   </div>






            {/* <div id="work-experience" className="max-w-7xl mx-auto">
                <div className="overflow-hidden py-5">
                    <div className="">
                        <h2 className="mt-[25px] text-4xl font-bold text-center text-gray-800" data-aos="zoom-in">
                            Work Experience
                        </h2>

                        Vertical Line
                        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

                        Timeline Container
                        <div className="relative space-y-12">
                            {experiences.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                                        }`}
                                    data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right" }`}  
                                    data-aos-delay={index * 200}
                                >
                                    Timeline Dot
                                    <div id="work-icon" className="absolute left-1/2 transform -translate-x-1/2">
                                        <ImportantDevicesIcon className="h-10 w-10"  style={{ color: '#edc605' }}/>
                                    </div>
                                    Experience Card
                                    <div id="card"
                                        className={`w-[45%] p-6 md:p-8  ${index % 2 === 0 ? "ml-auto" : "mr-auto"
                                            }`}
                                    >

                                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{exp.role}</h3>
                                        <p className="text-lg text-gray-700 mt-2 font-medium mb-1">{exp.company} | {exp.duration}</p>
                                        <ul>{exp.description.map((desc, index) => <li key={index} className="mb-1">{desc}</li>)}</ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div id="mobile">
                <div className="bg-gray-100 overflow-hidden py-10">
                    <div className="max-w-4xl mx-auto px-5">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-down">
                            Work Experience
                        </h2>

                        Timeline Container
                        <div className="relative border-gray-300 pl-10">
                            {experiences.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    className="relative flex items-center gap-5 mb-10"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200}
                                >
                                    Timeline Icon (Left Side)
                                    <div className="flex items-center justify-center w-12 h-12 bg-white ">
                                        <ImportantDevicesIcon className="h-8 w-8 text-blue-500" />
                                    </div>

                                    Experience Card (Right Side)
                                    <div id="card" className="bg-white shadow-md w-full">
                                        <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
                                        <p className="text-lg text-gray-700 mt-1 font-medium">{exp.company} | {exp.duration}</p>
                                        <ul>{exp.description.map((desc, index) => <li key={index} className="mb-1">{desc}</li>)}</ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}


export default WorkExperience;

        {/* Timeline Dot */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-white border-4 border-cyan-200 rounded-full h-10 w-10 flex items-center justify-center shadow-md">
          <ImportantDevicesIcon className="h-6 w-6 text-cyan-400" />
        </div> */}
        
  {/* Vertical Timeline Line */}
  {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0"></div> */}


// import * as React from 'react';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// export default function CustomizedTimeline() {
//   return (
//     <Timeline position="alternate">
//       {/* Timeline Item 1 */}
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
//           9:30 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot>
//             <FastfoodIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
//             <CardContent>
//               <Typography variant="h6" component="div">
//                 Eat
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Because you need strength
//               </Typography>
//             </CardContent>
//           </Card>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Timeline Item 2 */}
//       <TimelineItem>
//         <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
//           10:00 am
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary">
//             <LaptopMacIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
//             <CardContent>
//               <Typography variant="h6" component="div">
//                 Code
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Because it's awesome!
//               </Typography>
//             </CardContent>
//           </Card>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Timeline Item 3 */}
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary" variant="outlined">
//             <HotelIcon />
//           </TimelineDot>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
//             <CardContent>
//               <Typography variant="h6" component="div">
//                 Sleep
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Because you need rest
//               </Typography>
//             </CardContent>
//           </Card>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Timeline Item 4 */}
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//           <TimelineDot color="secondary">
//             <RepeatIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
//             <CardContent>
//               <Typography variant="h6" component="div">
//                 Repeat
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Because this is the life you love!
//               </Typography>
//             </CardContent>
//           </Card>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }



