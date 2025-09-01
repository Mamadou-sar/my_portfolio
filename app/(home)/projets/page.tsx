'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Technology {
    name: string;
    color: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    technologies: Technology[];
    category: 'web' | 'mobile' | 'fullstack' | 'api' | 'autre';
    status: 'completed' | 'in-progress' | 'planned';
    githubUrl?: string;
    liveUrl?: string;
    features?: string[];
    year: number;
    duration?: string;
}

interface ProjectsProps {
    projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({
    projects = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description:
                'Plateforme e-commerce complète avec système de paiement intégré et dashboard admin.',
            longDescription:
                'Application web complète de commerce électronique avec gestion des produits, panier, paiements sécurisés via Stripe, tableau de bord administrateur et analytics en temps réel.',
            image: '/project1.jpg',
            technologies: [
                { name: 'Next.js', color: 'bg-black' },
                { name: 'TypeScript', color: 'bg-blue-600' },
                { name: 'Prisma', color: 'bg-teal-600' },
                { name: 'Tailwind', color: 'bg-cyan-500' },
            ],
            category: 'fullstack',
            status: 'completed',
            githubUrl: 'https://github.com/username/ecommerce',
            liveUrl: 'https://myecommerce.vercel.app',
            features: ['Authentification JWT', 'Paiements Stripe', 'Dashboard Admin', 'API REST'],
            year: 2024,
            duration: '3 mois',
        },
        {
            id: '2',
            title: 'TaskMaster Mobile',
            description:
                'Application mobile de gestion de tâches avec synchronisation cloud et notifications.',
            longDescription:
                "Application mobile cross-platform développée avec React Native, permettant la gestion avancée de tâches avec synchronisation temps réel, notifications push et collaboration d'équipe.",
            image: '/project2.jpg',
            technologies: [
                { name: 'React Native', color: 'bg-blue-500' },
                { name: 'Firebase', color: 'bg-orange-500' },
                { name: 'Redux', color: 'bg-purple-600' },
                { name: 'Expo', color: 'bg-gray-800' },
            ],
            category: 'mobile',
            status: 'completed',
            githubUrl: 'https://github.com/username/taskmaster',
            features: ['Notifications Push', 'Mode Hors-ligne', 'Collaboration', 'Analytics'],
            year: 2023,
            duration: '4 mois',
        },
        {
            id: '3',
            title: 'AI Content Generator',
            description: "Générateur de contenu basé sur l'IA pour les créateurs et marketeurs.",
            longDescription:
                "Plateforme web utilisant l'API OpenAI pour générer du contenu marketing, articles de blog et posts réseaux sociaux avec interface intuitive et système de templates.",
            image: '/project3.jpg',
            technologies: [
                { name: 'Vue.js', color: 'bg-green-500' },
                { name: 'Python', color: 'bg-yellow-500' },
                { name: 'OpenAI', color: 'bg-gray-700' },
                { name: 'MongoDB', color: 'bg-green-600' },
            ],
            category: 'web',
            status: 'in-progress',
            githubUrl: 'https://github.com/username/ai-content',
            features: ['Génération IA', 'Templates', 'Export Multi-format', 'API Integration'],
            year: 2024,
            duration: '2 mois',
        },
        {
            id: '4',
            title: 'Weather Analytics API',
            description:
                'API REST pour données météorologiques avec prédictions et analytics avancées.',
            longDescription:
                'API robuste développée avec Node.js et Express, intégrant plusieurs sources de données météo avec machine learning pour des prédictions précises et dashboard de visualisation.',
            image: '/project4.jpg',
            technologies: [
                { name: 'Node.js', color: 'bg-green-500' },
                { name: 'Express', color: 'bg-gray-600' },
                { name: 'PostgreSQL', color: 'bg-blue-700' },
                { name: 'Docker', color: 'bg-blue-600' },
            ],
            category: 'api',
            status: 'completed',
            githubUrl: 'https://github.com/username/weather-api',
            liveUrl: 'https://weather-api.herokuapp.com',
            features: ['ML Predictions', 'Rate Limiting', 'Caching Redis', 'Documentation API'],
            year: 2023,
            duration: '2 mois',
        },
        {
            id: '5',
            title: 'E-Learning Platform',
            description:
                'Plateforme d’apprentissage en ligne avec gestion des cours et suivi des étudiants.',
            longDescription:
                'Développée avec Next.js et NestJS, la plateforme permet aux formateurs de créer des cours interactifs et aux étudiants de suivre leur progression avec quiz, certificats et notifications temps réel.',
            image: '/project5.jpg',
            technologies: [
                { name: 'Next.js', color: 'bg-black' },
                { name: 'NestJS', color: 'bg-red-600' },
                { name: 'TypeScript', color: 'bg-blue-500' },
                { name: 'MongoDB', color: 'bg-green-700' },
            ],
            category: 'web',
            status: 'completed',
            githubUrl: 'https://github.com/username/elearning-platform',
            liveUrl: 'https://elearning-demo.vercel.app',
            features: ['Quiz', 'Certificats PDF', 'Progress Tracking', 'Notifications temps réel'],
            year: 2024,
            duration: '3 mois',
        },
        {
            id: '6',
            title: 'Food Delivery Mobile App',
            description:
                'Application mobile pour la commande et la livraison de repas avec suivi en temps réel.',
            longDescription:
                'Application mobile cross-platform développée avec React Native et Firebase, intégrant géolocalisation, notifications push et système de paiement sécurisé.',
            image: '/project6.jpg',
            technologies: [
                { name: 'React Native', color: 'bg-blue-400' },
                { name: 'Firebase', color: 'bg-yellow-500' },
                { name: 'Stripe', color: 'bg-purple-600' },
            ],
            category: 'mobile',
            status: 'in-progress',
            githubUrl: 'https://github.com/username/food-delivery-app',
            liveUrl: 'https://expo.dev/@username/food-delivery',
            features: [
                'Suivi en temps réel',
                'Paiement sécurisé',
                'Push Notifications',
                'Cartes de fidélité',
            ],
            year: 2024,
            duration: '4 mois',
        },
        {
            id: '7',
            title: 'Crypto Dashboard',
            description:
                'Dashboard interactif pour visualiser et analyser les données du marché des cryptomonnaies.',
            longDescription:
                'Interface moderne construite avec React et Tailwind, connectée à plusieurs APIs (CoinGecko, Binance) pour offrir des graphiques dynamiques, alertes et favoris.',
            image: '/project7.jpg',
            technologies: [
                { name: 'React', color: 'bg-blue-500' },
                { name: 'TailwindCSS', color: 'bg-sky-400' },
                { name: 'Chart.js', color: 'bg-pink-500' },
                { name: 'Vercel', color: 'bg-gray-800' },
            ],
            category: 'web',
            status: 'completed',
            githubUrl: 'https://github.com/username/crypto-dashboard',
            liveUrl: 'https://crypto-dashboard.vercel.app',
            features: ['Graphiques dynamiques', 'Alertes personnalisées', 'Favoris', 'Mode sombre'],
            year: 2023,
            duration: '1 mois',
        },
        {
            id: '8',
            title: 'AI Chatbot Support',
            description:
                'Chatbot intelligent pour support client avec NLP et intégration multi-canaux.',
            longDescription:
                'Solution de support automatisé basée sur Python et TensorFlow, capable de comprendre les requêtes des clients et de s’intégrer avec WhatsApp, Messenger et un widget web.',
            image: '/project8.jpg',
            technologies: [
                { name: 'Python', color: 'bg-yellow-600' },
                { name: 'TensorFlow', color: 'bg-orange-500' },
                { name: 'FastAPI', color: 'bg-teal-600' },
                { name: 'Docker', color: 'bg-blue-600' },
            ],
            category: 'ai',
            status: 'completed',
            githubUrl: 'https://github.com/username/ai-chatbot',
            liveUrl: 'https://ai-chatbot-demo.herokuapp.com',
            features: ['NLP avancé', 'Support multi-canaux', 'Analytics', 'FAQ dynamique'],
            year: 2022,
            duration: '5 mois',
        },
        {
            id: '9',
            title: 'Smart Home IoT App',
            description:
                'Application pour contrôler et automatiser des objets connectés dans la maison.',
            longDescription:
                'Développement d’une application mobile et backend IoT pour gérer lumières, capteurs et appareils via MQTT et une interface intuitive avec scénarios automatisés.',
            image: '/project9.jpg',
            technologies: [
                { name: 'Flutter', color: 'bg-blue-400' },
                { name: 'MQTT', color: 'bg-green-600' },
                { name: 'Node.js', color: 'bg-green-500' },
                { name: 'AWS IoT', color: 'bg-orange-600' },
            ],
            category: 'iot',
            status: 'in-progress',
            githubUrl: 'https://github.com/username/smart-home-iot',
            liveUrl: 'https://smart-home-demo.vercel.app',
            features: [
                'Automatisations',
                'Contrôle vocal',
                'Dashboard temps réel',
                'Notifications',
            ],
            year: 2024,
            duration: '6 mois',
        },
    ],
}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = [
        { id: 'all', label: 'Tous', icon: '🚀' },
        { id: 'web', label: 'Web', icon: '🌐' },
        { id: 'mobile', label: 'Mobile', icon: '📱' },
        { id: 'fullstack', label: 'Full-Stack', icon: '⚡' },
        { id: 'api', label: 'API', icon: '🔗' },
        { id: 'autre', label: 'Autre', icon: '✨' },
    ];

    const statusColors = {
        completed: 'bg-green-100 text-green-800 border-green-300',
        'in-progress': 'bg-yellow-100 text-yellow-800 border-yellow-300',
        planned: 'bg-gray-100 text-gray-800 border-gray-300',
    };

    const statusLabels = {
        completed: 'Terminé',
        'in-progress': 'En cours',
        planned: 'Planifié',
    };

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <>
            <section className='py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300'>
                <div className='max-w-7xl mx-auto'>
                    {/* Header */}
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                            Mes Projets
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full'></div>
                        <p className='text-xl text-gray-600 dark:text-gray-300 mt-8'>
                            Découvrez mes réalisations en développement web et mobile
                        </p>
                    </div>

                    {/* Filtres par catégorie */}
                    <div className='flex flex-wrap justify-center gap-4 mb-12'>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                                    selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                <span className='mr-2'>{category.icon}</span>
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Grille des projets */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className='group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700'
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Image du projet */}
                                <div className='relative h-48 overflow-hidden'>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        <div className='absolute bottom-4 left-4 right-4 flex gap-2'>
                                            {project.githubUrl && (
                                                <Link
                                                    href={project.githubUrl}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg
                                                        className='w-5 h-5'
                                                        fill='currentColor'
                                                        viewBox='0 0 20 20'
                                                    >
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                                                            clipRule='evenodd'
                                                        />
                                                    </svg>
                                                </Link>
                                            )}
                                            {project.liveUrl && (
                                                <Link
                                                    href={project.liveUrl}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg
                                                        className='w-5 h-5'
                                                        fill='none'
                                                        stroke='currentColor'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                            strokeWidth={2}
                                                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                                        />
                                                    </svg>
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Status badge */}
                                    <div
                                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${
                                            statusColors[project.status]
                                        }`}
                                    >
                                        {statusLabels[project.status]}
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className='p-6'>
                                    <div className='flex items-start justify-between mb-3'>
                                        <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                            {project.title}
                                        </h3>
                                        <span className='text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded'>
                                            {project.year}
                                        </span>
                                    </div>

                                    <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className={`${tech.color} text-white text-xs px-3 py-1 rounded-full font-medium`}
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className='bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full font-medium'>
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Durée */}
                                    {project.duration && (
                                        <div className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
                                            ⏱️ Durée: {project.duration}
                                        </div>
                                    )}

                                    {/* Bouton voir plus */}
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300'
                                    >
                                        Voir les détails
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className='text-center py-12'>
                            <div className='text-6xl mb-4'>🔍</div>
                            <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                                Aucun projet trouvé
                            </h3>
                            <p className='text-gray-600 dark:text-gray-300'>
                                Essayez de changer de catégorie ou revenez plus tard !
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal de détails du projet */}
            {selectedProject && (
                <div
                    className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className='bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='relative'>
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                width={800}
                                height={400}
                                className='w-full h-64 object-cover rounded-t-2xl'
                            />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors'
                            >
                                <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className='p-8'>
                            <div className='flex items-start justify-between mb-6'>
                                <div>
                                    <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                                        {selectedProject.title}
                                    </h3>
                                    <div className='flex items-center gap-4'>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium border ${
                                                statusColors[selectedProject.status]
                                            }`}
                                        >
                                            {statusLabels[selectedProject.status]}
                                        </span>
                                        <span className='text-gray-500 dark:text-gray-400'>
                                            {selectedProject.year}
                                        </span>
                                        {selectedProject.duration && (
                                            <span className='text-gray-500 dark:text-gray-400'>
                                                • {selectedProject.duration}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    {selectedProject.githubUrl && (
                                        <Link
                                            href={selectedProject.githubUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2'
                                        >
                                            <svg
                                                className='w-5 h-5'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                            GitHub
                                        </Link>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <Link
                                            href={selectedProject.liveUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2'
                                        >
                                            <svg
                                                className='w-5 h-5'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                                />
                                            </svg>
                                            Voir le site
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className='grid md:grid-cols-3 gap-8'>
                                <div className='md:col-span-2'>
                                    <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                                        Description détaillée
                                    </h4>
                                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
                                        {selectedProject.longDescription ||
                                            selectedProject.description}
                                    </p>

                                    {selectedProject.features &&
                                        selectedProject.features.length > 0 && (
                                            <>
                                                <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                                                    Fonctionnalités principales
                                                </h4>
                                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                                    {selectedProject.features.map(
                                                        (feature, index) => (
                                                            <div
                                                                key={index}
                                                                className='flex items-center text-gray-600 dark:text-gray-300'
                                                            >
                                                                <svg
                                                                    className='w-5 h-5 text-green-500 mr-3 flex-shrink-0'
                                                                    fill='currentColor'
                                                                    viewBox='0 0 20 20'
                                                                >
                                                                    <path
                                                                        fillRule='evenodd'
                                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                                        clipRule='evenodd'
                                                                    />
                                                                </svg>
                                                                {feature}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </>
                                        )}
                                </div>

                                <div>
                                    <h4 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                                        Technologies utilisées
                                    </h4>
                                    <div className='space-y-3'>
                                        {selectedProject.technologies.map((tech, index) => (
                                            <div key={index} className='flex items-center'>
                                                <div
                                                    className={`w-4 h-4 rounded ${tech.color} mr-3`}
                                                ></div>
                                                <span className='text-gray-700 dark:text-gray-300 font-medium'>
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;
