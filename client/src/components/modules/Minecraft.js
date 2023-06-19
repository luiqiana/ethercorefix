import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Minecraft extends Component {
	render() {
		return (
			<section id="module" className="align-items-center pb-0 pb-5 pt-4">
				<Container>
					<div className="modules-header-wrapper mb-4">
						<h1>Minecraft module</h1>
					</div>
					<Row>
						<Col md={5}>
							<div className="modules-left-wrapper">
								<div className="modules-text-wrapper">
									<h3>Usages</h3>
									<p>The Minecraft module works very well when you want to cash in your Minecraft server (when using the itemshop). The penalty list will give players easy access to see who has not followed the rules. In conjunction with the accounts module and the admin panel module you can get the player's panel.</p>
								</div>
								<div className="modules-text-wrapper">
									<h3>Customizable</h3>
									<p>The entire Minecraft module is fully customizable, just tell us what you want in the module and we will fulfill your request.</p>
								</div>
								<div className="modules-text-wrapper">
									<h3>Requirements</h3>
									<p>
										Itemshop: RCON, our plugin or our mod<br />
										Punishments list: plugin that saves data in an external database (e.g. MySQL, MariaDB)
									</p>
								</div>
								<div className="modules-button-wrapper d-none d-md-block">
									<ButtonGroup className="modules-buttongroup mb-2">
										<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
											e.preventDefault();
											window.location.href='/demos/itemshop';
										}}>Itemshop demo</button>
									</ButtonGroup>
									<ButtonGroup className="modules-buttongroup mb-2">
										<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
											e.preventDefault();
											window.location.href='/demos/bans';
										}}>Punishments list demo</button>
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
										<img src={require("../../imgs/modules/minecraft/itemshop.webp")} className="d-block w-100 modules-carousel-img" alt="itemshop" />
									</Carousel.Item>
									<Carousel.Item>
										<img src={require("../../imgs/modules/minecraft/bans.webp")} className="d-block w-100 modules-carousel-img" alt="punishment list" />
									</Carousel.Item>
								</Carousel>
							</div>
							<div className="modules-button-wrapper d-block d-md-none mt-2">
								<ButtonGroup className="modules-buttongroup mb-2">
									<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
										e.preventDefault();
										window.location.href='/demos/itemshop';
									}}>Itemshop demo</button>
								</ButtonGroup>
								<ButtonGroup className="modules-buttongroup mb-2">
									<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
										e.preventDefault();
										window.location.href='/demos/bans';
									}}>Punishment list</button>
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

export default Minecraft;