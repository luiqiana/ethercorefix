import React, { Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/demos/css/textparallax.css';
import {IoIosArrowDropleft} from "react-icons/io";

class TextParallax extends Component {
	constructor(props) {
		super(props);
		this.backgroundParallax = this.backgroundParallax.bind(this);
	}

	componentDidMount() {
		window.addEventListener("load", this.backgroundParallax);
	}

	componentWillUnmount() {
		window.removeEventListener("load", this.backgroundParallax);
	}

	backgroundParallax() {
		const element = document.getElementById("title");
		let mouseX, mouseY, traX, traY;
		window.addEventListener("mousemove", (e) => {
			mouseX = e.pageX;
			mouseY = e.pageY;
			traX = ((4 * mouseX) / 1000) + 40;
			traY = ((4 * mouseY) / 1000) + 40;
			element.style.backgroundPosition = traX + "%" + traY + "%";
		});
	}

	render() {
		return (
			<section id="textparallax">
				<Container>
					<Row>
						<Col xl={2} className="d-none d-xl-block"/>
						<Col xl={6}>
							<div className="textparallax-title" id="title">Ether Core</div>
						</Col>
						<Col xl={2} className="mt-5 mt-xl-0">
							<div className="textparallax-info">
								<h3>Text parallax</h3>
								<p className="mb-3">You can change the parallax sensitivity and background image.</p>
								<a className="textparallax-button-a" href="/demos">
									<div className="textparallax-btn-hover mt-2">
										<div className="input-group textparallax-btn-group">
											<span className="input-group-text textparallax-button-icon">
												<IoIosArrowDropleft className="textparallax-icon"/>
											</span>
											<span className="input-group-text textparallax-button-text">Back</span>
										</div>
									</div>
								</a>
							</div>
						</Col>
						<Col xl={2} className="d-none d-xl-block"/>
					</Row>
				</Container>
			</section>
		);
	}
}

export default TextParallax;