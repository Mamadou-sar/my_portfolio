import React from 'react';
import ChecklistCards from '@/components/CheckListCard';

export default function ServicesPage() {
    return (
        <div className='max-w-7xl mx-auto p-4 mt-12'>
            <div className='z-20 flex flex-col items-center justify-center'>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                    Ce que nous offrons
                </h2>
                <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'></div>
                <p className='text-lg md:text-xl mt-6'>
                    Découvrez comment nous pouvons transformer vos idées en réalité digitale et
                    propulser votre entreprise vers de nouveaux sommets.
                </p>

                <div>
                    {/* Autres sections */}
                    <ChecklistCards />
                    {/* Autres sections */}
                </div>
            </div>
        </div>
    );
}
