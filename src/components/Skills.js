import React, {useState} from "react";
import skills from "./skills.json";
import "./SkillsStyle.css"

const Skills = () => {

    return <>
		<div id="skills">
			<h1>Skills</h1>
			{
				skills.map((skill) => (
					<div className="skill-wrap">
						<div className="skill-card">
							<h3>Programming Language: </h3>
							<p>{skill["Programming Language"]}</p>
						</div>

						<div className="skill-card">
							<h3>Framework: </h3>
							<p>{skill.Framework}</p>
						</div>
						
						<div className="skill-card">
							<h3>AWS Services: </h3>
							<p>{skill["AWS Services"]}</p>
						</div>

						<div className="skill-card">
							<h3>Language: </h3>
							<p>{skill.Language}</p>
						</div>
					</div>
				))
			}
		</div>
    </>
}

export default Skills