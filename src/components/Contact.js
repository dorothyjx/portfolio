import React, {useState} from "react"
import "./ContactStyle.css"


const Contact = () => {

	const handleSubmit = (e) => {
		e.preventDefault()
		let name = e.target.name.value;
		let email = e.target.email.value;
		let msg = e.target.msg.value;
	}

	return <>
		<div id="contact">
			<h1>Contact</h1>
			<small>(Only for display)</small>
			<form className="contact" onClick={handleSubmit}>
				<input type="text" name="name" placeholder="Name" required/>
    			<label className="label" htmlFor="name">Name</label>
    			<input type="email" name="email" placeholder="Email" required/>
    			<label className="label" htmlFor="email">Email</label>
    			<textarea name="msg" placeholder="Message"></textarea>
    			<label className="label-textarea" htmlFor="msg">Message</label>
    			<input type="submit" name="send" value="Send"/>
			</form>
		</div>
	</>
}

export default Contact