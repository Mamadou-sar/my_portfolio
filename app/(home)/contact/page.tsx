'use client';
import React, {useState} from 'react';
import {AlertCircle, CheckCircle, Mail, MapPin, Phone, Send} from 'lucide-react';
import {FaFacebookF, FaGithub, FaInstagram, FaXTwitter} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const ContactComponent: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est requis';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Le sujet est requis';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Le message est requis';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Le message doit contenir au moins 10 caractères';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulation d'un appel API
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Ici vous pouvez remplacer par votre logique d'envoi d'email
            console.log('Form data:', formData);

            setSubmitStatus('success');
            setFormData({name: '', email: '', subject: '', message: ''});

            // Reset success status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Travaillons Ensemble
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Vous avez un projet en tête ? Une idée d&#39;application mobile ou web ?
                        N&#39;hésitez pas à me contacter pour discuter de vos besoins.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Informations de Contact
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors">
                                        <Mail className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Email</p>
                                        <a href="mailto:dev@exemple.com"
                                           className="text-white hover:text-purple-300 transition-colors font-medium">
                                            dev@exemple.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors">
                                        <Phone className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Téléphone</p>
                                        <a href="tel:+33123456789"
                                           className="text-white hover:text-purple-300 transition-colors font-medium">
                                            +33 1 23 45 67 89
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors">
                                        <MapPin className="w-6 h-6 text-white"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Localisation</p>
                                        <p className="text-white font-medium">Paris, France</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Mes Réseaux
                            </h3>

                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com"
                                    className="p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="w-8 h-8 text-white group-hover:text-purple-300"/>
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    className="p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="w-8 h-8 text-white group-hover:text-purple-300"/>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    className="p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaXTwitter className="w-8 h-8 text-white group-hover:text-purple-300"/>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    className="p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF className="w-8 h-8 text-white group-hover:text-purple-300"/>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    className="p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="w-8 h-8 text-white group-hover:text-purple-300"/>
                                </a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-green-400/30">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <p className="text-green-300 font-medium">Disponible pour de nouveaux projets</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Envoyez-moi un Message
                        </h3>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0"/>
                                <p className="text-green-300">Message envoyé avec succès ! Je vous répondrai
                                    rapidement.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg flex items-center space-x-3">
                                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0"/>
                                <p className="text-red-300">Erreur lors de l&#39;envoi. Veuillez réessayer.</p>
                            </div>
                        )}

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name"
                                           className="block text-sm font-medium text-gray-300 mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white/10 border ${
                                            errors.name ? 'border-red-400' : 'border-white/30'
                                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all`}
                                        placeholder="Votre nom"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white/10 border ${
                                            errors.email ? 'border-red-400' : 'border-white/30'
                                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all`}
                                        placeholder="votre@email.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject"
                                       className="block text-sm font-medium text-gray-300 mb-2">
                                    Sujet *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 bg-white/10 border ${
                                        errors.subject ? 'border-red-400' : 'border-white/30'
                                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all`}
                                    placeholder="Développement d'application mobile..."
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message"
                                       className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className={`w-full px-4 py-3 bg-white/10 border ${
                                        errors.message ? 'border-red-400' : 'border-white/30'
                                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none`}
                                    placeholder="Décrivez votre projet en détail..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                )}
                            </div>

                            <button
                                onClick={handleSubmit}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-2xl text-lg"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Envoi en cours...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5"/>
                                        <span>Envoyer le Message</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;