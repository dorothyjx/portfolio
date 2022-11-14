import React, {useState} from "react";
import "./NavbarStyle.css"

const Navbar = () => {
	return <>
		<nav>
			<a href="#about">About</a>
			<a href="#education">Education</a>
			<a href="#skills">Skills</a>
			<a href="#internship">Experience</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</nav>
	</>
}

export default Navbar