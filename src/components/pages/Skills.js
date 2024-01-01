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
    "React Native", "Next.js", "Node.js", "Express.js",
    "MongoDB", "Firebase", "Tailwind", "Bootstrap", "C++",
    "Vercel", "Netlify", "Redux", "Sanity.io", "Linux", "Canva",
    "Figma", "Github"
  ];


  return (
    <>
      {/* skills section */}
      <h1 className='text-3xl font-bold text-center pt-6'>My Skills</h1>
      <h3 className='text-lg text-center pt-6 text-slate-600'>👍Mastery unfolds where skills meet dedication's embrace.</h3>
      <hr className='mt-6 pb-6' />
      <div className="mx-auto max-w-screen-md text-center">
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
      <div className='flex justify-center items-center flex-col'>
        <Card className="mt-6 w-full md:w-[672px] h-[130px] bg-cyan-100 rounded-lg">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2  ml-4 md:pb-2">
              <PushPinIcon /> Pinned
            </Typography>
            <Typography className='ml-4 text-lg text-black'>
              Hey there! Check out my recent projects based on these skills. <span className='text-black font-medium'><a href='https://github.com/Amankohare0514'>here</a></span>
            </Typography>
          </CardBody>
        </Card>

        {ProjectData.map((project, index) => (
          <Link to={project.link} key={index} className="mt-6 w-full md:w-[672px]">
            <Card className="border hover:border-slate-700 rounded-lg">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 mt-4 text-2xl font-bold text-center">
                  {project.icon} {project.title}
                </Typography>
                <Typography className='text-center mb-4'>
                  {project.description}
                </Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Skills;