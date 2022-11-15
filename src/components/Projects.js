import React, {useState} from "react"
import projects from "./projects.json"
import "./ProjectsStyle.css"
import image_tool from "../imgs/image_tool.png"
import ml from "../imgs/ml.png"
import salary from "../imgs/salary.png"
import distributed from "../imgs/distributed.png"


const Projects = () => {

	const images = [image_tool, salary, distributed, ml]

    return <>
		<div id="projects">
			<h1>Projects</h1>
			<div className="proj-container">
				{
					projects.map((project, index) => (
						<div key={index} className="proj-card">
							<div className="proj-wrap">
								<h3>{project.name}</h3>
								<small>{project.Language}</small>
								<ul>
									{project.description.map((a) => <li>{a}</li>)}
								</ul>
							</div>
							<img src={images[index]} className="proj-img"/>
						</div>
					))
				}
			</div>
		</div>
    </>
}

export default Projects