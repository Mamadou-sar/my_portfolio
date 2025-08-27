import React from 'react'
import ChecklistCards from "@/components/CheckListCard";

export default function ServicesPage() {
    return (
        <div className='max-w-7xl mx-auto p-4 mt-12'>
            <div className='z-20 flex flex-col items-center justify-center'>
                <h2 className='text-4xl font-semibold my-8 text-primary-500'>Ce que nous offrons</h2>
                <p className='text-lg md:text-xl'>Découvrez
                    comment nous pouvons transformer vos
                    idées en réalité digitale et propulser votre entreprise vers de nouveaux sommets.</p>

                <div>
                    {/* Autres sections */}
                    <ChecklistCards/>
                    {/* Autres sections */}
                </div>
            </div>
        </div>
    )
}
