import * as React from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import Blog from './Blog';
const Blogs = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6'>My Blogs</h1>
      <h3 className='text-lg text-center pt-6 text-slate-600'>Where words weave the tapestry of thoughts, connecting minds across the digital landscape ❤️.</h3>
      <hr className='mt-6 pb-8 border-gray-300' />
      <Blog/>
      <div className="flex justify-center  items-center mt-8 ">
      <div className="w-full  max-w-[1024px] md:w-[1024px] rounded-lg bg-gradient-to-r from-blue-50 via-red-100 to-yellow-100 p-4 shadow-md mx-4 md:mx-0">
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