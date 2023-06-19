import React, { Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/demos/css/textanimation.css';
import {IoIosArrowDropleft} from "react-icons/io";

class TextAnimation extends Component {
	constructor(props) {
		super(props);

		this.preventEventListenersDuplication = this.preventEventListenersDuplication.bind(this);
		this.changeSize = this.changeSize.bind(this);
	}

	componentDidMount() {
		const element = document.getElementById("animationEnd");
		this.changeSize();
		element.addEventListener("animationend", this.preventEventListenersDuplication);
		window.addEventListener("resize", this.changeSize)
	}

	componentWillUnmount() {
		const element = document.getElementById("animationEnd");
		element.removeEventListener("animationend", this.preventEventListenersDuplication);
		window.removeEventListener("resize", this.changeSize)
	}

	preventEventListenersDuplication() {
		const element = document.getElementById("animationEnd");
		element.removeEventListener("animationend", this.preventEventListenersDuplication);
		element.addEventListener("animationend", this.preventEventListenersDuplication);
		this.restartAnimation();
	}

	changeSize() {
		const firstElement = document.getElementById("textAnimationTitleFirst");
		const secondElement = document.getElementById("textAnimationTitleSecond");
		secondElement.style.width = firstElement.clientWidth + "px";
	}

	restartAnimation() {
		const element = document.getElementById("animationMarker");
		setTimeout(() => {
			element.classList.remove("animation-marker");
			setTimeout(() => {
				element.classList.add("animation-marker");
			}, 1);
		}, 300)
	}

	render() {
		return (
			<section id="textanimation">
				<Container>
					<Row>
						<Col xl={2} className="d-none d-xl-block"/>
						<Col xl={6}>
							<div id="animationMarker" className="animation-marker">
								<h1 className="textanimation-title" id="textAnimationTitleFirst">
									<span>Hello, how</span>
									<span>do you like</span>
									<span>this text?</span>
								</h1>
								<h2 className="textanimation-title" id="textAnimationTitleSecond">
									<span>Animated by</span>
									<span>Ether Core</span>
									<span id="animationEnd">Team</span>
								</h2>
							</div>
						</Col>
						<Col xl={2} className="mt-5 mt-xl-0">
							<div className="textanimation-info">
								<h3>Text animation</h3>
								<p className="mb-3">You can edit the text as you like. Speed, colors and more.</p>
								<a className="textanimation-button-a" href="/demos">
									<div className="textanimation-btn-hover mt-2">
										<div className="input-group textanimation-btn-group">
											<span className="input-group-text textanimation-button-icon">
												<IoIosArrowDropleft className="textanimation-icon"/>
											</span>
											<span className="input-group-text textanimation-button-text">Back</span>
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

export default TextAnimation;