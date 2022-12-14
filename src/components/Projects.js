import React, {useState} from "react"
import projects from "./projects.json"
import "./ProjectsStyle.css"
import image_tool from "../imgs/image_tool.png"
import ml from "../imgs/ml.png"
import salary from "../imgs/salary.png"
import distributed from "../imgs/distributed.png"
import house from "../imgs/house.png"
import portfolio from "../imgs/portfolio.png"


const Projects = () => {

	const images = [house, portfolio, image_tool, salary, distributed, ml]

    return <>
		<div id="projects">
			<h1>Projects</h1>
			<div className="proj-container">
				{
					projects.map((project, index) => (
						<div key={index} className="proj-card">
							<div className="proj-wrap">
								<h3>{project.name}</h3>
								<p>{project.Language}</p>
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