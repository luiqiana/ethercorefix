import React, { Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/demos/css/rangeinputs.css';

class RangeInputs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			elementsHeight: 0,

			oneValue: 0,
			twoValue: 0,
			threeValue: 0,
			fourValue: 0
		}

		this.resize = this.resize.bind(this);
	}

	componentDidMount() {
		this.resize();
		window.addEventListener("resize", this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.resize);
	}

	resize() {
		let wrappers = document.getElementsByClassName("rangeinputs-input-wrapper");
		let elements = document.getElementsByClassName("rangeinputs-element");

		Array.prototype.forEach.call(elements, (el) => {
			if(el.offsetHeight >= this.state.elementsHeight) {
				this.setState({
					elementsHeight: el.offsetHeight
				});
			}
		});

		setTimeout(() => {
			Array.prototype.forEach.call(wrappers, (el) => {
				console.log(this.state.elementsHeight);
				el.style.height = this.state.elementsHeight + "px";
			});
		}, 1);
	}

	oneValue(e) {
		this.setState({
			oneValue: e.target.value
		});
	}

	twoValue(e) {
		this.setState({
			twoValue: e.target.value
		});
	}

	threeValue(e) {
		this.setState({
			threeValue: e.target.value
		});
	}

	fourValue(e) {
		const element = document.getElementById("fourCircle");
		const range = document.getElementById("fourRange");

		this.setState({
			fourValue: e.target.value
		});

		let tmp = ((range.value - range.min) / (range.max - range.min)) * 5;
		if(tmp < 5) {
			element.style.animationDelay = "-" + tmp + "s";
		}
		else {
			element.style.animationDelay = "5s";
		}
	}


	render() {
		return (
			<section id="rangeinputs">
				<Container fluid className="text-center">
					<h1 className="pt-4">Range inputs' demo</h1>
					<div className="rangeinputs-backbutton-wrapper mb-3">
						<a href="/demos" title="Back">
							<i className="bi bi-arrow-left-circle" />
						</a>
					</div>
					<Row>
						<Col md={6} xl={3}>
							<div className="rangeinputs-input-wrapper position-relative">
								<div id="one" className="vertical-center rangeinputs-element">
									<div className="value" id="oneValue">{this.state.oneValue}</div>
									<input type="range" min="0" max="100" step="1" value={this.state.oneValue} onChange={(e) => this.oneValue(e)}/>
								</div>
							</div>
						</Col>
						<Col md={6} xl={3}>
							<div className="rangeinputs-input-wrapper position-relative">
								<div id="two" className="vertical-center rangeinputs-element">
									<div className="value">{this.state.twoValue}</div>
									<input type="range" min="0" max="100" step="1" value={this.state.twoValue} onChange={(e) => this.twoValue(e)}/>
								</div>
							</div>
						</Col>
						<Col md={6} xl={3}>
							<div className="rangeinputs-input-wrapper position-relative">
								<div id="three" className="vertical-center rangeinputs-element">
									<div className="value">{this.state.threeValue}</div>
									<input type="range" min="0" max="100" step="1" value={this.state.threeValue} onChange={(e) => this.threeValue(e)}/>
								</div>
							</div>
						</Col>
						<Col md={6} xl={3}>
							<div className="rangeinputs-input-wrapper position-relative">
								<div id="four" className="vertical-center rangeinputs-element">
									<div className="progresss" data-progresss={this.state.fourValue + "%"}>
										<div className="circle" id="fourCircle"/>
										<div className="range">
											<input type="range" min="0" max="100" step="1" value={this.state.fourValue} id="fourRange" onChange={(e) => this.fourValue(e)} />
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default RangeInputs;