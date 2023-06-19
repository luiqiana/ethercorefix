import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { IoIosArrowDropleft } from 'react-icons/io';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/demos/background/css/particles.css';

function ParticlesBg() {
	const particlesInit = async (main) => {
		await loadFull(main);
	}

	return(
		<section id="particles">
			<Particles
				id="tsparticles"
				init={particlesInit}

				options={{
					"fullScreen": {
						"enable": true,
						"zIndex": 1
					},
					"particles": {
						"number": {
							"value": 10,
							"density": {
								"enable": true,
								"value_area": 600
							}
						},
						"color": {
							"value": "#fff"
						},
						"shape": {
							"type": "circle",
							"options": {
								"sides": 2
							}
						},
						"opacity": {
							"value": 0.8,
							"random": false,
							"anim": {
								"enable": false,
								"speed": 1,
								"opacity_min": 0.1,
								"sync": false
							}
						},
						"size": {
							"value": 4,
							"random": false,
							"anim": {
								"enable": false,
								"speed": 40,
								"size_min": 0.1,
								"sync": false
							}
						},
						"rotate": {
							"value": 0,
							"random": true,
							"direction": "clockwise",
							"animation": {
								"enable": true,
								"speed": 5,
								"sync": false
							}
						},
						"line_linked": {
							"enable": true,
							"distance": 600,
							"color": "#ffffff",
							"opacity": 0.4,
							"width": 2
						},
						"move": {
							"enable": true,
							"speed": 2,
							"direction": "none",
							"random": false,
							"straight": false,
							"out_mode": "out",
							"attract": {
								"enable": false,
								"rotateX": 600,
								"rotateY": 1200
							}
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": true,
								"mode": ["grab"]
							},
							"onclick": {
								"enable": true,
								"mode": "bubble"
							},
							"resize": true
						},
						"modes": {
							"grab": {
								"distance": 400,
								"line_linked": {
									"opacity": 1
								}
							},
							"bubble": {
								"distance": 400,
								"size": 40,
								"duration": 2,
								"opacity": 8,
								"speed": 3
							},
							"repulse": {
								"distance": 200
							},
							"push": {
								"particles_nb": 4
							},
							"remove": {
								"particles_nb": 2
							}
						}
					},
					"retina_detect": true,
					"background": {
						"color": "#111",
						"image": "",
						"position": "50% 50%",
						"repeat": "no-repeat",
						"size": "cover"
					}
				}}
			/>
			<div className="particles-wrapper">
				<Container>
					<Row>
						<Col md={3} className="d-none d-md-block"/>
						<Col md={6}>
							<div className="particles-elements-wrapper">
								<div className="particles-elements-container">
									<h1>PARTICLES BACKGROUND</h1>
									<span>You can modify speed, amount and more from background</span>
									<br />
									<a className="particles-button-a" href="/demos">
										<div className="particles-btn-hover mt-2">
											<div className="input-group particles-btn-group">
													<span className="input-group-text particles-button-icon">
														<IoIosArrowDropleft className="particles-icon"/>
													</span>
												<span className="input-group-text particles-button-text">Back</span>
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

export default ParticlesBg;