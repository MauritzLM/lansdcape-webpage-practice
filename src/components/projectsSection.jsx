// create a project card for each project
import { projects } from "../assets/data";

function Projects() {
    return (
        <>
            <section>
                <h3>Previous Projects</h3>
                <div className="projects-container">
                    {projects?.map(item => <div className="project-card" key={item.id}>
                        <h4>{item.title}</h4>

                        <picture>
                            <source media="(max-width: 799px)" srcSet={item.image} />
                            <source media="(min-width: 800px)" srcSet={item.image} />
                            <div><img src={item.image} alt={item.imgAlt} /></div>
                        </picture>

                        <p>{item.testimonial}</p>
                        <p>{item.clientName}</p>
                    </div>)}
                </div>
            </section>
        </>
    )
}

export default Projects;