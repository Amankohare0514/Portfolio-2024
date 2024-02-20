import React from 'react'
import Comments from './Comments'
import PushPinIcon from '@mui/icons-material/PushPin';
const Guest = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6 text-gray-400'>Guestbook</h1>
      <h3 className='text-lg text-center pt-6 text-slate-400 mb-12'>🫶 You can tell me anything here!</h3>
      <div className='flex ml-2 mb-8  mr-2 justify-center items-center flex-col'>
        <div className="w-full max-w-[1024px] md:w-[1024px] rounded-lg bg-gray-900 text-white  p-4 shadow-xl mx-4 md:mx-0">
          <div className="flex items-center space-x-2">
            <PushPinIcon className="text-white" />
            <span className="font-semibold">Pinned</span>
          </div>
          <h6 className="mt-2  text-gray-400">
          Hey there! Thanks for visiting my website. If you have a moment, I'd love to hear your thoughts on my work. Please log in with your GitHub account to leave a comment. Thanks!
          </h6>
        </div>
      </div>
      <Comments />
    </>
  )
}

export default Guest