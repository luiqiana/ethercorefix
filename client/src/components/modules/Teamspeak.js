import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Teamspeak extends Component {
	render() {
		return (
			<section id="module" className="align-items-center pb-0 pb-5 pt-4">
				<Container>
					<div className="modules-header-wrapper mb-4">
						<h1>TeamSpeak module</h1>
					</div>
					<Row>
						<Col md={5}>
							<div className="modules-left-wrapper">
								<div className="modules-text-wrapper">
									<h3>Usages</h3>
									<p>TeamSpeak module is perfect for inviting people to your server. With the use of the manager, you can manage your server from the browser level.</p>
								</div>
								<div className="modules-text-wrapper">
									<h3>Customizable</h3>
									<p>In this module, the link can be customized at will, unfortunately it is not so easy with the manager, you can only adjust a few basic things.</p>
								</div>
								<div className="modules-button-wrapper d-none d-md-block">
									<ButtonGroup className="modules-buttongroup mb-2">
										<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
											e.preventDefault();
											window.location.href='ts3server://193.122.54.67';
										}}>Link demo</button>
									</ButtonGroup>
									<ButtonGroup className="modules-buttongroup mb-2">
										<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
											e.preventDefault();
											window.location.href='https://ts.demo.ether-core.com';
										}}>Manager demo</button>
									</ButtonGroup>
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
										<img src={require("../../imgs/modules/teamspeak/link.webp")} className="d-block w-100 modules-carousel-img" alt="link" />
									</Carousel.Item>
									<Carousel.Item>
										<img src={require("../../imgs/modules/teamspeak/manager.webp")} className="d-block w-100 modules-carousel-img" alt="manager" />
									</Carousel.Item>
								</Carousel>
							</div>
							<div className="modules-button-wrapper d-block d-md-none mt-2">
								<ButtonGroup className="modules-buttongroup mb-2">
									<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
										e.preventDefault();
										window.location.href='ts3server://193.122.54.67';
									}}>Link demo</button>
								</ButtonGroup>
								<ButtonGroup className="modules-buttongroup mb-2">
									<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
										e.preventDefault();
										window.location.href='/demos/tsmanager';
									}}>Manager demo</button>
								</ButtonGroup>
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

export default Teamspeak;