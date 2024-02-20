import React from "react"
import Education from "./Education"
 function Experience() {
  return (
    <>
     <h1 className='text-3xl font-bold text-center pt-6 text-gray-400'>Experience</h1>
      <h3 className='text-lg text-center pt-6 text-slate-400'>💥 Front-end specialist crafting visually appealing, responsive user interfaces.</h3>
  
    <section className="p-8 bg-transparent mx-auto max-w-[1024px]">
      <div className="grid md:grid-cols-3 gap-8 text-gray-400">
        <div>
          <h3 className="text-xl font-semibold mb-2">FrontEnd - at Salesqueen Software Solutions - Intern - Chennai, India</h3>
          <p className="text-gray-500 mb-4">Nov 2023 - Dec 2023</p>
          <ul className="list-disc pl-5 space-y-2">
           <li>
           Led the end-to-end development of a responsive website withHTML, CSS, and JavaScript, boosting responsiveness by 25%.
           </li>
           <li>
           Significantly enhanced a dynamic web app using React.js, showcasing expertise in creating interactive and user-centric interfaces.
           </li>
            <li>
            Demonstrated outstanding projectmanagement skills, consistentlymeeting timelines and exceeding client expectations.
            </li>
          </ul>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-gray-300"><a href="https://salesqueen.org/">SSS</a></span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Web development - at Code Soft - Intern -Kolkata, West Bengal, India</h3>
          <p className="text-gray-500 mb-4">July 2023 - October 2023</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Spearheaded the development of microservices and user interface components, resulting in a 30% increase in
              user engagement for the client’s personality development system
            </li>
            <li>
              Developed a CI/CD workflow to automatically perform a set of actions daily on a product in development in
              order to decrease time needed for team members to identify and fix bugs/issues
            </li>
           
          </ul>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-gray-300"><a href="https://codsoft.in/">CodeSoft</a></span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Web Developer at CodeClause  – Intern - Pune ,India
          </h3>
          <p className="text-gray-500 mb-4">April 2023 – July 2023</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Orchestrated the creation of static websites for clients, accompanied by the development of microservices
              for seamlesswebsite operation.
            </li>
            <li>
              Played a pivotal role in shaping architecture plans, UI designs, and feature development, contributing to
              a 15% increase in project success rate.
            </li>
            <li>
              Led the creation of static websites and seamless microservices, resulting in a 20% reduction in project
              timelines, enhancing client satisfaction and delivery efficiency.
            </li>
          </ul>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-gray-300"><a href="https://internship.codeclause.com/">CodeClause</a></span>
          </div>
        </div>
      </div>
    </section>
    <Education/>
    </>
  )
}

export default Experience