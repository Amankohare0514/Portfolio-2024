import React from 'react'
import Education from "./Education"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
const Experience = () => {
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold text-center pt-6'>Work Experience</h1>
        <h3 className='text-lg text-center pt-6 text-slate-600'>💥 Front-end specialist crafting visually appealing, responsive user interfaces.
        </h3>
        <hr className='mt-6 pb-14' />
        <Card className="flex mx-auto mt-auto mb-auto w-[420px] h-[510px] border">
          <CardHeader color="blue-gray" className="relative h-[260px] pt-1 pb-2">
            <img
              src="https://media.licdn.com/dms/image/C560BAQEgRZwF9uG6sg/company-logo_200_200/0/1652077590491?e=2147483647&v=beta&t=AW_ev-Rv2HzMs90lT8-6dyHBD7SWGYphkfvOHcm60n4"
              alt="card-image"
              className='mx-auto mt-auto mb-auto h-[180px] border-none'
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className=" text-center pt-4">
              SSS (Salesqueen Software Solutions)
            </Typography>
            <Typography variant="p" color="blue-gray" className="mb-2 text-center ">
              Front end developer, Nov 2023 - Dec 2023
            </Typography>
            <Typography className='text-md ml-2 pt-2 pb-4'>
              • Led the end-to-end development of a responsive website withHTML, CSS, and JavaScript, boosting responsiveness by 25%. <br /> <br />
              • Significantly enhanced a dynamic web app using React.js, showcasing expertise in creating interactive and user-centric interfaces.
            </Typography>
            <IconButton aria-label="sss" href='https://salesqueen.org/'>
              <LinkIcon />
            </IconButton>
          </CardBody>
        </Card>
      </div>
      <hr className='mt-8' />
      <Education />
    </>
  )
}

export default Experience