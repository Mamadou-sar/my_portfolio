"use client";
import {motion} from "framer-motion";
import {
    SiCss3,
    SiDart,
    SiDjango,
    SiExpress,
    SiFlutter,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

const skills = [
    {
        name: "Next.js",
        icon: <SiNextdotjs className="text-gray-900"
                           size={40}/>
    },
    {
        name: "React.js",
        icon: <SiReact className="text-blue-500"
                       size={40}/>
    },
    {
        name: "Django",
        icon: <SiDjango className="text-green-700"
                        size={40}/>
    },

    {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-600"
                           size={40}/>
    },
    {
        name: "Express.js",
        icon: <SiExpress className="text-gray-700"
                         size={40}/>
    },
    {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500"
                             size={40}/>
    },
    {
        name: "Flutter",
        icon: <SiFlutter className="text-blue-400"
                         size={40}/>
    },
    {
        name: "Python",
        icon: <SiPython className="text-[#3776AB]"
                        size={40}/>
    }
    ,
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600"
                            size={40}/>
    },
    {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500"
                            size={40}/>
    },
    {
        name: "Dart",
        icon: <SiDart className="text-[#0175C2]"
                      size={40}/> // Bleu officiel Dart
    },
    {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-600"
                       size={40}/>
    },
    {
        name: "CSS",
        icon: <SiCss3 className="text-blue-600"
                      size={40}/>
    },
    {
        name: "Git",
        icon: <SiGit className="text-red-600"
                     size={40}/>
    },
    {
        name: "GitHub",
        icon: <SiGithub className="text-gray-800"
                        size={40}/>
    },


];

export default function Skills() {
    return (
        <section id="skills"
                 className="py-16 bg-white mt-12 max-w-7xl mx-auto">
            <div className=" px-6">
                <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">
                    Compétences Techniques
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            whileHover={{scale: 1.05}}
                        >
                            {skill.icon}
                            <p className="mt-3 text-sm font-medium text-gray-700">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
