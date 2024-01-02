import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import aman from "../images/introimage.jpg";
import Skill from "./Skill"
import ProjectData from './Project';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Blogs from './Blogs';
function Intro() {
  const textColorGradient = 'linear-gradient(90deg, #000, #808080)';

  return (
    <>
      <div className="mx-auto max-w-screen-lg mt-12 p-6 bg-transparent rounded-xl" style={{ height: '390px' }}>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <div>
              <h1 className="text-5xl font-bold" style={{ backgroundImage: textColorGradient, WebkitBackgroundClip: 'text', color: 'transparent' }}>Aman Kohare</h1>
              <p className="text-2xl mt-4 text-gray-600" >Student • Front end Developer</p>
              <p className="text-xl mt-2" style={{ backgroundImage: textColorGradient, WebkitBackgroundClip: 'text', color: 'transparent' }}>
                I'm a Frontend developer in <span className="text-sky-500">India.</span>  <br />
                I am creative and passionate about design and technology. <br />
              </p>
              <br />
              <div className="flex mt-6 space-x-3">
                <a href='https://github.com/Amankohare0514'> <GitHubIcon className="text-gray-800 w-8 h-8" /></a>
                <a href='https://www.instagram.com/aman__0514/'> <InstagramIcon className="text-gray-800 w-8 h-8" /></a>
                <a href='https://www.linkedin.com/in/aman-kohare-3a0678235/'> <LinkedInIcon className="text-gray-800 w-8 h-8" /></a>
                <a href='https://twitter.com/Aman__0514'><TwitterIcon className="text-gray-800 w-8 h-8" /></a>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-white">
            <img
              alt="Profile"
              className="object-cover w-full h-full"
              height="300"
              src={aman}
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
        </div>
      </div>
      <Skill />
      <hr className='mt-6'/>
      <div className='mt-2 '>
      <h1 className='text-3xl font-bold text-center pt-6'>Projects</h1>
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
      </div>
      <hr className='mt-8'/>
      <div className='mt-4 '>
      <Blogs/>
      </div>
    </>
  );
}

export default Intro