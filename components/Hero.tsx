import React from 'react';
import Image from 'next/image';
import heroImage from '../public/images/hero-image.jpeg';

export default function Hero() {
    return (
        <div className='bg-primary w-full h-fit flex flex-col gap-2.5 lg:flex-row p-4 md:p-8 lg:p-16 justify-between items-center'>
            <div className='max-w-[750px] flex flex-col gap-8 text-primary-content lg:items-start items-center text-center lg:text-left'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl leading-12 lg:leading-[70px]'>
                    Bonjour,
                    <br /> je suis <span className='text-accent font-semibold'>
                        Mamadou SARR
                    </span>{' '}
                    <br /> Développeur <span className='text-secondary'>Web</span> &{' '}
                    <span className='text-secondary'>Mobile</span> Freelance
                </h1>
                <p className='text-base-100 italic text-lg'>
                    Ingénieur logiciel devenu entrepreneur. J&apos;adore créer et aider les autres.
                    Je développe vos applications fullstack web et mobiles iOS et Android <br />
                    développement mobile: Flutter
                </p>
                <button className='btn btn-secondary rounded-full w-fit text-lg'>
                    Télécharger CV
                </button>
            </div>
            <div className='bg-white w-full md:w-xl lg:w-[404px] lg:h-[512px] h-[592px] md:h-[634px] rounded-2xl mt-12 lg:mt-0 overflow-hidden'>
                <Image
                    src={heroImage}
                    alt='Mamadou Sarr'
                    className='w-full h-full object-cover object-top'
                />
            </div>
        </div>
    );
}
