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
    "Next.js", "Node.js", "Express.js","React Native",
    "MongoDB", "Firebase", "Tailwind", "Bootstrap",
    "Vercel", "Netlify", "Redux", "Sanity.io", "Linux", "Canva",
    "Figma", "Github","C++",
  ];


  return (
    <>
      {/* skills section */}
      <h1 className='text-3xl font-bold text-center pt-6'>My Skills</h1>
      <h3 className='text-lg text-center pt-6 text-slate-600'>👍Mastery unfolds where skills meet dedication's embrace.</h3>
      <hr className='mt-6 pb-6' />
      <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center">
      <div className="flex flex-wrap justify-center">
        {skillsList.map((skill, index) => (
          <button
            key={index}
            className="m-1 py-2 px-4 bg-transparent hover:bg-cyan-100 text-black font-semibold border border-blue-900 rounded-full"
          >
            {skill}
          </button>
        ))}
        </div>
      </div>
      <hr className='mt-6 pb-6' />
      {/* ProjectData section */}
      <div className='flex ml-2  mr-2 justify-center items-center flex-col'>
          <div className="w-full max-w-[1024px] md:w-[1024px] rounded-lg bg-gradient-to-r from-blue-50 via-red-100 to-yellow-100 p-4 shadow-xl mx-4 md:mx-0">
            <div className="flex items-center space-x-2">
              <PushPinIcon className="text-gray-700" />
              <span className="font-semibold">Pinned</span>
            </div>
            <p className="mt-2 text-gray-700">
              Hey there! You can check out more blog created by me by visiting my Medium profile. Thanks and here is
              <a className="text-blue-600 hover:underline" href="https://medium.com/@amankohare">
                , link
              </a>
            </p>
            </div>
        </div>

        {ProjectData.map((project, index) => (
          <Link to={project.link} key={index} className="flex ml-2 mr-2 justify-center mt-5 hover:border-black items-center flex-col">
            <Card className="w-full bg-white hover:border-black max-w-[1024px] md:w-[1024px] rounded-lg  p-1 shadow-2xl mx-4 md:mx-0">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2  text-2xl font-bold text-center">
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