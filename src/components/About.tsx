
interface AboutProps {
    doctorInfo: {
        name: string;
        credentials: string;
        bio: string[];
        bullets: string[];
        image: string;
    };
}

export default function About({ doctorInfo }: AboutProps) {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Split */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm mx-auto">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={doctorInfo.image}
                                alt={`${doctorInfo.name} - Morwell Medical Centre`}
                                className="object-cover w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Content Split */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Doctor</h2>
                        <h3 className="text-2xl font-bold text-primary-blue mb-1">
                            {doctorInfo.name}
                        </h3>
                        <p className="text-lg text-gray-500 mb-1">General Practitioner</p>
                        <p className="text-base text-gray-400 mb-8">{doctorInfo.credentials}</p>

                        <div className="space-y-4 text-base text-gray-600 mb-8">
                            {doctorInfo.bio.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed">{paragraph}</p>
                            ))}
                        </div>

                        <p className="text-lg font-bold text-primary-blue mb-4">Areas of interest:</p>
                        <ul className="space-y-3">
                            {doctorInfo.bullets.map((bullet, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <svg className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <span className="text-gray-700 font-medium text-base">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
