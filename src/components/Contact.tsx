"use client";
import { useState } from 'react';

interface ContactProps {
    contactInfo: {
        address: string;
        phone: string;
        email: string;
        hours: string[];
    };
}

export default function Contact({ contactInfo }: ContactProps) {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call to email/booking endpoint
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-primary-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch <br />& Book Appointment</h2>
                        <p className="text-xl text-white/80 mb-12 max-w-lg">
                            We are currently accepting new patients. Contact our friendly reception team or request an appointment online.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-white/10 p-4 rounded-full flex-shrink-0">
                                    <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Visit Us</h4>
                                    <p className="text-white/80">{contactInfo.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-white/10 p-4 rounded-full flex-shrink-0">
                                    <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Call Us</h4>
                                    <p className="text-white/80">{contactInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-white/10 p-4 rounded-full flex-shrink-0">
                                    <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Email Us</h4>
                                    <p className="text-white/80">{contactInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-white/10 p-4 rounded-full flex-shrink-0">
                                    <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Opening Hours</h4>
                                    {contactInfo.hours.map((hour, i) => (
                                        <p key={i} className="text-white/80 mb-1">{hour}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div id="booking" className="bg-white text-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
                        <h3 className="text-3xl font-bold text-center text-primary-blue mb-8">Request an Appointment</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    placeholder="04XX XXX XXX"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
                                <select
                                    id="service"
                                    required
                                    defaultValue=""
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all bg-white"
                                >
                                    <option value="" disabled>Select a Service</option>
                                    <option value="general">General Checkup</option>
                                    <option value="vaccination">Vaccination</option>
                                    <option value="prescription">Prescription Renewal</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="date" className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className={`w-full py-4 rounded-lg font-bold text-lg transition-all shadow-md transform hover:-translate-y-0.5 ${formStatus === 'success'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-primary-blue hover:bg-primary-dark text-white hover:shadow-lg'
                                    }`}
                            >
                                {formStatus === 'idle' && 'Submit Request'}
                                {formStatus === 'submitting' && 'Sending...'}
                                {formStatus === 'success' && 'Request Sent Successfully!'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
