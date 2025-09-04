'use client'
import React from 'react';
import Link from 'next/link';
// Au lieu de useRouter de next/router
import {useRouter} from 'next/navigation';
import Head from 'next/head';

const Custom404: React.FC = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <>
            <Head>
                <title>404 - Page non trouvée</title>
                <meta name="description"
                      content="La page que vous cherchez n'existe pas."/>
                <meta name="robots"
                      content="noindex, nofollow"/>
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
                <div className="text-center">
                    {/* Animation du nombre 404 */}
                    <div className="relative mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
                            404
                        </h1>
                        <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-white opacity-10 animate-bounce">
                            404
                        </div>
                    </div>

                    {/* Message d'erreur */}
                    <div className="mb-8 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Oups ! Page non trouvée
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
                            La page que vous recherchez semble avoir disparu dans l'espace numérique.
                        </p>
                    </div>

                    {/* Illustration avec CSS */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-32 h-32">
                            {/* Planète */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-spin-slow"></div>
                            {/* Anneaux */}
                            <div className="absolute inset-0 border-4 border-blue-300 rounded-full opacity-30 animate-ping"></div>
                            <div className="absolute inset-2 border-2 border-purple-300 rounded-full opacity-50 animate-pulse"></div>
                            {/* Étoiles */}
                            <div className="absolute -top-4 -right-4 w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"></div>
                            <div className="absolute -bottom-6 -left-6 w-1 h-1 bg-blue-300 rounded-full animate-twinkle animation-delay-300"></div>
                            <div className="absolute top-8 -left-8 w-1.5 h-1.5 bg-pink-300 rounded-full animate-twinkle animation-delay-700"></div>
                        </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <Link href="/">
                            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700">
                                Retour à l&#39;accueil
                            </button>
                        </Link>

                        <button
                            onClick={handleGoBack}
                            className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transform hover:scale-105 transition-all duration-300"
                        >
                            Page précédente
                        </button>
                    </div>

                    {/* Suggestion de recherche */}
                    <div className="mt-12 p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Suggestions
                        </h3>
                        <div className="space-y-2 text-gray-300">
                            <p>• Vérifiez l&#39;URL dans la barre d&#39;adresse</p>
                            <p>• Utilisez le menu de navigation</p>
                            <p>• Contactez-nous si le problème persiste</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes twinkle {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }

                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }

                .animate-twinkle {
                    animation: twinkle 2s ease-in-out infinite;
                }

                .animation-delay-300 {
                    animation-delay: 0.3s;
                }

                .animation-delay-700 {
                    animation-delay: 0.7s;
                }
            `}</style>
        </>
    );
};

export default Custom404;