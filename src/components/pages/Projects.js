import React from 'react';
import Card from '@mui/material/Card';
import PushPinIcon from '@mui/icons-material/PushPin';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import dark from "../images/dark.png"
import YouTube from "../images/youtube.png";
import github from "../images/github.png";
import reform from "../images/reform.png";
import smsystem from "../images/smsystem.png";
import draw from "../images/draw.jpg"
import IMDB from "../images/IMDB.png"
import Quizy from "../images/Quizy.png"
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
  {
    title: "SnAx DaRk ThEme",
    description: "Dark theme which surpasses dark themes like ayu, dracula, night owl, etc.",
    link: "https://marketplace.visualstudio.com/items?itemName=AmanKohare5.snax-dark-theme",
    image: dark
  },
  {
    title: "Right Draw",
    description: "RightNowDraw , build with React library for creating whiteboards and other infinite canvas experiences.",
    link: "https://github.com/Amankohare0514/RightDraw",
    image: draw
  },
  {
    title: "IMDB Clone",
    description: "An IMDb clone, providing a comprehensive database of films, TV shows, and celebrities, offering users a seamless platform for exploring, rating, and reviewing their favorite entertainment content.",
    link: "https://github.com/Amankohare0514/IMDB-CLONE",
    image: IMDB
  },
  {
    title: "Quiz-App",
    description: "A Quiz-App clone offering an engaging and interactive platform for users to test their knowledge, featuring diverse quiz categories, real-time scoring, and a user-friendly interface for an enjoyable quiz experience.",
    link: "https://github.com/Amankohare0514/Quiz-App",
    image: Quizy
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
          <Card key={index} className="max-w-2xl cursor-pointer w-full transition-transform transform hover:scale-95" style={{ maxWidth: '500px', width: '100%' }}>
            <CardMedia
              component="img"
              alt="youtube clone"
              height="140"
              image={item.image}
              className=' cursor-pointer'
            />
            <CardContent>
              <hr className='mb-4  cursor-pointer mt-2' />
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
      <div className='flex ml-2 mb-8 mt-8  mr-2 justify-center items-center flex-col'>
        <div className="w-full max-w-[1024px] md:w-[1024px] rounded-lg bg-gradient-to-r from-blue-50 via-red-100 to-yellow-100 p-4 shadow-xl mx-4 md:mx-0">
          <div className="flex items-center space-x-2">
            <PushPinIcon className="text-gray-700" />
            <span className="font-semibold">Pinned</span>
          </div>
          <h6 className="mt-2 text-gray-700">
            Hey there! Hey there! You can check out more projects developed by me by visiting my GitHub profile. Thanks and here is 
            <a className='text-black' href='https://github.com/Amankohare0514'> here</a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Projects;