import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Stats from "./sections/Stats"
import DashboardPreview from "./sections/DashboardPreview"
import Features from "./sections/Features"
import HowItWorks from "./sections/HowItWorks"

export default function LandingPage() {
    return (
        <>
        <nav>
            <Header/>
        </nav>
        <div>
            <Hero/>
            <Stats/>
            <DashboardPreview/>
            <Features/>
            <HowItWorks/>
        </div>
        </>
    )
} 