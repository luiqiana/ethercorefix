import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Modules extends Component {
	render() {
		return (
			<section id="modules" className="align-items-center mb-3 mb-lg-4 pb-0 pb-5 pt-4">
				<Container>
					<Row>
						<Col lg={4}>
							<div>
								<div className="index-modules-header-wrapper">
									<h1>Additional modules</h1>
								</div>
								<div className="index-modules-text-wrapper">
									<p>We really want to reach the largest number of customers. For this purpose, we have created many additional modules. We are able to add modules to the ordered website, from simple ones such as, for example, Discord widget, to more advanced ones, such as Item shops for minecraft. However, we do not want to limit ourselves to the modules that we already have in our offer. We want to develop our assortment all the time, so we will keep adding small details. If none of the listed modules suit you, we can write a personalized one for you.</p>
								</div>
							</div>
						</Col>
						<Col lg={8}>
							<div className="index-modules-carousel-wrapper" id="IndexModulesRightWrapper">
								<Carousel className="index-modules-carousel" variant="dark">
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Mailer</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>The mailer module is used for many things, it can be used to send a newsletter, contact forms, and more. The limitation here is the client's imagination.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/mailer.webp")} alt="mailer module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/mailer';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Accounts</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>Accounts module is used for facilities such as admin panel or user panel. In conjunction with the Admin panel module, you can receive contact forms from the browser level.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/accounts.webp")} alt="accounts module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/accounts';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Discord widget</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>The Discord widget is a feature that Discord itself has made available. This is an interesting feature if you want a website linked to your Discord server.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/discord.webp")} alt="discord module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/discord';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Teamspeak</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>The TeamSpeak module offers a simple link that redirects to your server, but we can also make a web application through which you can enter the server from the browser level.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/teamspeak.webp")} alt="teamspeak module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/teamspeak';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>3D models</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>The 3D models module is used to show different 3D models with which the user can interact. We offer making models for the website, but you can also provide us with your own models.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/models.webp")} alt="3D models module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/models';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Auto pricing</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>The auto pricing module is used for automatic pricing of items by simply configuring it, you can combine it with the configurator module and thus you can receive an advanced automatic valuation.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/autopricing.webp")} alt="auto pricing module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/autopricing';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Configurator</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>Configurator module is used as the name suggests for configuration. You can use it in conjunction with the auto pricing module, itemshop in minecraft, but you can also suggest your own use.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/configurator.webp")} alt="configurator module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/configurator';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Minecraft</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>With the Minecraft module you can have an itemshop, a penalty list, a player panel and other things. It all depends on your imagination.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/minecraft.webp")} alt="minecraft module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/minecraft';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
									<Carousel.Item className="index-modules-carousel-item">
										<div className="index-modules-carousel-item-wrapper p-3">
											<Container fluid>
												<Row>
													<Col lg={2} />
													<Col lg={5}>
														<div className="index-modules-carousel-header-wrapper">
															<h3>Admin panel</h3>
														</div>
														<div className="index-modules-carousel-text-wrapper">
															<p>From the admin panel module level, you can modify simple elements on the page such as contact details, read messages from contact forms and more. On request, we can convert the admin panel into a user panel.</p>
														</div>
													</Col>
													<Col lg={3}>
														<div className="index-modules-carousel-img-wrapper">
															<img src={require("../../imgs/modules/adminpanel.webp")} alt="admin panel module" />
														</div>
													</Col>
													<Col lg={2} />
												</Row>
												<Row className="mt-3 mb-3">
													<Col lg={2} />
													<Col lg={8}>
														<div className="index-modules-button-wrapper">
															<ButtonGroup className="index-modules-buttongroup">
																<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
																	e.preventDefault();
																	window.location.href='/modules/adminapanel';
																}}>Read more</button>
															</ButtonGroup>
														</div>
													</Col>
													<Col lg={2} />
												</Row>
											</Container>
										</div>
									</Carousel.Item>
								</Carousel>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Modules;