import React from "react"

function Projects(props) {
    return (
        <div class="box2">
            {props.projects.map((project) => (
                            <div class="flex-row">
                            <section id="Selected-Works">
                                <h2>Selected Works</h2>
                                <p>Please browse some of my projects I have ben working on!
                                    This includes my webpage, resume, and others!</p>
                                <div className="images">
                                    <div id="youmu" className="myon">
                                        <h3>LazEat</h3>
                                        <h2> {project.title}</h2>
                                        <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                                    </div>
                                    <div id="youmu" className="myon">
                                        <h3>Activently</h3>
                                        {}
                                        <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                                    </div>
                                </div>
                            </section>
                        </div>
            )
            )}
        </div>
    )
}

export default Projects;