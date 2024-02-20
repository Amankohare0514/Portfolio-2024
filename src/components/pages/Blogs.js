import * as React from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import Blog from './Blog';
const Blogs = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6 text-gray-400'>My Blogs</h1>
      <h3 className='text-lg text-center pt-6 text-slate-400 mb-12'>Where words weave the tapestry of thoughts, connecting minds across the digital landscape ❤️.</h3>
      <Blog/>
      <div className="flex justify-center  items-center mt-8 ">
      <div className="w-full  max-w-[1024px] md:w-[1024px] rounded-lg bg-gray-900 text-white  p-4 shadow-md mx-4 md:mx-0">
        <div className="flex items-center space-x-2">
          <PushPinIcon className="text-gray-700" />
          <span className="font-semibold">Pinned</span>
        </div>
        <p className="mt-2 text-gray-400">
          Hey there! You can check out more blog created by me by visiting my Medium profile. Thanks and here is {" "}
          <a className="text-gray-500 hover:underline" href="https://medium.com/@amankohare">
            link
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Blogs;