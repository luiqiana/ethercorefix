import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Demos extends Component {
	render() {
		return (
			<section id="demos" className="align-items-center pb-0 pb-3 pt-4">
				<div className="index-demos-header-wrapper mb-2 mb-md-4">
					<h1>Our demos, that you can test</h1>
				</div>
				<div className="index-demos-button-wrapper mb-3">
					<a href="/#portfolio" title="Back">
						<i className="bi bi-arrow-left-circle" />
					</a>
				</div>
				<Container>
					<Row>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/panel" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/panel.webp")} className="index-demos-img" alt="admin panel"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Admin panel</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												This is a combination of accounts module with admin panel module. Go ahead and test it.<br />
												<b>
													User: admin<br />
													Password: admin
												</b>
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="https://ts.demo.ether-core.com" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/teamspeak.webp")} className="index-demos-img" alt="teamspeak"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>TS Manager</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												See for yourself how you can manage your teamspeak server from your browser.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/models" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/models.webp")} className="index-demos-img" alt="3D models"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>3D models</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												See for yourself how well 3D models work on websites.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/autopricing" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/autopricing.webp")} className="index-demos-img" alt="autopricing"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Auto pricing</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												See how the auto pricing module works.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/configurator" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/configurator.webp")} className="index-demos-img" alt="configurator"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Configurator</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												See how the demo version of the configurator and auto pricing modules works.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/itemshop" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/itemshop.webp")} className="index-demos-img" alt="minecraft itemshop"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Itemshop Minecraft</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												See how itemshop works for the Minecraft server (For test purposes, you must enter the server with the IP given below and we have turned off the payment gateway).<br />
												<b>
													Server IP: mc.demo.ether-core.com
												</b>
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/bans" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/bans.webp")} className="index-demos-img" alt="punishments list"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Punishments list Minecraft</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												See the punishments list demo.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/background/starsparallax" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/starsparallaxbackground.webp")} className="index-demos-img" alt="stars parallax background"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Parallax stars background</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on stars parallax background.
											</p>
											<h6>
												animated
											</h6>
										</div>
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/textparallax" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/textparallax.webp")} className="index-demos-img" alt="text parallax"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Text parallax</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on our text concept.
											</p>
											<h6>
												animated
											</h6>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/background/snowy" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/snowybackground.webp")} className="index-demos-img" alt="snowy background"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Snowy background</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on snowy background.
											</p>
											<h6>
												animated
											</h6>
											<span>
												This background is very burdensome for the user and we do not recommend using it. The user's computer may slow down significantly when the page is opened.
											</span>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/background/gradient" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/gradientbackground.webp")} className="index-demos-img" alt="gradient background"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Gradient background</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on gradient background.
											</p>
											<h6>
												animated
											</h6>
											<span>
												This background may be slightly overburdening the user, which may make the website perform less well.
											</span>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/background/gradientwaves" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/gradientwavesbackground.webp")} className="index-demos-img" alt="gradient waves background"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Gradient waves background</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on gradient waves background concept.
											</p>
											<h6>
												animated
											</h6>
										</div>
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/textanimation" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/textanimation.webp")} className="index-demos-img" alt="text animation"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Text animation</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on amazing text animation.
											</p>
											<h6>
												animated
											</h6>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/coolcards" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/coolcards.webp")} className="index-demos-img" alt="cool cards"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Cool cards</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on cool cards concept.
											</p>
											<h6>
												animated
											</h6>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/background/cubic" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/cubicbackground.webp")} className="index-demos-img" alt="cubic background"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Cubic background</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on cubic background.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/background/nightsky" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/nightskybackground.webp")} className="index-demos-img" alt="night sky background"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Night sky background</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on night sky background.
											</p>
											<h6>
												animated
											</h6>
											<span>
												This background may be slightly overburdening the user, which may make the website perform less well.
											</span>
										</div>
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/loaders" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/loaders.webp")} className="index-demos-img" alt="loaders"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Loaders</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on amazing loaders concepts.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/buttons" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/buttons.webp")} className="index-demos-img" alt="buttons"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Buttons</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on buttons concept.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/rangeinputs" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/rangeinputs.webp")} className="index-demos-img" alt="range inputs"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Range inputs</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on our range inputs.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/background/particles" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/particlesbackground.webp")} className="index-demos-img" alt="particless background"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Particles background</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on particles background.
											</p>
											<h6>
												animated
											</h6>
											<span>
												This background may be slightly overburdening the user, which may make the website perform less well.
											</span>
										</div>
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/cubeconcept" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/cubeconcept.webp")} className="index-demos-img" alt="cube concept"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Cube concept</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on amazing loaders concepts.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/radioinputs" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/radioinputs.webp")} className="index-demos-img" alt="radio inputs"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Radio inputs</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on our radio inputs.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/checkboxes" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/checkboxes.webp")} className="index-demos-img" alt="checkboxes"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Checkboxes</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on our checkboxes.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos/switches" className="index-demos-a">
								<div className="index-demos-item-wrapper">
									<div className="index-demos-img-wrapper">
										<div className="index-demos-img ms-auto me-auto">
											<img src={require("../imgs/demos/switches.webp")} className="index-demos-img" alt="switches"/>
										</div>
									</div>
									<div className="index-demos-text-wrapper mt-3 p-3">
										<div className="index-demos-text-header-wrapper">
											<h4>Switches</h4>
										</div>
										<div className="index-demos-text-p-wrapper">
											<p>
												Look on switches concepts.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
					</Row>
				</Container>
				<div className="index-demos-comment-wrapper mt-3">
					<h5>Some demos may be user-burdensome and we do not recommend using them. We wrote about it under such demos.</h5>
				</div>
			</section>
		);
	}
}

export default Demos;