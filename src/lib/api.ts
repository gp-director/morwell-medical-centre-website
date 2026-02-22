/**
 * Utility functions to fetch data from Headless WordPress via GraphQL.
 * 
 * For this initial build, these functions return static placeholder data.
 * Once a WordPress instance is available with WPGraphQL installed,
 * replace the placeholder returns with actual fetch calls to WORDPRESS_API_URL.
 */

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://demo.wpgraphql.com/graphql';

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
    const headers = { 'Content-Type': 'application/json' };

    if (WORDPRESS_API_URL === 'https://demo.wpgraphql.com/graphql') {
        console.warn("Using demo WPGraphQL URL. Real data fetch may fail or return unexpected data. Using fallbacks.");
    }

    try {
        const res = await fetch(WORDPRESS_API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                query,
                variables,
            }),
            next: { revalidate: 60 } // Revalidate cache every minute
        });

        const json = await res.json();
        if (json.errors) {
            console.error(json.errors);
            throw new Error('Failed to fetch API');
        }
        return json.data;
    } catch (error) {
        console.error("GraphQL Fetch Error:", error);
        return null;
    }
}

// ============================================================================
// Data Fetching Methods (with Fallbacks for Local Dev)
// ============================================================================

export async function getHeroContent() {
    // In a real WP app, this would query a specific page or custom post type
    // Example Query:
    // const data = await fetchAPI(`
    //   query GetHero {
    //     page(id: "home", idType: URI) { heroSection { title subtitle buttonText image } }
    //   }
    // `);

    // Fallback static data
    return {
        title: "Expert Medical Care in Morwell",
        subtitle: "Providing compassionate, comprehensive, and modern healthcare for you and your family.",
        primaryButton: "Book an Appointment",
        secondaryButton: "Our Services",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    };
}

export async function getServices() {
    // Fallback static data
    return [
        { id: 1, title: 'General Practice', description: 'Comprehensive health assessments, chronic disease management, and preventative care.', icon: 'bx-heart' },
        { id: 2, title: 'Immunisations', description: 'Childhood vaccinations, travel medicine, and seasonal flu shots.', icon: 'bx-injection' },
        { id: 3, title: 'Women\'s Health', description: 'Family planning, antenatal care, cervical screening, and menopause management.', icon: 'bx-female' },
        { id: 4, title: 'Men\'s Health', description: 'Prostate checks, cardiovascular screening, and general wellness exams.', icon: 'bx-male' },
        { id: 5, title: 'Paediatrics', description: 'Children\'s health checks, developmental assessments, and acute illness management.', icon: 'bx-child' },
        { id: 6, title: 'Minor Procedures', description: 'Skin lesion removals, wound care, and other surgical procedures.', icon: 'bx-band-aid' },
    ];
}

export async function getDoctorInfo() {
    return {
        name: "Dr Kasun Vithanage",
        credentials: "MBBS, FRACGP",
        bio: [
            "Dr Kasun Vithanage graduated in 2011. He completed the Australian Medical Council Exam in 2013 and commenced working in Australia as a general practitioner in 2014.",
            "Dr Vithanage worked in metropolitan and rural Victoria before he permanently moved to Gippsland in 2017. Before starting to practice in Drouin he was a busy practitioner in Yarragon.",
            "Dr Vithanage obtained his fellowship at Royal Australian College of General Practice in 2019.",
            "Dr Vithanage has completed a training in Platelet Rich Plasma (PRP) joint injection. He is providing PRP injections for patients with chronic knee/shoulder problems.",
            "Dr Vithanage enjoys teaching and has been teaching medical students and GP registrars for many years.",
            "In his free time, Dr Vithanage enjoys cricket and he has been a player for the Yarragon cricket club since 2020."
        ],
        bullets: [
            "Chronic disease management",
            "Preventive medicine",
            "Men's health",
            "Minor skin cancer procedures"
        ],
        image: "/dr-kasun-vithanage.png"
    };
}

export async function getContactInfo() {
    return {
        address: "119 George St, Morwell VIC 3840",
        phone: "(03) 5118 3229",
        fax: "(03) 5118 3266",
        email: "reception@morwellmedicalcentre.net",
        hours: [
            "Mon - Fri: 8:30 AM - 5:30 PM",
            "Saturday: 9:00 AM - 1:00 PM",
            "Sunday: Closed"
        ]
    };
}
