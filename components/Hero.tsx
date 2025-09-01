import React from 'react';
import Image from 'next/image';
import heroImage from '../public/images/hero-image.png';
import {FaArrowTrendUp, FaRegFaceSmile} from 'react-icons/fa6';
import {BsLightningCharge} from 'react-icons/bs';
import {AiOutlineCloudDownload, AiOutlineTrophy} from 'react-icons/ai';

export default function Hero() {
    return (
        <>
            <div className='bg-primary w-full h-fit flex flex-col gap-2.5 lg:flex-row p-4 md:p-8 lg:p-16 justify-between items-center'>
                <div className='max-w-[750px] flex flex-col gap-8 text-primary-content lg:items-start items-center text-center lg:text-left'>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl leading-12 lg:leading-[70px]'>
                        Bonjour,
                        <br/> je suis{' '}
                        <span className='text-accent font-semibold'>Mamadou SARR</span> <br/>{' '}
                        Développeur <span className='font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Web</span> &{' '}
                        <span className='font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Mobile</span> Freelance
                    </h1>
                    <p className='text-base-100 italic text-lg'>
                        Ingénieur logiciel devenu entrepreneur. J&apos;adore créer et aider les
                        autres. Je développe vos applications fullstack web et mobiles iOS et
                        Android <br/>
                        développement mobile: Flutter
                    </p>

                    <a
                        href='/files/CV_Mamadou_SARR.pdf'
                        download
                        className='w-fit bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-2xl text-lg'
                    >

                        <span>Télécharger CV</span>
                        <AiOutlineCloudDownload size={24}/>

                    </a>

                </div>
                <div className='bg-white w-full md:w-xl lg:w-[404px] lg:h-[512px] h-[592px] md:h-[634px] rounded-3xl mt-12 lg:mt-0 mb-8 lg:mb-0 relative'>
                    <Image
                        src={heroImage}
                        alt='Mamadou Sarr'
                        className='w-full h-full object-cover object-top rounded-3xl'
                    />
                    <div className='absolute top-2 md:top-[-15px] right-2 md:right-[-15px] p-2.5 bg-white/12 backdrop-blur-xs rounded-full '>
                        <FaRegFaceSmile className='text-success text-xl'/>
                    </div>
                    <div className='absolute bottom-4 left-1/2 md:left-40 lg:left-20 z-10 -translate-x-1/2 flex flex-col items-center md:items-start justify-between gap-4 w-[90%]'>
                        <div className='flex items-center gap-2.5 p-2.5 bg-white/12 backdrop-blur-xs text-primary-content/70 rounded-xl text-sm md:text-base'>
                            <AiOutlineTrophy className='text-success text-xl'/>
                            <p>106+ histoires de réussite</p>
                        </div>
                        <div className='flex items-center gap-2.5 p-2.5 bg-white/12 backdrop-blur-xs text-primary-content/70 rounded-xl text-sm md:text-base'>
                            <div className='p-2 rounded-full border border-gray-500'>
                                <BsLightningCharge className='text-success text-xl'/>
                            </div>
                            <div>
                                <p>Votre Croissance, Notre Mission</p>
                                <p className='flex items-center gap-2.5'>
                                    <FaArrowTrendUp className='text-success text-xl'/> +65% ROI
                                    Boost
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primary/50 w-full h-3.5'></div>
            <div className='bg-primary/10 w-full h-3.5'></div>
        </>
    );
}
