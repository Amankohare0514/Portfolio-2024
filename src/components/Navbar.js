import { Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "./images/logo.png";
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import EarbudsBatteryOutlinedIcon from '@mui/icons-material/EarbudsBatteryOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import { useDarkMode } from './pages/DarkModeContext';
import DarkModeToggle from "./pages/DarkModeToggle";

import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MenuIcon } from "@heroicons/react/outline";

export function NavbarDark() {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar
      variant="gradient"
      className={`mx-auto ${darkMode ? 'bg-gray-800 text-white hover:text-white' : 'bg-cyan-100 text-black'} md:max-w-screen-lg md:px-8 lg:px-12 xl:px-20 py-3 rounded-2xl`}
      style={{ marginTop: '1rem', backdropFilter: 'blur(8px)' }}
    >
      <div className="flex items-center justify-between w-full">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-[40px] ml-4  h-[40px] cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex gap-7 text-slate-500 font-medium">
          <Link to="/about">
            <Typography variant="h2" className="cursor-pointer hover:text-slate-900">
              About
            </Typography>
          </Link>
          <Link to="/projects">
            <Typography variant="h2" className="cursor-pointer hover:text-slate-900">
              Projects
            </Typography>
          </Link>
          <Link to="/experience">
            <Typography variant="h2" className="cursor-pointer hover:text-slate-900">
              Experience
            </Typography>
          </Link>
          <Link to="/skills">
            <Typography variant="h2" className="cursor-pointer hover:text-slate-900">
              Skills
            </Typography>
          </Link>
          <Link to="/blogs">
            <Typography variant="h2" className="cursor-pointer hover:text-slate-900">
              Blogs
            </Typography>
          </Link>
          <Link to="/guest">
            <Typography variant="h2" className="cursor-pointer hover:text-slate-900">
              Guest
            </Typography>
          </Link>
          <Link to="/contact">
            <Typography variant="h2" className="cursor-pointer hover:text-slate-900">
              Contact
            </Typography>
          </Link>
          {/* <DarkModeToggle /> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton
            variant="text"
            color={darkMode ? "white" : "black"}
            className="pr-6"
            onClick={toggleMenu}
          >
            <MenuIcon className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-black'}`} />
          </IconButton>

          {isMenuOpen && (
            <div
              className={`fixed top-12 right-6 h-[280px] w-[160px] shadow-md p-4 z-30 ${darkMode ? 'bg-gray-800 text-white' : 'bg-cyan-100 text-black'
                }`}
              onClick={closeMenu}
            >
              <Link to="/about" className="block">
                <Typography variant="h2" className="block pt-2 justify-center">
                  <InfoOutlinedIcon /> About
                </Typography>
              </Link>
              <Link to="/projects" className="block">
                <Typography variant="h2" className="block pt-2">
                  <BeenhereOutlinedIcon />  Projects
                </Typography>
              </Link>
              <Link to="/experience" className="block">
                <Typography variant="h2" className="block pt-2">
                  <EarbudsBatteryOutlinedIcon />  Experience
                </Typography>
              </Link>
              <Link to="/skills" className="block">
                <Typography variant="h2" className="block pt-2">
                  <DynamicFormOutlinedIcon /> Skills
                </Typography>
              </Link>
              <Link to="/blogs" className="block">
                <Typography variant="h2" className="block pt-2">
                  <CreateOutlinedIcon /> Blogs
                </Typography>
              </Link>
              <Link to="/guest" className="block">
                <Typography variant="h2" className="block pt-2">
                  <CommentOutlinedIcon /> Guest
                </Typography>
              </Link>
              <Link to="/contact" className="block">
                <Typography variant="h2" className="block pt-2">
                  <PermContactCalendarOutlinedIcon />  Contact
                </Typography>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
}
