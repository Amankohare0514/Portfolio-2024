import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Contact() {
    return (
        <>
            <h1 className='text-3xl font-bold text-center pt-6 text-gray-400'>Contact</h1>
            <h3 className='text-lg text-center pt-6 text-slate-400 mb-12'>😊 I love it when you want to contact me</h3>
            <div className="flex items-center justify-center">
                <div className="max-w-5xl w-[1024px] pl-2 pr-2 mx-auto border-none rounded-lg ml-auto">
                    <p className="mb-6 text-xl text-gray-400">I'm always open to chat, so please don't hesitate to contact me!</p>
                    <p className="mb-6 text-xl text-gray-400">
                        Anyways, please <span className="text-blue-500">don't just say hello</span>.
                    </p>
                    <p className="mb-4 text-xl text-gray-400">There are a few ways you can get in touch:</p>
                    <div className="mb-8 text-xl text-gray-300">
                        <p className='pt-1'>
                            Email <span className='font-bold pl-8 text-gray-500 hover:text-cyan-800'>  amankohare@gmail.com</span>
                        </p>
                        <p className='pt-1'>
                            LinkedIn <span className='font-bold pl-20 text-gray-500 hover:text-red-500'><a href='https://www.linkedin.com/in/aman-kohare-3a0678235/'>amankohare0514</a></span>
                        </p>
                        <p className='pt-1'>
                            Medium <span className='font-bold pl-20 text-gray-500 hover:text-lime-800'><a href='https://medium.com/@amankohare'>amankohare0514</a></span>
                        </p>
                        <p className='pt-1'>
                            Ask me Anything <span className='font-bold pl-16 text-gray-500 hover:text-lime-400'><a href='https://github.com/Amankohare0514'>on GitHub</a></span>
                        </p>
                    </div>
                    <br />
                    <div className="max-w-5xl h-[160px] p-6 border border-gray-300 hover:border-gray-500 rounded-lg flex items-center">
                        <div className="flex-grow mt-4">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-200">Aman Kohare</h2>
                            <p className="text-gray-400 mb-4">Front end  developer</p>
                            <button className="mb-4  h-10 w-28 bg-gray-900 text-gray-300 hover:bg-gray-600 hover:text-white" >
                                <a href="/CV.pdf" download> Resume</a>
                            </button>
                        </div>
                        <div className="flex space-x-4">
                            <a href='https://github.com/Amankohare0514'> <GitHubIcon className="text-gray-600" /></a>
                            <a href='https://www.linkedin.com/in/aman-kohare-3a0678235/'><LinkedInIcon className="text-gray-600" /></a>
                            <a href='https://www.instagram.com/aman__0514/'><InstagramIcon className="text-gray-600" /></a>
                            <a href='https://twitter.com/Aman__0514'><TwitterIcon className="text-gray-600" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
