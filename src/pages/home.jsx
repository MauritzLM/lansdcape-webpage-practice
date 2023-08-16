import Hero from "../components/heroSection";
import Services from "../components/servicesSection";
import Projects from "../components/projectsSection";
import ContactUs from "../components/contactUs";

function HomePage() {
    return (
        <>
            <Hero />
            <main>
                <Services />
                <Projects />
                <ContactUs />
            </main>
        </>
    )
}

export default HomePage;