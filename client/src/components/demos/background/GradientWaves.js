import React, {Component} from 'react';

import { IoIosArrowDropleft } from 'react-icons/io';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/demos/background/css/gradientwaves.css';

class GradientWaves extends Component {
	render() {
		return (
			<section id="gradientwaves">
				<div className="gradientwave" />
				<div className="gradientwave" />
				<div className="gradientwave" />
				<div className="gradientwaves-wrapper">
					<Container>
						<Row>
							<Col md={3} className="d-none d-md-block"/>
							<Col md={6}>
								<div className="gradientwaves-elements-wrapper">
									<div className="gradientwaves-elements-container">
										<h1>GRADIENT WAVES BACKGROUND</h1>
										<span>You can modify colors, speed of background animation and speed of waves animation</span>
										<br />
										<a className="gradientwaves-button-a" href="/demos">
											<div className="gradientwaves-btn-hover mt-2">
												<div className="input-group gradientwaves-btn-group">
													<span className="input-group-text gradientwaves-button-icon">
														<IoIosArrowDropleft className="gradientwaves-icon"/>
													</span>
													<span className="input-group-text gradientwaves-button-text">Back</span>
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

export default GradientWaves;