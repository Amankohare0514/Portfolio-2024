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
    description: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    link: "https://medium.com/@amankohare/how-to-deploy-website-on-vercel-da6c54a184d6",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*GK8vBkCMyhB4sKe8xLNNIg.png"
  },
  {
    title: "How To Become Successful Web developer",
    description: "Becoming a successful web developer involves a combination of technical skills, continuous learning, and a proactive approach to personal and professional growth. Here are some steps to help you become a successful web developer.",
    link: "https://medium.com/@amankohare/how-to-become-successful-web-developer-f44874874e23",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*V17ZOqLIb4QsU_PPNIBcEQ.jpeg"
  },
];
export default function Blogs() {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6'>My Blogs</h1>
      <h3 className='text-lg text-center pt-6 text-slate-600'>Where words weave the tapestry of thoughts, connecting minds across the digital landscape ❤️.</h3>
      <hr className='mt-6 pb-8' />
      <div className="flex flex-wrap justify-center mx-auto max-w-2xl gap-10">
        {Blog.map((item, index) => (
          <Card key={index} className="max-w-4xl w-[800px] rounded-2xl">
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
              Read More
            </a>
          </Card>
        ))}
      </div>
      <div className='flex justify-center items-center flex-col'>
        <Card className="mt-6 w-[672px] h-[110px]  bg-cyan-100 rounded-lg">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 pt-2 ml-4">
              <PushPinIcon /> Pinned
            </Typography>
            <Typography className='ml-4 text-lg text-black'>
            Hey there! You can check out more blog created by me by visiting my Medium profile. <span className='text-cyan-600'><a href='https://medium.com/@amankohare'>link</a></span> 
            </Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
};