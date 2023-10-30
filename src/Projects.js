export const ProjectsSection = () => {
    return(
            <section className="projects-section" id="section3">
                <h2 className="projects-text">Projects
                <span className="blue-line-projects"></span></h2>
                <div className="projects-container">
                    <article className="projects-article">
                        <a target="blank" href=".." className="projects-anchor">
                            <div className="projects-desktopimages">
                                <img id="projects-desktopimg" alt="Project" src="https://melogno.lol/assets/img/digitalbooking.webp"></img>
                                <span className="blue-line-projectsimg"></span>
                            </div>
                            <div className="projects-mobileimages">
                                <img id="projects-mobileimg" alt="project" src="https://melogno.lol/assets/img/digitalbooking_phone.webp"></img>
                            </div>
                        </a>
                    </article>
                </div>
            </section>
            
    )
}