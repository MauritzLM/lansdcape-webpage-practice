import Navbar from "../components/navbar";
import Products from "../components/productsSection";
import { designProducts, maintenanceProducts } from "../assets/data";


function ServicesPage() {
    return (
        <>
            <Navbar />
            <section>
                <h1>Welcome to our service page</h1>
                <p>Here you will find our service followed by our FAQ</p>
            </section>

            <section className="design-section">
                <Products service={"design"} products={designProducts} />
            </section>

            <section className="maintenance-section">
                <Products service={"maintenance"} products={maintenanceProducts} />
            </section>
        </>
    )
}

export default ServicesPage;