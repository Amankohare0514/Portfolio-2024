import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PushPinIcon from '@mui/icons-material/PushPin';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
const Blog = [
  {
    title: "How to make a Resume For Freshers!",
    description: "Creating a resume as a fresher can be challenging because you likely have limited work experience. However, you can still craft an impressive resume that highlights your skills, education, and any relevant experiences or achievements. Here’s a step-by-step guide to help you create an effective resume.",
    link: "https://medium.com/@amankohare/how-to-make-a-greate-resume-for-freshers-93913d82263a",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*30IRjQUnLNF9dC7ZciDHQQ.jpeg"
  },
  {
    title: "Connect Html form with Gmail using php.",
    description: "To connect an HTML form with Gmail, you can use a server-side programming language like PHP to handle the form submission and send the form data to your Gmail account. Here’s a step-by-step guide on how to achieve this.",
    link: "https://medium.com/@amankohare/connect-html-form-with-gmail-using-php-a7067baccd04",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MQLt9RZTsVwn0ziFlshXPg.png"
  },
  {
    title: "How to deploy website on vercel?",
    description: "Vercel is a cloud platform that provides a serverless deployment platform for frontend developers. It allows developers to deploy their web applications, websites, and serverless functions with ease. Vercel supports various frontend frameworks, including React, Vue.js, Angular, and more.",
    link: "https://medium.com/@amankohare/how-to-deploy-website-on-vercel-da6c54a184d6",
    image: "https://i.ytimg.com/vi/IHRU2ox5Jzw/maxresdefault.jpg"
  },
  {
    title: "How To Become Successful Web developer",
    description: "Becoming a successful web developer involves a combination of technical skills, continuous learning, and a proactive approach to personal and professional growth. Here are some steps to help you become a successful web developer.",
    link: "https://medium.com/@amankohare/how-to-become-successful-web-developer-f44874874e23",
    image: "https://www.wallpapertip.com/wmimgs/160-1606283_web-developer-wallpaper.jpg"
  },
];
const Blogs = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6'>My Blogs</h1>
      <h3 className='text-lg text-center pt-6 text-slate-600'>Where words weave the tapestry of thoughts, connecting minds across the digital landscape ❤️.</h3>
      <hr className='mt-6 pb-8' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mx-auto max-w-screen-lg">
        {Blog.map((item, index) => (
          <Card key={index} className="max-w-2xl w-full rounded-2xl">
            <CardMedia
              component="img"
              alt="blog"
              height="140"
              image={item.image}
            />
            <CardContent>
              <hr className='mb-4 mt-2' />
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }} className='text-2xl pb-2 text-black font-bold'>
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
              Read More
            </a>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8 ">
      <div className="w-full max-w-[1024px] md:w-[1024px] rounded-lg bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200 p-4 shadow-md mx-4 md:mx-0">
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
    </>
  );
};

export default Blogs;