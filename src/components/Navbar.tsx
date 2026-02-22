"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-primary-blue font-bold text-xl md:text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                        </svg>
                        Morwell Medical
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#home" className="text-gray-700 font-medium hover:text-primary-blue transition-colors">Home</Link>
                        <Link href="#services" className="text-gray-700 font-medium hover:text-primary-blue transition-colors">Services</Link>
                        <Link href="#about" className="text-gray-700 font-medium hover:text-primary-blue transition-colors">About</Link>
                        <Link href="#contact" className="text-gray-700 font-medium hover:text-primary-blue transition-colors">Contact</Link>
                        <Link href="#booking" className="bg-primary-blue hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-primary-blue focus:outline-none p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}>
                <div className="flex flex-col px-6 py-4 space-y-4">
                    <Link href="#home" onClick={closeMenu} className="text-gray-700 font-medium text-lg border-b border-gray-50 pb-2">Home</Link>
                    <Link href="#services" onClick={closeMenu} className="text-gray-700 font-medium text-lg border-b border-gray-50 pb-2">Services</Link>
                    <Link href="#about" onClick={closeMenu} className="text-gray-700 font-medium text-lg border-b border-gray-50 pb-2">About</Link>
                    <Link href="#contact" onClick={closeMenu} className="text-gray-700 font-medium text-lg border-b border-gray-50 pb-2">Contact</Link>
                    <Link href="#booking" onClick={closeMenu} className="bg-primary-blue text-center text-white px-6 py-3 rounded-lg font-semibold mt-2">
                        Book Appointment
                    </Link>
                </div>
            </div>
        </nav>
    );
}
