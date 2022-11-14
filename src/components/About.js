import React, {useState} from "react"
import "./AboutStyle.css"
import self from "../imgs/self.jpg"


const About = () => {
	return <>
		<div className="about">
			<div className="photo-outline">
				<img src={self} />
			</div>
			
			<h1>Xuan Ji (Dorothy)</h1>
			<p>Hi, I am a backend software development engineer, focused in Python, Java, Scikit-learn and AWS Services. 
				I have an acedemic background on tech. I am majored in Computer and Information System in Northeastern University.  
				Besides my academic knowledge, I am also passionate about programming, software development and tech. 
				I successfully completed my first internship at Amazon, Sunnyvale, CA in summer 2022. 
			</p>
		</div>
	</>
}

export default About