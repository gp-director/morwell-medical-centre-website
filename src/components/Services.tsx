interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface ServicesProps {
    services: ServiceItem[];
}

export default function Services({ services }: ServicesProps) {
    return (
        <section id="services" className="py-24 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-primary-blue mb-4">Our Medical Services</h2>
                    <p className="text-xl text-gray-600">Comprehensive healthcare tailored to your needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-primary-blue group text-center"
                        >
                            {/* Icon Placeholder (In a real app, use an SVG library like Lucide) */}
                            <div className="w-20 h-20 mx-auto bg-accent-blue text-primary-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {/* Generic cross icon for medical services */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
