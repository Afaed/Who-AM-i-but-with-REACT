import React from "react"

function Projects(props) {
    return (
        <div class="box2">
            <div class="flex-row">
                <section id="Selected-Works">
                    <h2>Selected Works</h2>
                    <p>Please browse some of my projects I have ben working on!
                        This includes my webpage, resume, and others!</p>
                    <div className="images">
                        <div id="zard" className="zard">
                            <h3>Charmander</h3>
                            <img src="../" />
                        </div>
                        <div id="youmu" className="myon">
                            <h3>Youmu</h3>
                            <img src="./assets/images/youmu!.jpg" />
                        </div>
                        <div id="youmu" className="myon">
                            <h3>LazEat</h3>
                            <img src="./assets/images/lazeat-screenshot.PNG" />
                        </div>
                        <div id="youmu" className="myon">
                            <h3>Activently</h3>
                            <img src="./assets/images/Activently.JPG" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects;