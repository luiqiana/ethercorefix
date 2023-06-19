import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Main() {
	return (
		<section className="d-flex align-items-center mt-4 mt-md-5 mb-4 mb-md-5 pt-0 pt-md-5">
			<Container>
				<Row>
					<Col md={6} className="index-main-text-col order-2 order-md-1 pt-5 pt-lg-0 d-flex flex-column justify-content-center">
						<h1>Ether Core</h1>
						<h2>Websites designers and developers</h2>
						<div className="d-flex">
							<a href="/#about" className="index-main-btn me-1">About us</a>
							<a href="/#team" className="index-main-btn ms-1">Team</a>
						</div>
					</Col>
					<Col md={6} className="index-main-img-col order-1 order-md-2">
						<img src={require('./../../imgs/logo.webp')} className="index-main-img" alt="logo" />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Main;