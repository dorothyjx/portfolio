import React, {useState} from "react";
import intern from "./internship.json";
import "./InternshipStyle.css"
import amz from "../imgs/amazon.png"

const Internship = () => {
	//console.log(intern.map(i => i.Description))

	console.log(intern.Role)

    return <>
		<div id="internship">
			<h1>Internship Experience</h1>
			{
				intern.map((i) => (
					<div className="intern-container">
						<div className="intern-card">
							<h2>{i.Role}</h2>
							<h4>{i.Company + " | " + i.Location + " | " + i.Time}</h4>
							<ul>
								{i.Description.map(a => <li>{a}</li>)}
							</ul>
						</div>
						<img src={amz} className="intern-img"/>
					</div>
				))
			}
		</div>
    </>
}

export default Internship