import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Discord extends Component {
	render() {
		return (
			<section id="module" className="align-items-center pb-0 pb-5 pt-4">
				<Container>
					<div className="modules-header-wrapper mb-4">
						<h1>Discord module</h1>
					</div>
					<Row>
						<Col md={5}>
							<div className="modules-left-wrapper">
								<div className="modules-text-wrapper">
									<h3>Usages</h3>
									<p>Discord widget is perfect for your website if you have such a server. From the website you can check who is online and you can join without a boring link.</p>
								</div>
								<div className="modules-text-wrapper">
									<h3>Customizable</h3>
									<p>Unfortunately, Discord does not give us much room for maneuver. However, you can change the style to dark or white and size.</p>
								</div>
								<div className="modules-button-wrapper d-none d-md-block">
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
							<div className="modules-widget-wrapper">
								<iframe className="modules-discord-widget" title="Discord widget" src="https://discord.com/widget?id=929154536894001152&theme=light" height="500" allowTransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
							</div>
							<div className="modules-button-wrapper d-block d-md-none mt-2">
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

export default Discord;