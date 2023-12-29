import React from 'react';

const Skills = () => {
  const skillsList = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js",
    "React Native", "Next.js", "Node.js", "Express.js",
    "MongoDB", "Firebase", "Tailwind", "Bootstrap", "C++",
    "Vercel", "Netlify", "Redux", "Sanity.io", "Linux", "Canva", 
     "Figma", "Github"
  ];

  return (
    <div className="mx-auto max-w-screen-md text-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skillsList.map((skill, index) => (
          <button
            key={index}
            className="m-1 py-2 px-4 bg-transparent hover:bg-cyan-100 text-black font-semibold border border-blue-900 rounded-full"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
