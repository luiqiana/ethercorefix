import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Error414() {
	return (
		<section className="p-5">
			<Container>
				<Row>
					<Col md={4}>
						<div className="error-img">
							<img src={require('./../imgs/error.webp')} height={100} className="error" alt="error"/>
						</div>
					</Col>
					<Col md={8} className="p-2">
						<h1>Something went wrong :(</h1>
						<p className="error-p fs-4">
							From what I know, it's not good that you ended up here. If you came here via one of the links on the website, please report it to us via the <a href="/#contact" className="error-a">contact form</a> or by e-mail <a href="mailto:contact@ether-core.com" className="error-a">contact@ether-core.com</a>
						</p>
						<span>
							<a href="/errorcode#414" className="error-code-a">Error code: 414</a>
						</span>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Error414;
