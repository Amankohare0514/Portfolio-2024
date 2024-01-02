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
        <hr className='pb-4'/>
         <h1 className='text-3xl font-bold text-center pb-4'>Skills</h1>
            <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center">
                <div className="flex flex-wrap justify-center">
                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            className="m-1 py-2 px-4 bg-transparent hover:bg-cyan-100 text-black font-semibold border border-blue-900 rounded-full"
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