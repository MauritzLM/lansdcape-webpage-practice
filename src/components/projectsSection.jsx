// create a project card for each project
import { projects } from "../assets/data";

function Projects() {
    return (
        <>
            <section>
                <h3>Previous Projects</h3>
                <div className="projects-container">
                    {projects?.map(item => {
                        return <div className="project-card" key={item.id}>
                            <picture>
                                <source media="(max-width: 799px)" srcSet={item.image} />
                                <source media="(min-width: 800px)" srcSet={item.image} />
                                <img src={item.image} alt={item.imgAlt} />
                            </picture>

                            <h4>{item.title}</h4>

                            <p>{item.testimonial}</p>
                            <p>{item.clientName}</p>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}

export default Projects;