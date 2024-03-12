import React from 'react';
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import PushPinIcon from '@mui/icons-material/PushPin';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
    description: "Create and share beautiful forms easily with Webflow's user-friendly prototype feature. Craft professional designs effortlessly, making a lasting impression. Simplify your web design experience with Webflow – where simplicity meets sophistication.",
    link: "https://github.com/Amankohare0514/YourForm",
    image: reform
  },
  {
    title: "My Tube",
    description: "Led the development of My_tube, an innovative YouTube clone. Spearheaded the creation of cutting-edge features, ensuring a seamless user experience and pushing the boundaries of online video platforms.",
    link: "https://github.com/Amankohare0514/my_tube",
    image: YouTube
  },
  {
    title: "Student Management System",
    description: "Engineered a resilient system for seamless control: effortlessly read, update, and delete with precision. Elevating operational efficiency while ensuring accuracy and ease of use.",
    link: "https://github.com/Amankohare0514/Student_Management-System",
    image: smsystem
  },
  {
    title: "Github Finder",
    description: "GitHub Finder, a web app, simplifies searching for GitHub accounts and repositories. Streamlined interface for user-friendly exploration of profiles and projects, enhancing the GitHub experience with efficiency and ease.",
    link: "https://github.com/Amankohare0514/Github-Finder-with-styling",
    image: github
  },
  {
    title: "SnAx DaRk ThEme",
    description: "Introducing a superior dark theme that outshines popular ones like ayu, dracula, night owl, etc. Elevate your visual experience with a sleek and sophisticated design, setting a new standard in dark theme aesthetics.",
    link: "https://marketplace.visualstudio.com/items?itemName=AmanKohare5.snax-dark-theme",
    image: dark
  },
  {
    title: "Right Draw",
    description: "Introducing RightNowDraw – constructed with the React library, this platform is designed for crafting whiteboards and infinite canvas experiences. Seamlessly unleash your creativity with an intuitive and dynamic React-powered framework.",
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
      <h1 className='text-3xl font-bold text-center pt-6 text-gray-400'>My Projects</h1>
      <h3 className='text-lg text-center pt-6 text-slate-400 mb-12'>The list of my projects. Everything was made with ❤️.</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto max-w-screen-lg">
        {Data.map((item, index) => (
         <Card key={index} className="bg-transparent hover:border max-w-2xl cursor-pointer w-full transition-transform transform hover:scale-95 " style={{ maxWidth: '500px', width: '100%' }}>
         <CardMedia
           component="img"
           alt="youtube clone"
           image={item.image}
           className='cursor-pointer'
         />
         <CardContent>
           <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold'  }} color='white' >
             {item.title}
           </Typography>
           <Typography variant="body2" color="white" sx={{ fontSize: '1.2rem' }} className='mt-2' >
             {item.description}
           </Typography>
         </CardContent>
         
         <a
           href={item.link}
           target="_blank"
           rel="noopener"
           className="flex items-center mb-6 justify-center border bg-transparent  text-gray-200 hover:text-black  h-10 w-32 rounded-full mt-1 mx-auto hover:bg-slate-100"
         >
           Repository
         </a>
       </Card>
        ))}
      </div>
      <div className='flex ml-2 mb-8 mt-8  mr-2 justify-center items-center flex-col'>
        <div className="w-full max-w-[1024px] md:w-[1024px] rounded-lg bg-gray-900 text-white p-4 shadow-xl mx-4 md:mx-0">
          <div className="flex items-center space-x-2">
            <PushPinIcon className="text-white" />
            <span className="font-semibold">Pinned</span>
          </div>
          <h6 className="mt-2 text-gray-400">
            Hey there! Hey there! You can check out more projects developed by me by visiting my GitHub profile. Thanks and here is 
            <a className='text-gray-300' href='https://github.com/Amankohare0514'> here</a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Projects;