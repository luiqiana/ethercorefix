import React, {Component} from 'react';

import { IoIosArrowDropleft } from 'react-icons/io';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/demos/background/css/cubic.css';

class Cubic extends Component {
	render() {
		return (
			<section id="cubic">
				<div className="cubic-wrapper">
					<Container>
						<Row>
							<Col md={3} className="d-none d-md-block"/>
							<Col md={6}>
								<div className="cubic-elements-wrapper">
									<div className="cubic-elements-container">
										<h1>CUBIC BACKGROUND</h1>
										<span>You can modify the amount of stars in the background</span>
										<br />
										<a className="cubic-button-a" href="/demos">
											<div className="cubic-btn-hover mt-2">
												<div className="input-group cubic-btn-group">
													<span className="input-group-text cubic-button-icon">
														<IoIosArrowDropleft className="cubic-icon"/>
													</span>
													<span className="input-group-text cubic-button-text">Back</span>
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

export default Cubic;