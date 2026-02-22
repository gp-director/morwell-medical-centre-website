"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    image: string;
}

const clinicImages = [
    '/clinic_outside.png',
    '/clinic_inside.png',
];

export default function Hero({ title, subtitle, primaryButton, secondaryButton }: HeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % clinicImages.length);
                setNextIndex((prev) => (prev + 1) % clinicImages.length);
                setTransitioning(false);
            }, 1500); // fade duration
        }, 5000); // time per slide

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden"
        >
            {/* Current image */}
            <div
                className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
                style={{
                    backgroundImage: `url('${clinicImages[currentIndex]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: transitioning ? 0 : 1,
                    animation: 'kenBurns 10s ease-in-out infinite alternate',
                }}
            />

            {/* Next image (fades in underneath during transition) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url('${clinicImages[nextIndex]}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1,
                }}
            />

            {/* Overlay - Gradient Blue */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-blue/40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
                <div className="max-w-3xl hero-content">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#booking"
                            className="px-8 py-4 bg-primary-blue hover:bg-primary-dark text-white rounded-lg font-bold text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            {primaryButton}
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary-blue text-white rounded-lg font-bold text-center transition-all"
                        >
                            {secondaryButton}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {clinicImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setCurrentIndex(i); setNextIndex((i + 1) % clinicImages.length); }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </section>
    );
}
