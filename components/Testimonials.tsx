'use client';
import React, {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Quote, Star} from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Marie Dubois",
        role: "CEO",
        company: "TechStart",
        content: "Cette solution a révolutionné notre façon de travailler. L'équipe est exceptionnelle et le support client incomparable.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Pierre Martin",
        role: "Directeur Marketing",
        company: "InnovateCorp",
        content: "Résultats impressionnants dès la première semaine. Je recommande vivement cette approche innovante.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Sophie Leroy",
        role: "Fondatrice",
        company: "CreativeStudio",
        content: "Un service qui dépasse toutes nos attentes. L'attention aux détails et la qualité sont remarquables.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        name: "Thomas Bernard",
        role: "CTO",
        company: "DataFlow",
        content: "Implementation fluide et résultats mesurables immédiatement. Une équipe technique de premier plan.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 5,
        name: "Camille Rousseau",
        role: "Product Manager",
        company: "NextGen",
        content: "L'impact sur notre productivité a été spectaculaire. Un investissement qui en vaut vraiment la peine.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
];

const StarRating: React.FC<{ rating: number }> = ({rating}) => {
    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-5 h-5 ${
                        star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                />
            ))}
        </div>
    );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; isActive: boolean }> = ({
                                                                                        testimonial,
                                                                                        isActive
                                                                                    }) => {
    return (
        <div className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 transform ${
            isActive
                ? 'border-blue-500 scale-105 shadow-2xl'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
        }`}>
            <div className="flex items-start space-x-4">
                <Quote className="text-blue-500 w-8 h-8 flex-shrink-0 mt-1"/>
                <div className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full object-cover border-3 border-blue-100"
                            />
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                <p className="text-blue-600 font-medium">{testimonial.role}</p>
                                <p className="text-gray-500 text-sm">{testimonial.company}</p>
                            </div>
                        </div>
                        <StarRating rating={testimonial.rating}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex(currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Ce que disent nos clients
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez les témoignages authentiques de nos clients satisfaits qui ont transformé
                        leur business grâce à nos solutions.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center space-x-4 mb-8">
                    <button
                        onClick={goToPrevious}
                        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-gray-200 hover:border-blue-500"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600"/>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex space-x-2">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-blue-600 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goToNext}
                        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-gray-200 hover:border-blue-500"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600"/>
                    </button>
                </div>

                {/* Testimonial Cards Container */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <div key={testimonial.id}
                                 className="w-full flex-shrink-0 px-4">
                                <div className="max-w-4xl mx-auto">
                                    <TestimonialCard
                                        testimonial={testimonial}
                                        isActive={index === currentIndex}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistics */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-gray-600">Clients Satisfaits</div>
                    </div>
                    <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">Note Moyenne</div>
                    </div>
                    <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                        <div className="text-gray-600">Taux de Recommandation</div>
                    </div>
                </div>

                {/* Auto-play Toggle */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
                    >
                        {isAutoPlaying ? 'Arrêter le défilement automatique' : 'Reprendre le défilement automatique'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;