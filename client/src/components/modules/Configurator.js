import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Configurator extends Component {
	render() {
		return (
			<section id="module" className="align-items-center pb-0 pb-5 pt-4">
				<Container>
					<div className="modules-header-wrapper mb-4">
						<h1>Configurator module</h1>
					</div>
					<Row>
						<Col md={5}>
							<div className="modules-left-wrapper">
								<div className="modules-text-wrapper">
									<h3>Usages</h3>
									<p>The Configurator module is great so that the customer can modify the products available for sale. It is a great combination with the itemshop for minecraft and the autopricing module.</p>
								</div>
								<div className="modules-text-wrapper">
									<h3>Customizable</h3>
									<p>This module adapts to each client separately, so you have full choice as to the appearance and operation of the module.</p>
								</div>
								<div className="modules-button-wrapper d-none d-md-block">
									<ButtonGroup className="modules-buttongroup mb-2">
										<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
											e.preventDefault();
											window.location.href='/demos/configurator';
										}}>Demo</button>
									</ButtonGroup>
									<ButtonGroup className="modules-buttongroup">
										<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
											e.preventDefault();
											window.location.href='/#modules';
										}}>Back</button>
									</ButtonGroup>
								</div>
							</div>
						</Col>
						<Col md={7}>
							<div className="modules-img-wrapper">
								<img src={require("../../imgs/modules/configurator/configurator.webp")} className="d-block w-100 modules-img" alt="configurator" />
							</div>
							<div className="modules-button-wrapper d-block d-md-none mt-2">
								<ButtonGroup className="modules-buttongroup mb-2">
									<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
										e.preventDefault();
										window.location.href='/demos/configurator';
									}}>Demo</button>
								</ButtonGroup>
								<ButtonGroup className="modules-buttongroup">
									<button type="button" className="btn btn-ec-cyan" onClick={(e) => {
										e.preventDefault();
										window.location.href='/#modules';
									}}>Back</button>
								</ButtonGroup>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Configurator;