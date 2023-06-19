import React, {Component} from 'react';

import { IoIosArrowDropleft } from 'react-icons/io';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/demos/background/css/starsparallax.css';

class StarsParallax extends Component {
	render() {
		return (
			<section id="starsparallax">
				<div id="starsparallax-stars-small" />
				<div id="starsparallax-stars-medium" />
				<div id="starsparallax-stars-large" />
				<div className="starsparallax-wrapper">
					<Container>
						<Row>
							<Col md={3} className="d-none d-md-block"/>
							<Col md={6}>
								<div className="starsparallax-elements-wrapper">
									<div className="starsparallax-elements-container">
										<h1>STARS PARALLAX BACKGROUND</h1>
										<span>You can modify the amount of stars in the background</span>
										<br />
										<a className="starsparallax-button-a" href="/demos">
											<div className="starsparallax-btn-hover mt-2">
												<div className="input-group starsparallax-btn-group">
													<span className="input-group-text starsparallax-button-icon">
														<IoIosArrowDropleft className="starsparallax-icon"/>
													</span>
													<span className="input-group-text starsparallax-button-text">Back</span>
												</div>
											</div>
										</a>
									</div>
								</div>
							</Col>
							<Col md={3} className="d-none d-md-block"/>
						</Row>
					</Container>
				</div>
			</section>
		);
	}
}

export default StarsParallax;