import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import Audience from "../components/sections/Audience";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import "../styles/landing.css";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <Problem />
            <Features />
            <HowItWorks />
            <Audience />
            <CTA />
            <Footer />
        </>
    );
}
