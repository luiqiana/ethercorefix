import React, {Component} from 'react';
import $ from "jquery";

import { IoIosArrowDropleft } from 'react-icons/io';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../../styles/demos/background/css/gradient.css';

let colors = [
	[62, 35, 255],
	[60, 255, 60],
	[255, 35, 98],
	[45, 175, 230],
	[255, 0, 255],
	[255, 128, 0]
];
let step = 0;
let colorIndices = [0, 1, 2, 3];
const gradientSpeed = 0.002;

class Gradient extends Component {
	constructor(props) {
		super(props);

		this.intervalGradient = this.intervalGradient.bind(this);
	}

	componentDidMount() {
		window.addEventListener("load", this.intervalGradient);
	}

	componentWillUnmount() {
		window.removeEventListener("load", this.intervalGradient);
	}

	intervalGradient() {
		setInterval(this.updateGradient, 10);
	}

	updateGradient() {
		if($ === undefined) return;

		let c0_0 = colors[colorIndices[0]];
		let c0_1 = colors[colorIndices[1]];
		let c1_0 = colors[colorIndices[2]];
		let c1_1 = colors[colorIndices[3]];

		let istep = 1 - step;
		let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
		let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
		let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
		let color1 = "rgb("+r1+","+g1+","+b1+")";

		let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
		let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
		let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
		let color2 = "rgb("+r2+","+g2+","+b2+")";

		$('#gradient')
			.css(
				{background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}
			)
			.css(
				{background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"}
			);

		step += gradientSpeed;

		if(step >= 1) {
			step %= 1;

			colorIndices[0] = colorIndices[1];
			colorIndices[2] = colorIndices[3];

			colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
			colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		}
	}

	render() {
		return (
			<section id="gradient">
				<div id="gradient" />
				<div className="gradient-wrapper">
					<Container>
						<Row>
							<Col md={3} className="d-none d-md-block"/>
							<Col md={6}>
								<div className="gradient-elements-wrapper">
									<div className="gradient-elements-container">
										<h1>GRADIENT BACKGROUND</h1>
										<span>You can modify colors and speed of background animation</span>
										<br />
										<a className="gradient-button-a" href="/demos">
											<div className="gradient-btn-hover mt-2">
												<div className="input-group gradient-btn-group">
													<span className="input-group-text gradient-button-icon">
														<IoIosArrowDropleft className="gradient-icon"/>
													</span>
													<span className="input-group-text gradient-button-text">Back</span>
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

export default Gradient;