import { Typography } from "@material-tailwind/react";
import Logo from "./images/logo.png"

export function FooterWithLogo() {
  return (
    <footer className="mx-auto text-black md:max-w-screen-lg md:px-8 lg:px-12 xl:px-20 py-3 rounded-md">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between max-w-screen-lg md:px-8 lg:px-12 xl:px-20 py-3 rounded-md">
        <img
          src={Logo}
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
             Repository
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Aman Kohare
      </Typography>
    </footer>
  );
}
