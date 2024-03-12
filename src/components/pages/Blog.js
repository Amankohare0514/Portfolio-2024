import React from 'react'
import BlogData from './BlogData'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
    Card,
    Typography,
  } from "@material-tailwind/react";
const Blog = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mx-auto max-w-screen-lg">
        {BlogData.map((item, index) => (
          <Card key={index} className="bg-transparent max-w-2xl transition-transform transform hover:scale-95 cursor-pointer w-full rounded-2xl">
            <CardMedia
              component="img"
              alt="blog"
              height="140"
              image={item.image}
            />
            <CardContent>
            
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }} className='text-2xl pb-2 text-white font-bold'>
                {item.title}
              </Typography>
              <Typography variant="h6"  sx={{ fontSize: '1.2rem' }} color='white'>
                {item.description}
              </Typography>
            </CardContent>
           
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              className="flex items-center mb-6 justify-center  text-white border h-10 w-32 rounded-full mt-1 mx-auto hover:bg-slate-100 hover:text-black"
            >
              Read More
            </a>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Blog