import * as React from 'react';
import Logo from "../images/aman.jpg"
export default function About() {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6 text-gray-400'>About me</h1>
      <h3 className='text-lg text-center pt-6 text-slate-400 mb-6'>👋 Hi there! I am Aman Koahre.</h3>
      <div className='w-full h-auto mx-auto mt-1 max-h-300 border border-gray-800 lg:max-w-[990px]'>
      <img
        src={Logo}
        alt="Aman Koahre"
        className="w-full h-auto mx-auto mt-2 mb-2 max-h-300 border border-gray-300 lg:max-w-[600px]"
      />
      </div>
      <div className='flex items-center justify-center pt-6 text-gray-400'>
        <div className='max-w-5xl w-[1024px] pl-4 pr-4 mx-auto border-none rounded-lg ml-auto'>
          <h1 className='text-3xl font-bold pt-4 pb-2'>WHO I AM</h1>
          <div className=' font-sans text-lg pt-4'> I'm a Mern Stack developer in<span className='text-sky-600'> India. </span>  I am creative and passionate about design and technology
            so I always try to craft great-looking software products. Pursuing a Bachelor of Technology (B.Tech)
            in Information Technology from Barkatullah University, Bhopal.<br /> <br />
            Programming Journey: I'm a self-taught programmer on a quest to explore the exciting world of technology.
            My creative spirit is matched only by my dedication to design and technology.
            This combination of skills and enthusiasm makes me a valuable asset in the dynamic field of web development.
            <br /> <br />
            When not coding, I like to watch TV shows and movies, play some games with friends or hang out with them. I'm also listening to music most of the time.
            According to Spotify Wrapped, I listened to 989 minutes of music in 2023 and 3047 in 2022. 😁
            And last but not least, please don't hesitate to contact me!<br /> <br />

            A keen interest in playing Cricket.
          </div>
        </div>
      </div>
    </>
  );
}
