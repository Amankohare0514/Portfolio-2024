import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import YouTube from "../images/youtube.png";
import github from "../images/github.png";
import reform from "../images/reform.png";
import smsystem from "../images/smsystem.png";

const Data = [
  {
    title: "Reform",
    description: "Create and share forms easily with beautiful webflow prototype feature",
    link: "https://github.com/Amankohare0514/YourForm",
    image: reform
  },
  {
    title: "My Tube",
    description: "Led the development of My_tube, an advanced YouTube clone, implementing robust authentication for heightened security measures.",
    link: "https://github.com/Amankohare0514/my_tube",
    image: YouTube
  },
  {
    title: "Student Management System",
    description: "Crafted a robust system for effortless control: read, update, delete with precision.",
    link: "https://github.com/Amankohare0514/Student_Management-System",
    image: smsystem
  },
  {
    title: "Github Finder",
    description: "Find GitHub accounts and repositories with styling.",
    link: "https://github.com/Amankohare0514/Github-Finder-with-styling",
    image: github
  },
];

const Projects = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6'>Projects</h1>
      <h3 className='text-lg text-center pb-8 pt-6 text-slate-600'>The list of my projects. Everything was made with ❤️.</h3>
      <div className="flex flex-wrap justify-center mx-auto max-w-2xl gap-10">
        {Data.map((item, index) => (
          <Card key={index} className="max-w-2xl w-full">
            <CardMedia
              component="img"
              alt="youtube clone"
              height="140"
              image={item.image}
            />
           <CardContent>
            <hr className='mb-4 mt-2'/>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                {item.description}
              </Typography>
            </CardContent>
            <hr className='mb-4 mt-2'/>
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              className="flex items-center mb-6 justify-center bg-transparent text-black border h-10 w-32 rounded-full mt-1 mx-auto hover:bg-slate-100"
            >
              Link
            </a>
          </Card>
        ))}
      </div>
      <a
              href="https://github.com/Amankohare0514"
              target="_blank"
              rel="noopener"
              className="flex items-center mt-5 mb-4 justify-center bg-transparent text-black border h-10 w-32 rounded-full mx-auto hover:bg-slate-300"
            >
              More Projects
            </a>
            <hr/>
    </>
  );
};

export default Projects;
