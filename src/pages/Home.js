import React, { useState } from 'react';

export default function Home(props) {
	return (
		<div className="HomePage">
			<div className="loading">
				<span data-text="L">S</span>
				<span data-text="O">A</span>
				<span data-text="A">C</span>
				<span data-text="D">H</span>
				<span data-text="I">I</span>
				<span data-text="N">Y</span>
				<span data-text="G">O</span>
			</div>

			{/* <h2>Sachiyo, QA engineer</h2> */}
			<h3 id="title">QA engineer</h3>
			<h3 id="location">based in Tokyo, Japan</h3>
		</div>
	);
}
