import Link from "next/link";
import HareKrishnaLanding from "./content";

export const metadata = {
    title: "Hare Krishna Township | Premium Plots on Yamuna Expressway Near Jewar Airport",
    description: "Invest in Hare Krishna Township - A 80-Bigha residential township offering 100-400 Sq. Yard plots. Prime location near Noida International Airport, Film City & Patanjali Food Park. Secure your plot today!",
    keywords: [
        "Hare Krishna Township",
        "Plots in Jewar",
        "Yamuna Expressway Plots",
        "Residential Plots Jewar Airport",
        "Land for sale Noida",
        "Jewar Airport Property",
        "Investment Plots Yamuna Expressway"
    ],
    openGraph: {
        title: "Hare Krishna Township | Plots Near Jewar Airport",
        description: "Secure your future with premium plots at Hare Krishna Township on Yamuna Expressway. High ROI potential.",
        url: 'https://jewarproperty.in/hare-krishna-township',
        siteName: 'Properties Insight',
        images: [
            {
                url: 'https://jewarproperty.in/hare-krishna-township-phase2/images/gallery/1.jpg', // Using a likely realistic path or generic
                width: 1200,
                height: 630,
                alt: 'Hare Krishna Township Overview',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    alternates: {
        canonical: 'https://jewarproperty.in/hare-krishna-township',
    },
};

export default function Page() {
    return <HareKrishnaLanding />;
}