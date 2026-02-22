import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Headless WP API methods
import { getHeroContent, getServices, getDoctorInfo, getContactInfo } from '@/lib/api';

export default async function Home() {
    // Fetch data in parallel for performance
    const [heroContent, services, doctorInfo, contactInfo] = await Promise.all([
        getHeroContent(),
        getServices(),
        getDoctorInfo(),
        getContactInfo()
    ]);

    return (
        <main className="min-h-screen">
            <Navbar />

            {heroContent && (
                <Hero
                    title={heroContent.title}
                    subtitle={heroContent.subtitle}
                    primaryButton={heroContent.primaryButton}
                    secondaryButton={heroContent.secondaryButton}
                    image={heroContent.image}
                />
            )}

            {services && <Services services={services} />}

            {doctorInfo && <About doctorInfo={doctorInfo} />}

            {contactInfo && <Contact contactInfo={contactInfo} />}

            <Footer />
        </main>
    );
}
