import React from 'react';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import PushPinIcon from '@mui/icons-material/PushPin';
import ProjectData from './Project';
const Skills = () => {
  const skillsList = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js",
    "Next.js", "Node.js", "Express.js", "React Native",
    "MongoDB", "Firebase", "Tailwind", "Bootstrap",
    "Vercel", "Netlify", "Redux", "Sanity.io", "Linux", "Canva",
    "Figma", "Github", "C++",
  ];


  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6 text-gray-400'>My Skills</h1>
      <h3 className='text-lg text-center pt-6 text-slate-400 pb-6'>👍Mastery unfolds where skills meet dedication's embrace.</h3>
      <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center">
        <div className="flex flex-wrap justify-center">
          {skillsList.map((skill, index) => (
            <button
              key={index}
              className="m-1 py-2 px-4 bg-transparent hover:bg-cyan-100 hover:text-black text-gray-400 font-semibold border hover:border-gray-900 border-gray-800 rounded-full"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
     
      {/* ProjectData section */}
      <div className='flex mt-8 ml-2  mr-2 justify-center items-center flex-col'>
        <div className="w-full max-w-[1024px] md:w-[1024px] rounded-lg bg-gray-900 text-white  p-4 shadow-xl mx-4 md:mx-0">
          <div className="flex items-center space-x-2">
            <PushPinIcon className="text-white" />
            <span className="font-semibold">Pinned</span>
          </div>
          <p className="mt-2 text-gray-400">
          Hey there! Hey there! You can check out more projects developed by me by visiting my GitHub profile. Thanks and here is
            <a className='text-gray-300' href='https://github.com/Amankohare0514'> github</a>
          </p>
        </div>
      </div>

      {ProjectData.map((project, index) => (
        <Link to={project.link} key={index} className="flex ml-2 mr-2 justify-center mt-5 items-center flex-col">
          <Card className="w-full bg-zinc-950 text-gray-400 hover:text-gray-200 transition-transform transform hover:scale-95 cursor-pointer max-w-[1024px] md:w-[1024px] rounded-lg p-1 shadow-2xl mx-4 md:mx-0 hover:border-gray-800">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl font-bold text-center">
                {project.icon} {project.title}
              </Typography>
              <Typography className='text-center mb-4'>
                {project.description}
              </Typography>
            </CardBody>
          </Card>

        </Link>
      ))}
    </>
  );
};

export default Skills;