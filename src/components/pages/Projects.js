import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Data = [
  {
    title: "Reform",
    description: "Create and share form easily with beautiful webflow prototype feature" ,
    link: "https://github.com/Amankohare0514/YourForm"
  },
  {
    title: "My Tube",
    description: "Led the development of My_tube, an advanced YouTube clone, implementing robust authentication for heightened security measures.",
    link: "https://github.com/Amankohare0514/my_tube"
  },
  {
    title: "Student Management System",
    description: "Crafted a robust systemfor effortless control:read, update, delete with precision.",
    link: "https://github.com/Amankohare0514/Student_Management-System"
  },
  {
    title: "Github Finder",
    description: "find github account and also repositories all things",
    link: "https://github.com/Amankohare0514/Github-Finder-with-styling"
  },
];

export default function Projects() {
  return (
    <>
     <h1 className='text-3xl font-bold text-center pt-6 pb-6'>About</h1>
    <div className="flex flex-wrap justify-center mx-auto max-w-2xl gap-10">
      {Data.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 900, width: '100%' }}>
          <CardMedia
            component="img"
            alt="Placeholder Image"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      ))}
    </div>
    </>
  );
}
