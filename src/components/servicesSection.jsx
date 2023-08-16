import { services } from "../assets/data";

function Services() {
    return (
        <>
            <section>
                <h2>Our Services</h2>
                <div className="services-container">
                    {services?.map(item => {
                        return <div className="service-card" key={item.id}>
                            <h3>{item.name}</h3>
                            <picture>
                                <source media="(max-width: 799px)" srcSet={item.image_mobile} />
                                <source media="(min-width: 800px)" srcSet={item.image_large} />
                                <div><img src={item.image_large} alt={item.imgAlt} /></div>
                            </picture>

                            <div>
                                <p>{item.description}</p>
                                <button>View plans</button>
                            </div>
                        </div>

                    })}
                </div>
            </section >
        </>
    )
}


export default Services;