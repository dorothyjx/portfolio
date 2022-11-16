import React from "react";
import {createRoot} from "react-dom/client"
import "./style.css"

import {
	Navbar,
	About,
    Education,
	Skills,
	Internship,
	Projects,
	Contact,
} from "./components/index.js"

const App = () => {
	return <>
		<Navbar />
		<About />
		<Education />
		<Skills />
		<Internship />
		<Projects />
		<Contact />
	</>
}

const app = document.querySelector("#app")
const root = createRoot(app)
root.render(<App />)