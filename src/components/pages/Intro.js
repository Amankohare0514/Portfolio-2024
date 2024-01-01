import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import aman from "../images/introimage.jpg";

function Intro() {
  const textColorGradient = 'linear-gradient(90deg, #000, #808080)';

  return (
    <div className="mx-auto max-w-screen-lg mt-12 p-6 bg-transparent rounded-xl" style={{ height: '700px' }}>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <div>
            <h1 className="text-5xl font-bold" style={{ backgroundImage: textColorGradient, WebkitBackgroundClip: 'text', color: 'transparent' }}>Aman Kohare</h1>
            <p className="text-2xl mt-4 text-gray-600" >Student • Front end Developer</p>
            <p className="text-xl mt-2" style={{ backgroundImage: textColorGradient, WebkitBackgroundClip: 'text', color: 'transparent' }}>
              I'm a Frontend developer in <span className="text-sky-500">India.</span>  <br/>
              I am creative and passionate about design and technology. <br/>
            </p>
            <div className="flex mt-6 space-x-3">
              <GitHubIcon className="text-white w-8 h-8" />
              <InstagramIcon className="text-white w-8 h-8" />
              <LinkedInIcon className="text-white w-8 h-8" />
              <TwitterIcon className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-white">
          <img
            alt="Profile"
            className="object-cover w-full h-full"
            height="900"
            src={aman}
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="900"
          />
        </div>
      </div>
    </div>
    
  );
}

export default Intro