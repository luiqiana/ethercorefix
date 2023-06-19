import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

class Team extends Component {
	render() {
		return (
			<section id="team" className="align-items-center mb-3 mb-md-4 pb-0 pb-5 pt-4">
				<div className="index-team-header-wrapper mb-0">
					<h1>Our incredible team</h1>
				</div>
				<Container className="pt-3">
					<Carousel className="index-team-carousel" variant="dark" slide={true} interval={null}>
						<Carousel.Item interval={null}>
							<div className="index-team-carousel-top-wrapper p-3">
								<Container fluid>
									<Row>
										<Col md={2} />
										<Col md={2}>
											<div className="index-team-profile-wrapper">
												<div className="index-team-profile-border">
													<img src={require('./../../imgs/team/cutehannah.webp')} className="index-team-profile-img" alt="CuteHannah"/>
												</div>
											</div>
											<div className="index-team-contact-wrapper mt-5">
												<div className="index-team-contact-item">
													<h6>Hanna "CuteHannah" Potepa</h6>
												</div>
											</div>
										</Col>
										<Col md={6}>
											<div className="index-team-text">
												<div className="index-team-text-about">
													<h1>About Hanna</h1>
													<p>Programmer who use many programming languages. He mainly deals with JavaScript, Php and Java. Currently working in ReactJS and Bootstrap. Ether Core initiator. She writes all our pages.</p>
												</div>
												<div className="index-team-text-from">
													<h1>Message by Hanna</h1>
													<p>My interests are programming, playing computer games and fpv drones. In my spare time, I learn new programming languages and spend my time flying a drone or playing games. I support the LGBT community.</p>
												</div>
											</div>
										</Col>
										<Col md={2} />
									</Row>
								</Container>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={null}>
							<div className="index-team-carousel-top-wrapper p-3">
								<Container fluid>
									<Row>
										<Col md={2} />
										<Col md={2}>
											<div className="index-team-profile-wrapper">
												<div className="index-team-profile-border">
													<img src={require('./../../imgs/team/bofanicy.webp')} className="index-team-profile-img" alt="Bofanicy"/>
												</div>
											</div>
											<div className="index-team-contact-wrapper mt-5">
												<div className="index-team-contact-item">
													<h6>Piotr "Bofanicy" Czyz</h6>
												</div>
											</div>
										</Col>
										<Col md={6}>
											<div className="index-team-text">
												<div className="index-team-text-about">
													<h1>About Piotr</h1>
													<p>Our graphic designer, website designer, film editor and 3D designer. He is fluent in programs such as Adobe Photoshop, Adobe Premiere Pro or Blender.</p>
												</div>
												<div className="index-team-text-from">
													<h1>Message by Piotr</h1>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda dolorum eaque esse in, necessitatibus optio! Aliquam eos ipsam maxime totam? Consequuntur dolor, eius fugiat fugit ipsa necessitatibus nobis sapiente!</p>
												</div>
											</div>
										</Col>
										<Col md={2} />
									</Row>
								</Container>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={null}>
							<div className="index-team-carousel-top-wrapper p-3">
								<Container fluid>
									<Row>
										<Col md={2} />
										<Col md={2}>
											<div className="index-team-profile-wrapper">
												<div className="index-team-profile-border">
													<img src={require('./../../imgs/team/m404.webp')} className="index-team-profile-img" alt="m404"/>
												</div>
											</div>
											<div className="index-team-contact-wrapper mt-5">
												<div className="index-team-contact-item">
													<h6>Michal "m404" Czyz</h6>
												</div>
											</div>
										</Col>
										<Col md={6}>
											<div className="index-team-text">
												<div className="index-team-text-about">
													<h1>About Michal</h1>
													<p>He is fluent in databases. If you order a website with a Minecraft module or an account module, it will create your database. If the database is managed by him, you can be sure that it will be safe. He is an advocate of navigating through databases in the terminal.</p>
												</div>
												<div className="index-team-text-from">
													<h1>Message by Michal</h1>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda dolorum eaque esse in, necessitatibus optio! Aliquam eos ipsam maxime totam? Consequuntur dolor, eius fugiat fugit ipsa necessitatibus nobis sapiente!</p>
												</div>
											</div>
										</Col>
										<Col md={2} />
									</Row>
								</Container>
							</div>
						</Carousel.Item>
					</Carousel>
				</Container>
			</section>
		);
	}
}

export default Team;