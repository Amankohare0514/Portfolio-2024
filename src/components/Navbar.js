import React, { useState } from "react";
import Logo from "./images/logo.png"
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CreateIcon from '@mui/icons-material/Create';
import BarChartIcon from '@mui/icons-material/BarChart';
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MenuIcon } from "@heroicons/react/outline";

export function NavbarDark() {
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
      className="mx-auto bg-slate-50 text-black md:max-w-screen-lg md:px-8 lg:px-12 xl:px-20 py-3 rounded-2xl"
      style={{ marginTop: "1rem", backdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center justify-between w-full">
        <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="w-[40px]  h-[40px] cursor-pointer"
        />
        </Link>

        <div className="hidden md:flex gap-7 text-slate-500 font-medium">
          <Link to="/about">
            <Typography variant="subtitle2" className="cursor-pointer hover:text-slate-900">
              About
            </Typography>
          </Link>
          <Link to="/projects">
            <Typography variant="subtitle2" className="cursor-pointer hover:text-slate-900">
              Projects
            </Typography>
          </Link>
          <Link to="/experience">
            <Typography variant="subtitle2" className="cursor-pointer hover:text-slate-900">
              Experience
            </Typography>
          </Link>
          <Link to="/skills">
            <Typography variant="subtitle2" className="cursor-pointer hover:text-slate-900">
              Skills
            </Typography>
          </Link>
          <Link to="/blogs">
            <Typography variant="subtitle2" className="cursor-pointer hover:text-slate-900">
              Blogs
            </Typography>
          </Link>
          <Link to="/guest">
            <Typography variant="subtitle2" className="cursor-pointer hover:text-slate-900">
              Guest
            </Typography>
          </Link>
          <Link to="/contact">
            <Typography variant="subtitle2" className="cursor-pointer hover:text-slate-900">
              Contact
            </Typography>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          color="black"
          className="md:hidden pr-6"
          onClick={toggleMenu}
         
        >
          <MenuIcon className="h-6 w-6" />
        </IconButton>

        {isMenuOpen && (
          <div
            className="fixed top-12 right-4 h-[250px] w-[140px] bg-white shadow-md p-4 z-30"
            onClick={closeMenu}
          >
            <Link to="/about" className="block">
              <Typography variant="subtitle2" className="block pt-1 justify-center">
               About <InfoIcon/>
              </Typography>
            </Link>
            <Link to="/projects" className="block">
              <Typography variant="subtitle2" className="block pt-1">
                Projects <BookmarkAddedIcon/>
              </Typography>
            </Link>
            <Link to="/experience" className="block">
              <Typography variant="subtitle2" className="block pt-1">
                Experience <HourglassBottomIcon/>
              </Typography>
            </Link>
            <Link to="/skills" className="block">
              <Typography variant="subtitle2" className="block pt-1">
                Skills <BarChartIcon/>
              </Typography>
            </Link>
            <Link to="/blogs" className="block">
              <Typography variant="subtitle2" className="block pt-1">
                Blogs <CreateIcon/>
              </Typography>
            </Link>
            <Link to="/guest" className="block">
              <Typography variant="subtitle2" className="block pt-1">
                Guest <QuestionAnswerIcon/>
              </Typography>
            </Link>
            <Link to="/contact" className="block">
              <Typography variant="subtitle2" className="block pt-1">
                Contact <PermContactCalendarIcon/>
              </Typography>
            </Link>
          </div>
        )}
      </div>
    </Navbar>
  );
}
