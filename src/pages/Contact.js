import React, { useState } from 'react';

export default function Contact(props) {
	return (
		<div className="ContactPage">
			<h1>My Contact</h1>
			<div id="links">
				<a href="https://www.linkedin.com/in/sachiyosugaya/" target="_blank">
					<img src="img/LI-In-Bug.png" height="100px"></img>
				</a>
				<a
					href="https://www.dropbox.com/s/li26tlv4drfybnt/sample.pdf?dl=0"
					download="resume.pdf"
				>
					<img src="/img/resume.png" height="100px"></img>
				</a>
			</div>
		</div>
	);
}
