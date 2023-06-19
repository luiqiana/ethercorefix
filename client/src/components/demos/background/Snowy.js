import React, {Component} from 'react';

import { IoIosArrowDropleft } from 'react-icons/io';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/demos/background/css/snowy.css';

let snowscape;
let landscape;

class Snowy extends Component {
	componentDidMount() {
		this.snowscape();
		this.mistscape();

		window.onresize = this.resizeWindow;
	}

	resizeWindow() {
		snowscape = document.getElementById("snowscapebg");
		landscape = document.getElementById("mistscapebg");
		snowscape.width = window.innerWidth - (window.innerWidth - document.body.clientWidth);
		snowscape.height = window.innerHeight - (window.innerHeight - document.body.clientHeight);
		landscape.width = window.innerWidth - (window.innerWidth - document.body.clientWidth);
		landscape.height = window.innerHeight - (window.innerHeight - document.body.clientHeight);
	}

	snowscape() {
		snowscape = document.getElementById("snowscapebg");
		let ctx = snowscape.getContext('2d');
		let POPULATION = 150;
		let SNOW = [];

		const resize = function() {
			snowscape.width = window.innerWidth - (window.innerWidth - document.body.clientWidth);
			snowscape.height = window.innerHeight - (window.innerHeight - document.body.clientHeight);
		}
		resize();

		const SnowFlake = function() {
			let flake;
			if(Math.random() < 0.5) {
				flake = {
					alpha: Math.random() * 0.5 + 0.1,
					x: Math.random() * window.innerWidth,
					y: 0,
					z: Math.random() * Math.random() * 50 + 10
				};
			}
			else {
				flake = {
					alpha: Math.random() * 0.5 + 0.1,
					x: window.innerWidth,
					y: Math.random() * window.innerHeight,
					z: Math.random() * Math.random() * 50 + 10,
				};
			}
			return flake;
		}

		for(let i = 0; i < POPULATION; i++) {
			SNOW.push(SnowFlake());
		}

		const update = function() {
			for(let i = 0; i< POPULATION; i++) {
				SNOW[i].x -= 50/SNOW[i].z;
				SNOW[i].y += 50/SNOW[i].z;
				if(SNOW[i].x < 0 || SNOW[i].y > window.innerHeight) {
					SNOW[i] = SnowFlake();
				}
				draw(i);
			}
		}

		const draw = function(i) {
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.globalAlpha = SNOW[i].alpha;
			ctx.beginPath();
			ctx.arc(SNOW[i].x, SNOW[i].y, 25/SNOW[i].z, 0, 2*Math.PI);
			ctx.closePath();
			ctx.fill();
		}

		const animate = function() {
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			update();
			requestAnimationFrame(animate);
		}
		animate();
	}

	mistscape() {
		landscape = document.getElementById("mistscapebg");
		const ctx = landscape.getContext("2d");
		const resize = function() {
			landscape.width = window.innerWidth - (window.innerWidth - document.body.clientWidth);
			landscape.height = window.innerHeight - (window.innerHeight - document.body.clientHeight);
		}
		resize();
		let MIST = [];

		for(let i = 0; i < 10; i++) {
			MIST.push({
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight/2 + window.innerHeight/2,
				vx: Math.random() * -10,
				vy: Math.random() * 2.5,
			});
		}

		const draw = function(i) {
			let blob = MIST[i];
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.beginPath();
			ctx.arc(blob.x, blob.y, window.innerWidth/5, 0, 2*Math.PI);
			ctx.closePath();
			ctx.globalAlpha = 0.2;
			ctx.fill();
		}

		const update = function() {
			for(let i = 0; i < 5; i++) {
				MIST[i].x += MIST[i].vx;
				MIST[i].y += MIST[i].vy;
				if(MIST[i].x < -window.innerWidth/5 || MIST[i].x > window.innerWidth + window.innerWidth/5){
					MIST[i].x = 6*window.innerWidth/5;
				}
				if(MIST[i].y < 3*window.innerHeight/4 || MIST[i].y > window.innerHeight){
					MIST[i].vy *= -1;
				}
				draw(i);
			}
		}

		const animate = function() {
			ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
			update();
			requestAnimationFrame(animate);
		}
		animate();
	}

	render() {
		return (
			<section id="snowy">
				<canvas id="snowscapebg" />
				<canvas id="mistscapebg" />
				<div className="snowy-wrapper">
					<Container>
						<Row>
							<Col md={3} className="d-none d-md-block"/>
							<Col md={6}>
								<div className="snowy-elements-wrapper">
									<div className="snowy-elements-container">
										<h1>SNOWY BACKGROUND</h1>
										<span>You can modify the amount of stars in the background</span>
										<br />
										<a className="snowy-button-a" href="/demos">
											<div className="snowy-btn-hover mt-2">
												<div className="input-group snowy-btn-group">
													<span className="input-group-text snowy-button-icon">
														<IoIosArrowDropleft className="snowy-icon"/>
													</span>
													<span className="input-group-text snowy-button-text">Back</span>
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

export default Snowy;