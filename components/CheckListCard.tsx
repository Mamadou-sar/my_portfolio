// ChecklistCards.jsx
import React from 'react';

const sections = [
    {
        title: '🧱 Architecture',
        description: 'Structure modulaire, scalable et maintenable.',
        items: [
            'Structure en modules fonctionnels',
            'Séparation frontend / backend',
            'Architecture scalable (T3 / MVC / Hexagonal)',
            'Nommage clair et lisible',
        ],
    },
    {
        title: '⚙️ Backend',
        description: 'API performantes et logiques métier robustes.',
        items: [
            'API type-safe (tRPC)',
            'Prisma ORM avec migrations / Django',
            'Base de données relationnelle (PostgreSQL)',
            'Gestion des erreurs centralisée',
            'Tests unitaires et d\'intégration',
        ],
    },
    {
        title: '🎨 Frontend',
        description: 'UI/UX rapide, responsive et accessible.',
        items: [
            'Composants réutilisables (React)',
            'Tailwind CSS avec design system',
            'Lazy loading & code splitting',
            'Gestion d’état (Zustand / React Query )',
        ],
    },
    {
        title: '🔐 Sécurité',
        description: 'Protection complète contre les failles courantes.',
        items: [
            'Authentification sécurisée (JWT / OAuth)',
            'Protection CSRF, XSS, injections',
            'Headers de sécurité & .env',
            'Gestion des rôles (RBAC)',
        ],
    },
    {
        title: '🚀 Performance',
        description: 'Optimisation continue pour une app rapide et fluide.',
        items: [
            'Analyse Lighthouse > 90%',
            'Compression gzip/brotli activée',
            'Requêtes API optimisées',
            'Caching (SWR, Redis…)',
        ],
    },
    {
        title: '🔁 CI/CD & DevOps',
        description: 'Automatisation et déploiement sans friction.',
        items: [
            'GitHub Actions avec lint, test, build',
            'Déploiement sur Vercel / Railway',
            'Environnements séparés (dev/staging/prod)',
            'Monitoring et alertes',
        ],
    },
    {
        title: '📊 Observabilité',
        description: 'Suivi complet des erreurs et comportements utilisateurs.',
        items: [
            'Sentry / Logtail pour les erreurs',
            'Google Analytics ou Plausible',
            'Hotjar pour feedback UX',
            'Alertes uptime (BetterUptime)',
        ],
    },
];

const ChecklistCards = () => {
    return (
        <section className="py-12  dark:bg-gray-900">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sections.map((section, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition rounded-lg p-6 border border-gray-200 dark:border-gray-700 w-full"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {section.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            {section.description}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1">
                            {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChecklistCards;
