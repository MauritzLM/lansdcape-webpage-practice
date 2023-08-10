import Hero from "../components/heroSection";
import Services from "../components/servicesSection";
import Projects from "../components/projectsSection";
import ContactUs from "../components/contactUs";

function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <ContactUs />
        </>
    )
}

export default HomePage;