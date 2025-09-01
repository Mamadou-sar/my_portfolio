import React from 'react';
import Image from 'next/image';
import AboutImage from '../../../public/images/IMG_0068.jpeg';
import Link from 'next/link';

interface Skill {
    desc: string;
    category: 'frontend' | 'backend' | 'mobile' | 'outils';
}

interface AboutProps {
    profileImage?: string;
    name?: string;
    title?: string;
    description?: string;
    skills?: Skill[];
    experience?: string;
    location?: string;
}

const About: React.FC<AboutProps> = ({
                                         profileImage = AboutImage,
                                         name = 'Mamadou SARR',
                                         title = 'Développeur Full-Stack & Mobile',
                                         description = "Passionné par le développement web et mobile, je crée des applications modernes et performantes. J’aime transformer des idées en produits numériques concrets, Avec plusieurs années d'expérience, je maîtrise les technologies front-end, back-end et le développement d'applications mobiles cross-platform.",
                                         skills = [
                                             {
                                                 desc: `Développement d’applications web modernes, responsives et performantes avec
                  les frameworks JavaScript les plus utilisés.`,
                                                 category: 'frontend',
                                             },
                                             {
                                                 desc: `Expérience avec Node.js, bases de données et API REST/GraphQL pour donner vie
                  aux fonctionnalités côté serveur.`,
                                                 category: 'backend',
                                             },
                                             {
                                                 desc: 'Création d’applications mobiles cross-platform avec React Native, optimisées pour iOS et Android.',
                                                 category: 'mobile',
                                             },
                                             {desc: '', category: 'outils'},
                                         ],
                                         experience = '5+ ans',
                                         location = 'Lerida, Espagne',
                                     }) => {
    const categoryColors = {
        frontend: 'bg-blue-500',
        backend: 'bg-green-500',
        mobile: 'bg-purple-500',
        outils: 'bg-orange-500',
    };

    const categoryLabels = {
        frontend: 'Front-end',
        backend: 'Back-end',
        mobile: 'Mobile',
        outils: 'Outils',
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <section className='py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                        À Propos
                    </h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'></div>
                </div>

                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Image et infos personnelles */}
                    <div className='text-center lg:text-left'>
                        <div className='relative inline-block mb-8'>
                            <div className='w-[320px] md:w-[420px] h-[550px] mx-auto lg:mx-0 relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300'>
                                <Image
                                    src={profileImage}
                                    alt={`Photo de profil de ${name}`}
                                    fill
                                    className='object-cover'
                                    priority
                                />
                            </div>
                            <div className='absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg'>
                                {experience}
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                {name}
                            </h3>
                            <p className='text-xl text-primary-200 dark:text-blue-400 font-medium'>
                                {title}
                            </p>
                            <p className='text-gray-600 dark:text-gray-300 flex items-center justify-center lg:justify-start'>
                                <svg
                                    className='w-5 h-5 mr-2'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                {location}
                            </p>
                        </div>
                    </div>

                    {/* Description et valeurs */}
                    <div className='space-y-6'>
                        <div>
                            <h4 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
                                Mon Parcours
                            </h4>
                            <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-lg'>
                                {description}
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700'>
                                <h5 className='font-semibold text-gray-900 dark:text-white mb-2'>
                                    💡 Innovation
                                </h5>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                                    Toujours à la recherche des dernières technologies
                                </p>
                            </div>
                            <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700'>
                                <h5 className='font-semibold text-gray-900 dark:text-white mb-2'>
                                    🎯 Qualité
                                </h5>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>
                                    Code propre et maintenable, tests automatisés
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compétences */}
                <div className='mt-20'>
                    <h4 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-12'>
                        Mes Compétences
                    </h4>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                            <div
                                key={category}
                                className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700'
                            >
                                <div className='flex items-center mb-6'>
                                    <div
                                        className={`w-3 h-3 rounded-full ${
                                            categoryColors[category as keyof typeof categoryColors]
                                        } mr-3`}
                                    ></div>
                                    <h5 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                        {categoryLabels[category as keyof typeof categoryLabels]}
                                    </h5>
                                </div>

                                <div className='space-y-4'>
                                    {categorySkills.map((skill, index) => (
                                        <div key={index}>
                                            <div className='flex justify-between items-center mb-2'>
                                                <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                                    {skill.desc}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className='text-center mt-16'>
                    <div className='bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl shadow-xl'>
                        <h4 className='text-2xl font-bold text-white mb-4'>
                            Travaillons ensemble !
                        </h4>
                        <p className='text-blue-100 mb-6 text-lg'>
                            Vous avez un projet en tête ? Discutons de la façon dont je peux vous
                            aider.
                        </p>
                        <Link
                            href='/contact'
                            className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg'
                        >
                            Me Contacter
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
