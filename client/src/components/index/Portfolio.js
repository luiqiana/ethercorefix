import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Portfolio extends Component {
	render() {
		return (
			<section id="portfolio" className="align-items-center mb-4 mb-md-5 pb-0">
				<div className="index-portfolio-header-wrapper mb-4">
					<h1>Our works</h1>
				</div>
				<Container>
					<Row>
						<Col sm={6} lg={3} className="d-none d-lg-block">
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="https://liftkatowice.com" className="index-portfolio-a">
								<div className="index-portfolio-item-wrapper p-3">
									<div className="index-portfolio-img-wrapper">
										<div className="index-portfolio-img ms-auto me-auto p-2">
											<img src={require('./../../imgs/portfolio/liftkatowice.webp')} className="index-portfolio-img" alt="logo" />
										</div>
									</div>
									<div className="index-portfolio-text-wrapper mt-3">
										<div className="index-portfolio-text-header-wrapper">
											<h4>Lift Katowice</h4>
										</div>
										<div className="index-portfolio-text-p-wrapper">
											<p>
												Our first project. It was made in a different technology (not all links on the website work due to the lack of materials from the client).
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="mb-4">
							<a href="/demos" className="index-portfolio-a">
								<div className="index-portfolio-item-wrapper p-3">
									<div className="index-portfolio-img-wrapper">
										<div className="index-portfolio-img ms-auto me-auto p-2">
											<img src={require('./../../imgs/portfolio/ethercore.webp')} className="index-portfolio-img" alt="logo" />
										</div>
									</div>
									<div className="index-portfolio-text-wrapper mt-3">
										<div className="index-portfolio-text-header-wrapper">
											<h4>Demo pages</h4>
										</div>
										<div className="index-portfolio-text-p-wrapper">
											<p>
												Unfortunately, we do not have a large portfolio, but we guarantee the highest quality of services provided. At this point, we offer a demo pages.
											</p>
										</div>
									</div>
								</div>
							</a>
						</Col>
						<Col sm={6} lg={3} className="d-none d-lg-block">
						</Col>
					</Row>
				</Container>
			</section>
		);
	}
}

export default Portfolio;