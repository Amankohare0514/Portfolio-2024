import React from 'react'
import Comments from './Comments'
import PushPinIcon from '@mui/icons-material/PushPin';
const Guest = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-center pt-6'>Guestbook</h1>
      <h3 className='text-lg text-center pt-6 text-slate-600'>🫶 You can tell me anything here!</h3>
      <hr className='mt-6 pb-6 border-gray-300' />
      <div className='flex ml-2 mb-8  mr-2 justify-center items-center flex-col'>
        <div className="w-full max-w-[1024px] md:w-[1024px] rounded-lg bg-gradient-to-r from-blue-50 via-red-100 to-yellow-100 p-4 shadow-xl mx-4 md:mx-0">
          <div className="flex items-center space-x-2">
            <PushPinIcon className="text-gray-700" />
            <span className="font-semibold">Pinned</span>
          </div>
          <h6 className="mt-2  text-gray-700">
          Hey there! Thanks for visiting my website. If you have a moment, I'd love to hear your thoughts on my work. Please log in with your GitHub account to leave a comment. Thanks!
          </h6>
        </div>
      </div>
      <Comments />
    </>
  )
}

export default Guest