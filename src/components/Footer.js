import { Typography } from "@material-tailwind/react";
import Logo from "./images/logo.png"

export function FooterWithLogo() {
  return (
    <footer className="mx-auto text-black md:max-w-screen-lg md:px-8 lg:px-12 xl:px-20 py-3 rounded-md">
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Aman Kohare
      </Typography>
    </footer>
  );
}
