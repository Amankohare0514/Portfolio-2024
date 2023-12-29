import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Logo from "../images/aman.jpg"

export default function About() {
  return (
    <>
    <h1 className='text-3xl font-bold text-center pt-6'>About</h1>
    <h3 className='text-lg text-center pt-6 text-slate-600'>👋 Hi there! I am Aman Koahre.</h3>
    <Card sx={{ maxWidth: 900, margin: 'auto', marginTop: 1, padding: { xs: 4, md: 8 } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={Logo}
          alt="Aman Koahre"
        />
        <CardContent>
          <Typography variant="h6" color="black">
            I'm a MERN-stack developer in India. I am creative and passionate about design and technology
            so I always try to craft great-looking software products. Pursuing a Bachelor of Technology (B.Tech)
            in Information Technology from Barkatullah University, <span className='text-cyan-500'>Bhopal.</span> <br /> <br />
            A keen interest in playing Cricket. <br /> <br />
            <span className='underline'>Programming Journey:</span> I'm a self-taught programmer on a quest to explore the exciting world of technology.
            My creative spirit is matched only by my dedication to design and technology.
            This combination of skills and enthusiasm makes me a valuable asset in the dynamic field of web development.
            <br /> <br />
            And last but not least, please don't hesitate to contact me!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
