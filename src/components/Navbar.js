import React, { useState } from "react";
import Logo from "./images/logo.png"
import { Link } from "react-router-dom";
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
      className="mx-auto bg-slate-400 text-black md:max-w-screen-lg md:px-8 lg:px-12 xl:px-20 py-3 rounded-md"
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

        <div className="hidden md:flex gap-4">
          <Link to="/about">
            <Typography variant="subtitle2" className="cursor-pointer">
              About
            </Typography>
          </Link>
          <Link to="/projects">
            <Typography variant="subtitle2" className="cursor-pointer">
              Projects
            </Typography>
          </Link>
          <Link to="/experience">
            <Typography variant="subtitle2" className="cursor-pointer">
              Experience
            </Typography>
          </Link>
          <Link to="/skills">
            <Typography variant="subtitle2" className="cursor-pointer">
              Skills
            </Typography>
          </Link>
          <Link to="/blogs">
            <Typography variant="subtitle2" className="cursor-pointer">
              Blogs
            </Typography>
          </Link>
          <Link to="/guest">
            <Typography variant="subtitle2" className="cursor-pointer">
              Guest
            </Typography>
          </Link>
          <Link to="/contact">
            <Typography variant="subtitle2" className="cursor-pointer">
              Contact
            </Typography>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          color="white"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-6 w-6" />
        </IconButton>

        {/* Mobile Menu Cart */}
        {isMenuOpen && (
          <div
            className="fixed top-12 right-4 h-300 w-200 bg-white shadow-md p-4 z-30"
            onClick={closeMenu}
          >
            <Link to="/about" className="block">
              <Typography variant="subtitle2" className="block">
                About
              </Typography>
            </Link>
            <Link to="/projects" className="block">
              <Typography variant="subtitle2" className="block">
                Projects
              </Typography>
            </Link>
            <Link to="/experience" className="block">
              <Typography variant="subtitle2" className="block">
                Experience
              </Typography>
            </Link>
            <Link to="/skills" className="block">
              <Typography variant="subtitle2" className="block">
                Skills
              </Typography>
            </Link>
            <Link to="/blogs" className="block">
              <Typography variant="subtitle2" className="block">
                Blogs
              </Typography>
            </Link>
            <Link to="/guest" className="block">
              <Typography variant="subtitle2" className="block">
                Guest
              </Typography>
            </Link>
            <Link to="/contact" className="block">
              <Typography variant="subtitle2" className="block">
                Contact
              </Typography>
            </Link>
          </div>
        )}
      </div>
    </Navbar>
  );
}
