import TextImportant from "@/components/TextImportant";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";


export default function Home() {
    return (

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
            {/*experiences*/}
            <Experiences/>
            {/*skills*/}
            <Skills/>
        </div>

    );
}
