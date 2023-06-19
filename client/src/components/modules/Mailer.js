import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Mailer extends Component {
	render() {
		return (
			<section id="module" className="align-items-center pb-0 pb-5 pt-4">
				<Container>
					<div className="modules-header-wrapper mb-4">
						<h1>Mailer module</h1>
					</div>
					<Row>
						<Col md={5}>
							<div className="modules-left-wrapper">
								<div className="modules-text-wrapper">
									<h3>Usages</h3>
									<p>There are many applications for the mailer module, from simple forms to newsletters and integration with user panels.</p>
								</div>
								<div className="modules-text-wrapper">
									<h3>Customizable</h3>
									<p>In order to better match the clients, everything can be individually adjusted. You can set the names permanently as shown here, but it does not matter that they will be generated each time different.</p>
								</div>
								<div className="modules-button-wrapper d-none d-md-block">
									<ButtonGroup className="modules-buttongroup">
										<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
											e.preventDefault();
											window.location.href='/#modules';
										}}>Back</button>
									</ButtonGroup>
								</div>
							</div>
						</Col>
						<Col md={7}>
							<div className="modules-carousel-wrapper">
								<Carousel variant="dark" fade controls={false} indicators={false} interval={10000}>
									<Carousel.Item>
										<img src={require("../../imgs/modules/mailer/email.webp")} className="d-block w-100 modules-carousel-img" alt="email" />
									</Carousel.Item>
									<Carousel.Item>
										<img src={require("../../imgs/modules/mailer/config.webp")} className="d-block w-100 modules-carousel-img" alt="config" />
									</Carousel.Item>
								</Carousel>
							</div>
							<div className="modules-button-wrapper d-block d-md-none mt-2">
								<ButtonGroup className="modules-buttongroup">
									<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
										e.preventDefault();
										window.location.href='/#modules';
									}}>Back</button>
								</ButtonGroup>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Mailer;