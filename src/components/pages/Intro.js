import React from 'react';
import MyImage from "./aman3.png";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg  relative mb-6">
        <div className="absolute inset-0 "></div>
        <img src={MyImage} alt="My Photo" className="w-full h-full object-cover rounded-full shadow-lg" />
      </div>
      <div className="text-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Aman Kohare</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-500 mb-4">Front end developer • React developer</h2>
        <h3 className="text-gray-800 mb-4 text-lg">I'm a self-taught programmer on a quest to explore the exciting world of technology.</h3>
          <Button variant="outlined" startIcon={<DownloadIcon />} className='rounded'>
            Resume
          </Button>
      </div>
    </div>
  );
}

export default Intro;
