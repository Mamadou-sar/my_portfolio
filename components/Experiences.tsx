"use client";
import {motion} from "framer-motion";
import {Briefcase, Code} from "lucide-react";

const experiences = [
    {
        title: "Développeur Web Fullstack – Startup XYZ",
        date: "Janv. 2023 – Déc. 2023",
        tasks: [
            "Conception et développement d’une plateforme e-commerce avec Next.js et Node.js",
            "Mise en place d’API REST sécurisées et intégration de bases de données MongoDB",
            "Optimisation des performances front-end (réduction du temps de chargement de 40%)",
        ],
    },
    {
        title: "Développeur Mobile – Agence Digitale ABC",
        date: "Mai 2022 – Déc. 2022",
        tasks: [
            "Développement d’applications mobiles hybrides avec Flutter",
            "Intégration de Firebase pour l’authentification et les notifications push",
            "Collaboration avec l’équipe design pour créer une UI moderne et responsive",
        ],
    },
    {
        title: "Stage Développement Web – Entreprise DEF",
        date: "Fév. 2021 – Août 2021",
        tasks: [
            "Création de sites vitrines avec HTML, CSS et JavaScript",
            "Intégration de CMS (WordPress) et personnalisation de thèmes",
            "Participation à l’amélioration SEO et accessibilité des sites clients",
        ],
    },
    {
        title: "Développeur Backend Django – Société GHI",
        date: "Sept. 2021 – Déc. 2021",
        tasks: [
            "Développement d’un système de gestion interne avec Django",
            "Implémentation de fonctionnalités d’authentification et gestion des rôles utilisateurs",
            "Optimisation des requêtes SQL et utilisation de PostgreSQL pour de gros volumes de données",
        ],
    },
    {
        title: "Développeur API – Projet Freelance",
        date: "Mars 2022 – Avr. 2022",
        tasks: [
            "Conception d’une API RESTful avec Django REST Framework pour une application mobile",
            "Implémentation de JWT pour sécuriser l’accès aux endpoints",
            "Documentation interactive avec Swagger et tests automatisés avec Pytest",
        ],
    },
];

const projects = [
    {
        title: "Plateforme de Cours en Ligne",
        date: "Projet Personnel – 2023",
        description:
            "Développement d’une plateforme e-learning avec Django REST Framework pour le backend et React pour le frontend. Gestion des cours, des utilisateurs et des paiements en ligne.",
    },
    {
        title: "Application Mobile de Gestion de Tâches",
        date: "Projet Personnel – 2022",
        description:
            "Création d’une app mobile avec Flutter et Firebase permettant de gérer des to-do lists, notifications push et synchronisation temps réel.",
    },
];

export default function Timeline() {
    return (
        <section id="timeline"
        >
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                    Parcours & Réalisations
                </h2>

                {/* Timeline des expériences */}
                <div className="relative border-l-4 border-primary-200 pl-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: -40}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: index * 0.2}}
                            className="relative"
                        >
              <span className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 text-white shadow-lg">
                <Briefcase size={20}/>
              </span>
                            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-primary-200">
                                    {exp.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-3">{exp.date}</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    {exp.tasks.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Section Projets Personnels */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-20 mb-12 text-center">
                    Projets Personnels
                </h2>

                <div className="relative border-l-4 border-success pl-6 space-y-12">
                    {projects.map((proj, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: -40}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: index * 0.2}}
                            className="relative"
                        >
              <span className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-success text-white shadow-lg">
                <Code size={20}/>
              </span>
                            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-success">
                                    {proj.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-3">{proj.date}</p>
                                <p className="text-gray-700">{proj.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
