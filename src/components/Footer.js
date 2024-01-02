import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mt-4 border-t border-gray-200 pt-8">
          <div className="flex flex-col font-semibold space-y-2">
            <Link to="/" className="text-gray-500 hover:text-gray-700"> Home</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-700"> About</Link>
            <Link to="/projects" className="text-gray-500 hover:text-gray-700"> Project</Link>
            <Link to="/experience" className="text-gray-500 hover:text-gray-700"> Experience</Link>
          </div>
          <div className="flex flex-col font-semibold space-y-2">
            <Link to="/skills" className="text-gray-500 hover:text-gray-700"> Skills</Link>
            <Link to="/blogs" className="text-gray-500 hover:text-gray-700"> Blogs</Link>
            <Link to="/guest" className="text-gray-500 hover:text-gray-700"> Guest</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-700"> Contact</Link>
          </div>
          <div className="flex flex-col font-semibold space-y-2">
            <a className="text-gray-500 hover:text-gray-700" href="https://github.com/Amankohare0514/Portfolio-2024">
              Code
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://tailwindcss.com/docs/installation">
              Tailwind
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://react.dev/">
              React
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://mui.com/material-ui/">
              UI
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center border-t  border-gray-200 py-4 mt-4">
          <span className="text-gray-500"><a href='#'>© 2024 aman kohare</a></span>
          <div className="flex space-x-4">
            <a className="text-gray-500 hover:text-gray-700" href="https://github.com/Amankohare0514">
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://www.instagram.com/aman__0514/">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://twitter.com/Aman__0514">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a className="text-gray-500 hover:text-gray-700" href="https://www.linkedin.com/in/aman-kohare-3a0678235/">
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


