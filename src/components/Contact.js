import React, {useRef} from "react"
import emailjs from '@emailjs/browser';

import "./ContactStyle.css"


const Contact = () => {

	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault(); 
	
		emailjs.sendForm('service_91kgpwj', 'template_o0zmx89', form.current, '_ffIAFGxNkAaIV82T')
		  	.then((result) => {
			  	console.log(result.text);
		  	}, (error) => {
			  	console.log(error.text);
		});
		e.target.reset()
		alert("Email send! Thank You!")
	};

	return <>
		<div id="contact">
			<h1>Contact</h1>
			<form className="contact" ref={form} onSubmit={sendEmail}>
				<input type="text" name="name" placeholder="Name" required/>
    			<label className="label" htmlFor="name">Name</label>
    			<input type="email" name="email" placeholder="Email" required/>
    			<label className="label" htmlFor="email">Email</label>
    			<textarea name="message" placeholder="Message"></textarea>
    			<label className="label-textarea" htmlFor="message">Message</label>
    			<input type="submit" name="send" value="Send"/>
			</form>
		</div>
	</>
}

export default Contact