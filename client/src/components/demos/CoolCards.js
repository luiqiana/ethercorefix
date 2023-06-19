import React, { Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/demos/css/coolcards.css';
import {IoIosArrowDropleft} from "react-icons/io";

class CoolCards extends Component {
	render() {
		return (
			<section id="coolcards">
				<Container>
					<Row>
						<Col xl={2} className="d-none d-xl-block"/>
						<Col xl={6}>
							<div className="coolcards-card coolcards-general">
								<div className="coolcards-card coolcards-one coolcards-move">Team</div>
								<div className="coolcards-card coolcards-three coolcards-move">Ether</div>
								<div className="coolcards-card coolcards-two coolcards-move">Core</div>
							</div>
						</Col>
						<Col xl={2} className="mt-5 mt-xl-0">
							<div className="coolcards-info">
								<h3>Cool cards</h3>
								<p className="mb-3">You can change the activation method, colors and number of cards.</p>
								<a className="coolcards-button-a" href="/demos">
									<div className="coolcards-btn-hover mt-2">
										<div className="input-group coolcards-btn-group">
											<span className="input-group-text coolcards-button-icon">
												<IoIosArrowDropleft className="coolcards-icon"/>
											</span>
											<span className="input-group-text coolcards-button-text">Back</span>
										</div>
									</div>
								</a>
							</div>
						</Col>
						<Col xl={2} className="d-none d-xl-block"/>
					</Row>
				</Container>
			</section>
		);
	}
}

export default CoolCards;