import React, {useState} from "react"
import edu from "./education.json"
import "./EducationStyle.css"
import fsu from "../imgs/FSU Seal.png"
import neu from "../imgs/NEU-logo.png"

const Education = () => {
    // const [darkMode, setDarkMode] = useState("")

    // const darkModeHelper = () => {
    //     setDarkMode(darkMode === "" ? "darkModeActivate" : "")
    //     console.log("hello")
    // }\
	const images = [neu, fsu]

    return <>
        {/* <button onClick={darkModeHelper}>Dark Mode</button> */}
		<div id="education">
			<h1>Education</h1>
			<div className="edu-wrap">
        	{
				edu.map((e, index) => (
					// <div key={index} className={`individualAnimal ${darkMode}`}>
					<div key={index} className="edu-card">
						<div className="edu-left">
							<img src={images[index]} className="edu-logo" />
							<h3>{e.School}</h3>
						</div>
						<ul className="edu-right">
							<li>{"Degree: " + e.Degree}</li>
							<li>{"Major: " + e.Major}</li>
							<li>{"Time: " + e.Time}</li>
						</ul>
					</div>
				))
        	}
			</div>
		</div>
    </>
}

export default Education