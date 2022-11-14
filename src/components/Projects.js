import React, {useState} from "react"
import projects from "./projects.json"
import "./ProjectsStyle.css"

const Projects = () => {

    return <>
		<div id="projects">
			<h1>Projects</h1>
			<div className="proj-container">
				{
					projects.map((project, index) => (
						<div key={index} className="proj-card">
							<h3>{project.name}</h3>
							<small>{project.Language}</small>
							<ul>
								{project.description.map((a) => <li>{a}</li>)}
							</ul>
						</div>
					))
				}
			</div>
		</div>
    </>
}

export default Projects