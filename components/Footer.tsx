'use client';
import React from 'react';
import {ArrowUp, Code, Heart, Mail, MapPin, Monitor, Phone, Smartphone} from 'lucide-react';
import {FaFacebookF, FaGithub, FaInstagram, FaXTwitter} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa";
import {AiOutlineCloudDownload} from "react-icons/ai";

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({className = ''}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/votrenom',
            color: 'hover:text-gray-300'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedinIn,
            url: 'https://linkedin.com/in/votrenom',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Twitter',
            icon: FaXTwitter,
            url: 'https://twitter.com/votrenom',
            color: 'hover:text-black'
        }, {
            name: 'Facebook',
            icon: FaFacebookF,
            url: 'https://twitter.com/votrenom',
            color: 'hover:text-blue-600'
        }, {
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://twitter.com/votrenom',
            color: 'hover:text-orange-400'
        }
    ];

    const services = [
        {
            title: 'Développement Web',
            items: ['React & Next.js', 'Django', 'Node.js', 'API REST']
        },
        {
            title: 'Développement Mobile',
            items: ['React Native', 'Flutter', 'iOS & Android', 'Applications hybrides']
        }
    ];

    const quickLinks = [
        {name: 'À propos', href: '/a-propos'},
        {name: 'Projets', href: '/projets'},
        {name: 'Compétences', href: '/'},
        {name: 'Contact', href: '/contact'}
    ];

    return (
        <footer className={`relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white ${className}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0"
                     style={{
                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                     }}/>
            </div>

            <div className="relative">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                                    <Code className="w-6 h-6 text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    DevPortfolio
                                </h3>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Développeur passionné spécialisé dans la création d'applications web et mobile
                                innovantes avec les dernières technologies.
                            </p>

                            {/* Tech Icons */}
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-blue-600/20 rounded-lg border border-blue-600/30">
                                    <Monitor className="w-5 h-5 text-blue-400"/>
                                </div>
                                <div className="p-2 bg-green-600/20 rounded-lg border border-green-600/30">
                                    <Smartphone className="w-5 h-5 text-green-400"/>
                                </div>
                                <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-600/30">
                                    <Code className="w-5 h-5 text-purple-400"/>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color} group`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5"/>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg font-semibold mb-6 text-white">
                                Services
                            </h4>
                            <div className="space-y-6">
                                {services.map((service, index) => (
                                    <div key={index}>
                                        <h5 className="font-medium text-purple-300 mb-3">
                                            {service.title}
                                        </h5>
                                        <ul className="space-y-2">
                                            {service.items.map((item, itemIndex) => (
                                                <li key={itemIndex}
                                                    className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg font-semibold mb-6 text-white">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                        >
                                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Download CV */}
                            <div className="mt-8">
                                <a
                                    href='/files/CV_Mamadou_SARR.pdf'
                                    download
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                                >
                                    <span>Télécharger CV</span>
                                    <AiOutlineCloudDownload className="w-4 h-4"/>
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <h4 className="text-lg font-semibold mb-6 text-white">
                                Contact
                            </h4>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-gray-400">
                                    <Mail className="w-5 h-5 text-purple-400 flex-shrink-0"/>
                                    <a href="mailto:dev@exemple.com"
                                       className="hover:text-white transition-colors text-sm">
                                        dev@exemple.com
                                    </a>
                                </div>

                                <div className="flex items-center space-x-3 text-gray-400">
                                    <Phone className="w-5 h-5 text-purple-400 flex-shrink-0"/>
                                    <a href="tel:+33123456789"
                                       className="hover:text-white transition-colors text-sm">
                                        +33 1 23 45 67 89
                                    </a>
                                </div>

                                <div className="flex items-center space-x-3 text-gray-400">
                                    <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0"/>
                                    <span className="text-sm">Paris, France</span>
                                </div>
                            </div>

                            {/* Availability Status */}
                            <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-400/30">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-green-300 text-sm font-medium">
                    Disponible pour missions
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                            {/* Copyright */}
                            <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                <span>© {currentYear} DevPortfolio. Fait avec</span>
                                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse"/>
                                <span>et beaucoup de café ☕</span>
                            </div>

                            {/* Back to Top */}
                            <button
                                onClick={scrollToTop}
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group"
                                aria-label="Retour en haut"
                            >
                                <span className="text-sm">Retour en haut</span>
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-purple-600 transition-all">
                                    <ArrowUp className="w-4 h-4"/>
                                </div>
                            </button>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-4 pt-4 border-t border-gray-800/50">
                            <p className="text-center text-xs text-gray-500">
                                Développé avec Next.js, TypeScript, Tailwind CSS et déployé sur Vercel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;