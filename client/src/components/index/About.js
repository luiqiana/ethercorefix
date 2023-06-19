import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
	return (
		<section id="about" className="d-flex align-items-center mt-4 mt-md-5 mb-4 mb-md-5 pt-0 pt-md-5 pb-0 pb-md-5">
			<Container fluid>
				<Row>
					<Col lg={5} className="ps-4">
						<h1>About us</h1>
						<div className="index-about-element">
							<h4>Team</h4>
							<p>
								Currently, three people from Poland are participating in the project. In the future, when there will be more orders, we plan to expand our warehouse (not only from Poland, but from all over the world). Now there is no such need.
							</p>
						</div>
						<div className="index-about-element">
							<h4>Technologies</h4>
							<p>
								We use one of the most advanced frameworks which is ReactJS. The framework is built on JavaScript and JSX. We try to avoid obsolete languages like PHP. To make your website look good on all devices, we use the latest version of a framework called Bootstrap.
							</p>
						</div>
						<div className="index-about-element">
							<h4>Purpose</h4>
							<p>
								The main goal of our activities is to further develop and earn. We are young and we want to develop, and money helps us a lot. We need money for programs that are unfortunately not cheap.
							</p>
						</div>
						<div className="index-about-element">
							<h4>Direction of expansion</h4>
							<p>
								We plan to develop applications for smartphones, smartwatches and computers (including all popular operating systems such as iOS, Android, Windows, Linux and MacOS). Currently, a side project is a vacation system for companies (small and large). Unfortunately, currently only on the Polish market from law.
							</p>
						</div>
					</Col>
					<Col lg={7}>
						<img src={require('./../../imgs/about.webp')} className="index-about-img" alt="react code" />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default About;