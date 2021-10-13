import React, { useState } from 'react';
import { ImCheckmark } from 'react-icons/im';

export default function Work(props) {
	return (
		<>
			<div className="WorkPage">
				<h1>My Projects</h1>
				{/* <h2>Professional</h2> */}

				<div className="container">
					<a href="https://bookmark-app-sachiyo.herokuapp.com/">
						Project 2 - bookmark
					</a>
					{/* </div>
				<div className="container-02"> */}
					<a href="https://note-taking-app-sachiyo.herokuapp.com/">
						Project 3 - note-taking app
					</a>
				</div>

				{/* <table className="table table-bordered border-primary" width="auto"> 
						<thead>
							<tr>
								<th scope="col" width="10px"></th>
								<th scope="col" width="10px">
									Plan testing project
								</th>
								<th scope="col" width="10px">
									Design test cases
								</th>
								<th scope="col">Build Automated testing</th>
								<th scope="col">Execute Functional testing</th>
								<th scope="col">Execute Non-functional testing</th>
								<th scope="col">Provide training for junior QA</th>
								<th scope="col">Bug Investigation</th>
								<th scope="col">Monitor risk-management</th>
							</tr>
						</thead>
						<tbody className="table table-bordered border-primary">
							<tr className="table table-bordered border-primary">
								<th scope="row">A</th>
								<td>
									<ImCheckmark height="100px" />
								</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td colSpan="2">Larry the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>*/}
				{/* </div> */}
			</div>
		</>
	);
}
