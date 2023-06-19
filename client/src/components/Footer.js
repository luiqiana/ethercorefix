import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
	return (
		<footer className="bg-light text-center text-lg-start text-muted pb-2" id="footer">
			<Container>
				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="me-5 d-none d-lg-block">
						<span>Get connected with us on social networks:</span>
					</div>
					<div>
						<a href="https://facebook.com" className="me-4 text-reset">
							<i className="bi bi-facebook footer-icon"/>
						</a>
						<a href="https://instagram.com" className="me-4 text-reset">
							<i className="bi bi-instagram footer-icon"/>
						</a>
						<a href="https://messenger.com" className="me-4 text-reset">
							<i className="bi bi-messenger footer-icon"/>
						</a>
						<a href="https://discord.com" className="me-4 text-reset">
							<i className="bi bi-discord footer-icon"/>
						</a>
					</div>
				</section>
				<section>
					<Container className="text-center text-md-start mt-5">
						<Row className="mt-3">
							<Col md={3} lg={4} xl={3} className="mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4"><i className="bi bi-gem me-3"/>Ether Core</h6>
								<p>
									We are a group of friends consisting of graphic designers, programmers and originators. Our portfolio is small, but we would love to expand it in the future :)
								</p>
							</Col>
							<Col md={2} className="mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Page</h6>
								<p>
									<a href="/#" className="text-reset footer-text">Home</a>
								</p>
								<p>
									<a href="/#about" className="text-reset footer-text">About us</a>
								</p>
								<p>
									<a href="/#portfolio" className="text-reset footer-text">Portfolio</a>
								</p>
								<p>
									<a href="/#team" className="text-reset footer-text">Team</a>
								</p>
								<p>
									<a href="/#contact" className="text-reset footer-text">Contact</a>
								</p>
								<p>
									<a href="/demos" className="text-reset footer-text">Demos</a>
								</p>
								<p>
									<a href="/errorcode" className="text-reset footer-text">Error codes</a>
								</p>
								<p>
									<a href="/#pricing" className="text-reset footer-text">Pricing</a>
								</p>
								<p>
									<a href="/legals/terms" className="text-reset footer-text">Terms of service</a>
								</p>
								<p>
									<a href="/legals/privacy" className="text-reset footer-text">Privacy policy</a>
								</p>
							</Col>
							<Col md={3} lg={2} className="mx-auto mb-4">
								<h6 className="text-uppercase fw-bold mb-4">Additional modules</h6>
								<p>
									<a href="/#modules" className="text-reset footer-text">Introduction</a>
								</p>
								<p>
									<a href="/modules/mailer" className="text-reset footer-text">Mailer</a>
								</p>
								<p>
									<a href="/modules/accounts" className="text-reset footer-text">Accounts</a>
								</p>
								<p>
									<a href="/modules/discord" className="text-reset footer-text">Discord widget</a>
								</p>
								<p>
									<a href="/modules/teamspeak" className="text-reset footer-text">TeamSpeak</a>
								</p>
								<p>
									<a href="/modules/models" className="text-reset footer-text">3D models</a>
								</p>
								<p>
									<a href="/modules/autopricing" className="text-reset footer-text">Auto pricing</a>
								</p>
								<p>
									<a href="/modules/configurator" className="text-reset footer-text">Configurator</a>
								</p>
								<p>
									<a href="/modules/minecraft" className="text-reset footer-text">Minecraft</a>
								</p>
								<p>
									<a href="/modules/adminpanel" className="text-reset footer-text">Admin panel</a>
								</p>
							</Col>
							<Col md={4} lg={3} className="mx-auto mb-md-0 mb-4">
								<h6 className="text-uppercase fw-bold mb-4">
									Contact
								</h6>
								<p>
									<i className="bi bi-envelope-fill me-3" />
									<a href="mailto:contact@ether-core.com" className="text-reset footer-text">contact@ether-core.com</a>
								</p>
								<p>
									<i className="bi bi-telephone-fill me-3" />
									<a href="tel:+48664846644" className="text-reset footer-text">+48 664 846 644</a>
								</p>
							</Col>
						</Row>
					</Container>
				</section>
				<div className="text-center p-4 footer-copyright">
					&copy;<span>{new Date().getFullYear()}</span> Copyright:
					<a href="/" className="text-reset fw-bold footer-text-copyright"> ether-core.com</a>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;