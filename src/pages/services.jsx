import Navbar from "../components/navbar";
import Products from "../components/productsSection";
import Faq from "../components/faqSection";
import Footer from "../components/footer";
// import data
import { designProducts, maintenanceProducts, faq } from "../assets/data";



function ServicesPage() {
    return (
        <>
            <Navbar currentPage={'services'} />
            <section className="services-info">
                <h1>Welcome to our services page</h1>
                <p>Here you will find the services we offer followed by our FAQ</p>
            </section>

            <section className="design-section">
                <Products service={"design"} products={designProducts} />
            </section>

            <section className="maintenance-section">
                <Products service={"maintenance"} products={maintenanceProducts} />
            </section>

            <section className="faq-section">
                <Faq faq={faq} />
            </section>

            <Footer />
        </>
    )
}

export default ServicesPage;