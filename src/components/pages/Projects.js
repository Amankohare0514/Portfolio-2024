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
    description: "Led the development of My_tube, an advanced YouTube clone.",
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
    description: "GitHub Finder is a web application that allows users to search for GitHub accounts and repositories.",
    link: "https://github.com/Amankohare0514/Github-Finder-with-styling",
    image: github
  },
];

const Projects = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6'>My Projects</h1>
      <h3 className='text-lg text-center pt-6 text-slate-600'>The list of my projects. Everything was made with ❤️.</h3>
      <hr className='mt-6 pb-8' />

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto max-w-screen-lg">

        {Data.map((item, index) => (
          <Card key={index} className="max-w-2xl w-full" style={{ maxWidth: '500px', width: '100%' }}>
            <CardMedia
              component="img"
              alt="youtube clone"
              height="140"
              image={item.image}
            />
            <CardContent>
              <hr className='mb-4 mt-2' />
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                {item.description}
              </Typography>
            </CardContent>
            <hr className='mb-4 mt-2' />
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
      <hr />
    </>
  );
};

export default Projects;