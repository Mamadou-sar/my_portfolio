'use client';
import React, {useState} from 'react';
import {Briefcase, Calendar, ChevronRight, Code, ExternalLink, Globe, MapPin, Server, Smartphone} from 'lucide-react';

const ExperienceSection = () => {
    const [selectedExp, setSelectedExp] = useState(0);

    const experiences = [
        {
            id: 1,
            company: "TechCorp Solutions",
            position: "Développeur Full Stack Senior",
            period: "Jan 2022 - Présent",
            location: "Paris, France",
            type: "CDI",
            description: "Lead technique sur des projets web et mobile complexes pour des clients grands comptes.",
            responsibilities: [
                "Architecture et développement d'applications React Native cross-platform",
                "Mise en place de CI/CD avec GitLab et déploiement sur AWS",
                "Mentorat de 3 développeurs juniors",
                "Optimisation des performances (réduction de 40% du temps de chargement)"
            ],
            technologies: ["React", "React Native", "Node.js", "TypeScript", "AWS", "MongoDB", "GraphQL"],
            projectHighlight: {
                name: "Application E-commerce Mobile",
                link: "#",
                description: "Application mobile avec 100k+ téléchargements"
            },
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            company: "Digital Agency Pro",
            position: "Développeur Mobile",
            period: "Sept 2020 - Déc 2021",
            location: "Lyon, France",
            type: "CDI",
            description: "Développement d'applications mobiles natives et hybrides pour divers secteurs.",
            responsibilities: [
                "Développement d'applications iOS natives en Swift",
                "Création d'applications Android en Kotlin",
                "Intégration d'APIs RESTful et WebSocket",
                "Tests unitaires et d'intégration avec Jest"
            ],
            technologies: ["Swift", "Kotlin", "Flutter", "Firebase", "REST API", "Socket.io"],
            projectHighlight: {
                name: "App de Livraison en Temps Réel",
                link: "#",
                description: "Suivi GPS et notifications push en temps réel"
            },
            color: "from-green-500 to-teal-600"
        },
        {
            id: 3,
            company: "StartUp Innovative",
            position: "Développeur Front-End",
            period: "Jan 2019 - Août 2020",
            location: "Remote",
            type: "Freelance",
            description: "Création d'interfaces utilisateur modernes et responsive pour applications web.",
            responsibilities: [
                "Développement de SPAs avec Vue.js et Nuxt.js",
                "Design system et composants réutilisables",
                "Optimisation SEO et performance web",
                "Collaboration avec l'équipe UX/UI"
            ],
            technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "JavaScript ES6+", "Webpack"],
            projectHighlight: {
                name: "Dashboard Analytics SaaS",
                link: "#",
                description: "Interface de visualisation de données en temps réel"
            },
            color: "from-orange-500 to-red-600"
        },
        {
            id: 4,
            company: "TechCorp Solutions",
            position: "Ingénieur Backend",
            period: "Sept 2020 - Déc 2021",
            location: "Paris, France",
            type: "CDI",
            description: "Conception et développement d'APIs robustes et scalables pour des applications B2B.",
            responsibilities: [
                "Développement d'APIs RESTful et GraphQL",
                "Mise en place d'architectures microservices",
                "Optimisation des bases de données relationnelles et NoSQL",
                "Déploiement et CI/CD sur AWS"
            ],
            technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Docker", "AWS"],
            projectHighlight: {
                name: "API Billing Platform",
                link: "#",
                description: "Système de facturation automatisée pour clients SaaS"
            },
            color: "from-[#ff8008] to-[#ffc837]"
        },
        {
            id: 5,
            company: "Creative Digital Studio",
            position: "Développeur Full-Stack",
            period: "Jan 2022 - Présent",
            location: "Lyon, France",
            type: "CDI",
            description: "Développement d’applications web interactives pour des clients du secteur e-commerce.",
            responsibilities: [
                "Développement de fonctionnalités e-commerce sur Next.js",
                "Création d’APIs sécurisées avec NestJS",
                "Mise en place de tests unitaires et end-to-end",
                "Collaboration avec designers et chefs de projet"
            ],
            technologies: ["Next.js", "NestJS", "TypeScript", "GraphQL", "Prisma", "Tailwind CSS"],
            projectHighlight: {
                name: "E-commerce Marketplace",
                link: "#",
                description: "Plateforme multivendeur avec système de paiement intégré"
            },
            color: "from-[#9d50bb] to-[#6e48aa]"
        }

    ];

    const currentExp = experiences[selectedExp];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Expériences Professionnelles
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Mon parcours en développement web & mobile
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Timeline Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-4">
                            {experiences.map((exp, index) => (
                                <button
                                    key={exp.id}
                                    onClick={() => setSelectedExp(index)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                                        selectedExp === index
                                            ? 'bg-gradient-to-r ' + exp.color + ' text-white shadow-lg transform scale-105'
                                            : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                    }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg">{exp.company}</h4>
                                            <p className={`text-sm mt-1 ${selectedExp === index ? 'text-white/90' : 'text-gray-400'}`}>
                                                {exp.position}
                                            </p>
                                            <p className={`text-xs mt-2 ${selectedExp === index ? 'text-white/75' : 'text-gray-500'}`}>
                                                {exp.period}
                                            </p>
                                        </div>
                                        {selectedExp === index && (
                                            <ChevronRight className="w-5 h-5 mt-1 animate-pulse"/>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 md:p-8 shadow-2xl border border-gray-700">
                            {/* Header */}
                            <div className={`bg-gradient-to-r ${currentExp.color} p-6 rounded-xl mb-6`}>
                                <h3 className="text-3xl font-bold text-white mb-2">{currentExp.position}</h3>
                                <div className="flex flex-wrap gap-4 text-white/90">
                                    <span className="flex items-center gap-2">
                                        <Briefcase className="w-4 h-4"/>
                                        {currentExp.company}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4"/>
                                        {currentExp.period}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4"/>
                                        {currentExp.location}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-300 leading-relaxed">{currentExp.description}</p>
                            </div>

                            {/* Responsabilités */}
                            <div className="mb-6">
                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-blue-400"/>
                                    Responsabilités Clés
                                </h4>
                                <ul className="space-y-2">
                                    {currentExp.responsibilities.map((resp, idx) => (
                                        <li key={idx}
                                            className="flex items-start gap-3 text-gray-300">
                                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentExp.color} mt-2 flex-shrink-0`}></span>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="mb-6">
                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <Server className="w-5 h-5 text-green-400"/>
                                    Technologies Utilisées
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {currentExp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-gray-500 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Highlight */}
                            {currentExp.projectHighlight && (
                                <div className={`bg-gradient-to-r ${currentExp.color} p-[1px] rounded-xl`}>
                                    <div className="bg-gray-800 p-4 rounded-xl">
                                        <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                            {currentExp.position.includes('Mobile') ? (
                                                <Smartphone className="w-5 h-5"/>
                                            ) : (
                                                <Globe className="w-5 h-5"/>
                                            )}
                                            Projet Phare
                                        </h4>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-white font-medium">{currentExp.projectHighlight.name}</p>
                                                <p className="text-gray-400 text-sm mt-1">{currentExp.projectHighlight.description}</p>
                                            </div>
                                            <button className="text-white hover:text-gray-300 transition-colors">
                                                <ExternalLink className="w-5 h-5"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-2 md:p-4 text-center border border-gray-700">
                                <div className="text-3xl font-bold text-white">5+</div>
                                <div className="text-gray-400 text-sm">Années d'expérience</div>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-2 md:p-4 text-center border border-gray-700">
                                <div className="text-3xl font-bold text-white">30+</div>
                                <div className="text-gray-400 text-sm">Projets livrés</div>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-2 md:p-4 text-center border border-gray-700">
                                <div className="text-3xl font-bold text-white">15+</div>
                                <div className="text-gray-400 text-sm">Technologies maîtrisées</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;