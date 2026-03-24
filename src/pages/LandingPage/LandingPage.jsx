import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Stats from "./sections/Stats"
import DashboardPreview from "./sections/DashboardPreview"

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
            </div>
        </>
    )
} 