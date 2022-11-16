import React, {useState} from "react";
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

import "./NavbarStyle.css"
import "../style.css"

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
	  setToggle(!toggle);
	}

	return <>
		<div className="nav-wrap">
			<nav className={toggle ? "navbar expanded" : "navbar"}>
				<div className='toggle-icon' onClick={handleToggle}>
					{toggle?<Icon icon={x} size={28}/>:<Icon icon={menu} size={28}/>}
				</div>
				<ul className="links">
					<li><a href="#about">About</a></li>
					<li><a href="#education">Education</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#internship">Experience</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	</>
}

export default Navbar