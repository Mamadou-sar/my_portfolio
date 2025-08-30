'use client';
import Image from 'next/image';
import React, {useState} from 'react';

// Types
interface Skill {
    name: string;
    level: number;
    category: 'Frontend' | 'Backend' | 'Mobile' | 'Outils';
    logo: string;
    bgColor: string;
    borderColor: string;
    description: string;
}

interface Stat {
    label: string;
    value: string;
    color: string;
}

type Category = 'Frontend' | 'Backend' | 'Mobile' | 'Outils';

const SkillsSection: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

    const skills: Skill[] = [
        {
            name: 'Next.js',
            level: 90,
            category: 'Frontend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            bgColor: 'bg-black',
            borderColor: 'border-gray-800',
            description: 'Framework React full-stack',
        },
        {
            name: 'React.js',
            level: 95,
            category: 'Frontend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            bgColor: 'bg-blue-500',
            borderColor: 'border-blue-500',
            description: 'Bibliothèque JavaScript UI',
        },
        {
            name: 'Django',
            level: 85,
            category: 'Backend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
            bgColor: 'bg-green-700',
            borderColor: 'border-green-700',
            description: 'Framework web Python',
        },
        {
            name: 'Node.js',
            level: 80,
            category: 'Backend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            bgColor: 'bg-green-600',
            borderColor: 'border-green-600',
            description: 'Runtime JavaScript serveur',
        },
        {
            name: 'Express.js',
            level: 82,
            category: 'Backend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            bgColor: 'bg-gray-700',
            borderColor: 'border-gray-700',
            description: 'Framework web Node.js',
        },
        {
            name: 'Tailwind CSS',
            level: 88,
            category: 'Frontend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            bgColor: 'bg-teal-500',
            borderColor: 'border-teal-500',
            description: 'Framework CSS utility-first',
        },
        {
            name: 'Flutter',
            level: 80,
            category: 'Mobile',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
            bgColor: 'bg-blue-400',
            borderColor: 'border-blue-400',
            description: 'Framework mobile multiplateforme',
        },
        {
            name: 'Python',
            level: 88,
            category: 'Backend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            bgColor: 'bg-blue-500',
            borderColor: 'border-blue-500',
            description: 'Langage de programmation',
        },
        {
            name: 'TypeScript',
            level: 85,
            category: 'Frontend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            bgColor: 'bg-blue-600',
            borderColor: 'border-blue-600',
            description: 'JavaScript avec typage statique',
        },
        {
            name: 'JavaScript',
            level: 90,
            category: 'Frontend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            bgColor: 'bg-yellow-500',
            borderColor: 'border-yellow-500',
            description: 'Langage web dynamique',
        },
        {
            name: 'Dart',
            level: 78,
            category: 'Mobile',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
            bgColor: 'bg-blue-600',
            borderColor: 'border-blue-600',
            description: 'Langage pour Flutter',
        },
        {
            name: 'HTML',
            level: 95,
            category: 'Frontend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            bgColor: 'bg-orange-500',
            borderColor: 'border-orange-500',
            description: 'Langage de balisage web',
        },
        {
            name: 'CSS',
            level: 90,
            category: 'Frontend',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            bgColor: 'bg-blue-400',
            borderColor: 'border-blue-400',
            description: 'Feuilles de style',
        },
        {
            name: 'Git',
            level: 85,
            category: 'Outils',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            bgColor: 'bg-orange-600',
            borderColor: 'border-orange-600',
            description: 'Système de contrôle de version',
        },
        {
            name: 'GitHub',
            level: 90,
            category: 'Outils',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            bgColor: 'bg-gray-900',
            borderColor: 'border-gray-900',
            description: 'Plateforme de développement',
        },
    ];

    const categories: Category[] = ['Frontend', 'Backend', 'Mobile', 'Outils'];
    const categoryColors: Record<Category, string> = {
        Frontend: 'from-blue-500 to-cyan-500',
        Backend: 'from-green-500 to-emerald-500',
        Mobile: 'from-purple-500 to-pink-500',
        Outils: 'from-gray-600 to-gray-800',
    };

    const SkillCard: React.FC<{ skill: Skill; index: number }> = ({skill, index}) => (
        <div
            className='group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:-translate-y-2'
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
        >
            {/* Category Badge */}
            <div
                className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                    categoryColors[skill.category]
                } shadow-lg`}
            >
                {skill.category}
            </div>

            {/* Logo */}
            <div className='flex justify-center mb-4'>
                <div className='relative'>
                    <Image
                        width={64}
                        height={64}
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`w-16 h-16 transition-all duration-300 group-hover:scale-110 ${
                            skill.name === 'Express.js' ? 'filter invert dark:invert-0' : ''
                        }`}
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const nextSibling = target.nextSibling as HTMLElement;
                            if (nextSibling) {
                                nextSibling.style.display = 'flex';
                            }
                        }}
                    />
                    {/* Fallback icon */}
                    <div
                        className={`w-16 h-16 rounded-lg ${skill.bgColor} hidden items-center justify-center text-white font-bold text-lg`}
                    >
                        {skill.name.charAt(0)}
                    </div>
                </div>
            </div>

            {/* Skill Name */}
            <h3 className='text-xl font-bold text-gray-800 dark:text-white text-center mb-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors'>
                {skill.name}
            </h3>

            {/* Description */}
            <p className='text-sm text-gray-600 dark:text-gray-400 text-center mb-4 h-10 flex items-center justify-center'>
                {skill.description}
            </p>

            {/* Progress Bar */}
            {/* <div className='relative'>
                <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                        Niveau
                    </span>
                    <span
                        className={`text-sm font-bold px-2 py-1 rounded-lg ${
                            skill.bgColor
                        } text-white transition-all duration-300 ${
                            hoveredSkill === index ? 'scale-110 shadow-lg' : ''
                        }`}
                    >
                        {skill.level}%
                    </span>
                </div>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden'>
                    <div
                        className={`h-full ${skill.bgColor} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{
                            width: `${skill.level}%`,
                            transform: hoveredSkill === index ? 'scaleY(1.2)' : 'scaleY(1)',
                        }}
                    />
                </div>
            </div>*/}

            {/* Hover Effect Overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none'/>
        </div>
    );

    return (
        <section className='py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4'>
                        Mes Compétences Techniques
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'></div>
                    <p className='text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto'>
                        Découvrez les technologies que je maîtrise pour créer des applications web,
                        mobiles et des solutions backend performantes
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {(['Toutes', ...categories] as const).map((category: string) => (
                        <button
                            key={category}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                category === 'Toutes'
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name}
                                   skill={skill}
                                   index={index}/>
                    ))}
                </div>

                {/* Stats Section */}
                <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {(
                        [
                            {
                                label: 'Technologies',
                                value: '15+',
                                color: 'from-blue-500 to-cyan-500',
                            },
                            {
                                label: "Années d'expérience",
                                value: '3+',
                                color: 'from-green-500 to-emerald-500',
                            },
                            {
                                label: 'Projets réalisés',
                                value: '25+',
                                color: 'from-purple-500 to-pink-500',
                            },
                            {
                                label: 'Satisfaction client',
                                value: '100%',
                                color: 'from-orange-500 to-red-500',
                            },
                        ] as Stat[]
                    ).map((stat: Stat, index: number) => (
                        <div
                            key={stat.label}
                            className='text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group'
                        >
                            <div
                                className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {stat.value}
                            </div>
                            <div className='text-gray-600 dark:text-gray-400 text-sm font-medium'>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
