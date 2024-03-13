import React from 'react'

const Skill = () => {
    const skills = [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js",
        "Next.js", "Node.js", "Express.js", "React Native",
        "MongoDB", "Firebase", "Tailwind", "Bootstrap",
        "Vercel", "Netlify", "Redux", "Sanity.io", "Linux", "Canva",
        "Figma", "Github", "C++",
    ];
    return (
        <>
     
         <h1 className='text-3xl font-bold text-center pb-4 text-gray-300'>Skills</h1>
            <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
                <div className="flex flex-wrap justify-center">
                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            className="m-1 py-2 px-4 bg-transparent hover:bg-cyan-100 hover:text-black text-gray-400 font-semibold border hover:border-gray-900 border-gray-800 rounded-full"
                        >
                            {skill}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skill