import TextImportant from "@/components/TextImportant";
import ChecklistCards from "@/components/CheckListCard";

export default function Home() {
    return (
        <div>
            <div className='max-w-7xl mx-auto p-4 mt-12'>
                <h1 className='text-black/70 text-xl md:text-2xl font-semibold'>Chez MASdev, nous créons des solutions
                    digitales
                    sur mesure,
                    alliant <TextImportant text='performance
                    technique et stratégie marketing'/>, pour générer des résultats concrets. Grâce à
                    des <TextImportant text='interfaces
                    optimisées'/>, des <TextImportant text='backends robustes'/> et des parcours utilisateurs pensés
                    pour la
                    conversion, nous vous
                    aidons à toucher le bon public, à développer votre activité et à <TextImportant text='maximiser votre retour sur
                    investissement'/>.</h1>
                <div className='text-black w-full md:w-3xl h-16 md:h-16 bg-primary-50 blur-[75px] mx-auto opacity-40'>
                </div>

                <div className='z-20 flex flex-col items-center justify-center'>
                    <h2 className='text-4xl font-semibold my-8'>Ce que nous offrons</h2>
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
        </div>
    );
}
