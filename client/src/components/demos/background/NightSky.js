import React, {Component} from 'react';

import { IoIosArrowDropleft } from 'react-icons/io';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/demos/background/css/nightsky.css';

let width;
let height;

class NightSky extends Component {
	constructor(props) {
		super(props);

		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		window.addEventListener("load", this.draw);
		window.onresize = this.resize;
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.draw);
	}

	resize() {
		const board = document.getElementById("nightskyBgWrapper");
		width = board.offsetWidth;
		height = board.offsetHeight;
	}

	draw() {
		this.resize();

		setInterval(this.createStars, 30);
		setInterval(this.starFall, 2000);

		const canvas = document.getElementById("nightSky");
		const art = canvas.getContext("2d");

		art.beginPath();
		art.arc(240, 80, 60, 0, Math.PI * 2, true);

		const color = art.createRadialGradient(100, 100, 150, 100, 20, 30);

		color.addColorStop(0, '#cae3ef');
		color.addColorStop(0.5, '#cde1e8');
		color.addColorStop(1, '#7aa4b4');

		art.fillStyle = color;
		art.fill();

		canvas.style.setProperty("-webkit-filter", "drop-shadow(5px 5px 5px white)");
	}

	createStars() {
		const createNewStar = document.getElementById("starsSmall");
		const star = document.createElement("div");

		function generateSize() {
			let size;

			size = Math.floor(Math.random() * 3);
			if(size < 1) {
				size = 1;
			}

			return size;
		}

		createNewStar.innerHTML = star.outerHTML;

		star.style.left = Math.random() * (width - 10) + "px";
		star.style.backgroundColor = "#ffffff";
		star.style.top = Math.random() * (height + 50) + "px";
		star.style.width =  generateSize() + 'px';
		star.style.height =  generateSize() + 'px';
		star.style.position =  "absolute";
		star.style.zIndex = "1";
		star.style.animation = "twinkle 1s linear infinite alternate";

		document.body.appendChild(star);

		setTimeout (() => {
			star.remove();
		}, 40000)
	}

	starFall() {
		const fall = document.getElementById("fallingStar");
		const createFall = document.createElement('div');

		function randomNumber(min, max) {
			return Math.random() * (max - min) + min;
		}

		fall.innerHTML = createFall.outerHTML;
		createFall.style.position = "absolute";

		let lengthStar = randomNumber(100, 150);

		createFall.style.width = lengthStar + "px";
		createFall.style.height = "2px";
		createFall.style.backgroundImage = "linear-gradient(to right, white 40%, transparent)";

		document.body.appendChild(createFall);

		createFall.style.left = Math.random() * (width - 800) + 'px';
		createFall.style.top = Math.random() * height + 'px';
		createFall.style.zIndex = "1";
		createFall.style.transform = "rotate(7deg)";

		setTimeout (() => {
			createFall.remove();
		}, 900)

		createFall.style.animation = "hide 1s linear infinite alternate";
	}

	render() {
		return (
			<section id="nightsky">
				<div className="nightsky-bg-wrapper" id="nightskyBgWrapper">
					<canvas id="nightSky" />
					<div id="starsSmall" />
					<div id="fallingStar" />
				</div>
				<div className="nightsky-wrapper">
					<Container>
						<Row>
							<Col md={3} className="d-none d-md-block"/>
							<Col md={6}>
								<div className="nightsky-elements-wrapper">
									<div className="nightsky-elements-container">
										<h1>NIGHT SKY BACKGROUND</h1>
										<span>You can modify speed of generating stars and falling stars</span>
										<br />
										<a className="nightsky-button-a" href="/demos">
											<div className="nightsky-btn-hover mt-2">
												<div className="input-group nightsky-btn-group">
													<span className="input-group-text nightsky-button-icon">
														<IoIosArrowDropleft className="nightsky-icon"/>
													</span>
													<span className="input-group-text nightsky-button-text">Back</span>
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

export default NightSky;