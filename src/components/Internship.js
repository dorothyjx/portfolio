import React, {useState} from "react";
import intern from "./internship.json";
import "./InternshipStyle.css"

const Internship = () => {
	//console.log(intern.map(i => i.Description))

	console.log(intern.Role)

    return <>
		<div id="internship">
			<h1>Internship Experience</h1>
			{
				intern.map((i) => (
					<div className="intern-container">
						<h2>{i.Role}</h2>
						<h4>{i.Company + " | " + i.Location + " | " + i.Time}</h4>
						<ul>
							{i.Description.map(a => <li>{a}</li>)}
						</ul>
					</div>
				))
			}
		</div>
    </>
}

export default Internship