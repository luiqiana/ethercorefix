import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from "jquery";

class Errorcode extends Component {
	constructor(props) {
		super(props);

		this.handleLoad = this.handleLoad.bind(this);
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.handleLoad);
	}

	handleLoad() {
		if(window.location.hash) window.scroll(0, 0);
		const hashLink = window.location.hash;
		if($(hashLink).length) {
			window.location.href = window.location.hash;
		}
	}

	render() {
		return (
			<section id="errorcode">
				<Container>
					<div className="errorcode-header-wrapper mt-4">
						<h1>Error codes</h1>
					</div>
					<Row id="400" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 400</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 400 is "Bad Request". Indicates that the server was unable to process the user's request.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="401" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 401</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 401 is "Unauthorized". Indicates that the server was unable to verify your permissions for the resource that was requested.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>If you received this error while using any password-protected panel, try logging in again.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="402" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 402</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 402 is "Payment Required". Indicates that you have bypassed the payment gateway. You shouldn't get this error on this website.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="403" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 403</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 403 is "Forbidden". Indicates that the server is blocking your request to the subpage indicated in the link.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="404" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 404</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 404 is "Not found". Indicates that the server did not find the item you want to target.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="405" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 405</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 405 is "Method Not Allowed". Indicates that the server received and recognized the method but rejected it.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="406" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 406</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 406 is "Not Acceptable". Indicates that the server cannot produce a response matching the list of acceptable values defined in the request.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Change browser.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="407" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 407</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 407 is "Proxy Authentication Required". Indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Change browser.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="408" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 408</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 408 is "Request Timeout". Indicates that the server has not received a full request from the client within the allotted time.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Check if you are connected to the internet.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="409" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 409</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 409 is "Conflict". Indicates a request conflict with the current state of the target resource.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Check if you are connected to the internet.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="410" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 410</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 410 is "Gone". Indicates that the specified resource was previously available but has been deleted.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
								<p>Clear DNS cache on your computer.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="411" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 411</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 411 is "Length Required". Indicates that the server refuses to accept the request without a defined "Content-Length" header.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="412" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 412</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 412 is "Precondition Failed". Indicates that access to the target resource has been denied.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Check that the given address is correct.</p>
								<p>Clear your browser's cache.</p>
								<p>Uninstall your browser extensions.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="413" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 413</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 413 is "Request Entity Too Large". Indicates that the transferred file is too large.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Try to reduce the size of the uploaded file, if any.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="414" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 414</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 414 is "URI Too Long". indicates that the URI requested by the client is longer than the server is willing to interpret.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>There is nothing you can do with this error.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What to do?</h3>
								<p>Please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="415" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 415</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 415 is "Unsupported Media Type". Indicates that the server refuses to accept the request because the payload format is in an unsupported format.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What should you do?</h3>
								<p>Make sure that you are sending the right Content-Type header value.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>The above solutions do not work. What to do?</h3>
								<p>If the above solutions do not work, please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="500" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 500</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 500 is "Internal Server Error". Indicates that the server has internal problems.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What to do?</h3>
								<p>Please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="501" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 501</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 501 is "Not Implemented". Indicates that the server does not support functions to satisfy the given request.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What to do?</h3>
								<p>Please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="502" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 502</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 502 is "Bad Gateway". Indicates that the proxy server acting as a proxy server was unable to get a correct response from the parent server or did not get a response at all to its request.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What to do?</h3>
								<p>Please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="503" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 503</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 503 is "Service Unavailable". Indicates that the given web server is working properly but is currently unable to service the request because it is unavailable due to overload or scheduled maintenance.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What to do?</h3>
								<p>Please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="504" className="border-bottom pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 504</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 504 is "Gateway Timeout". Indicates that one web server did not receive a timely response from the other server it was accessing when trying to load a webpage or making another browser request.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What to do?</h3>
								<p>Please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
					<Row id="505" className="pb-2 pt-4 errorcode-row">
						<Col lg={6}>
							<h1>Error code: 505</h1>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What does this error mean?</h3>
								<p>Error 505 is "Version Not Supported". Indicates that the HTTP version used in the request is not supported by the server.</p>
							</div>
							<div className="errorcode-text-wrapper mt-3">
								<h3>What to do?</h3>
								<p>Please contact us via the <a href="/#contact" className="errorcode-text-a">contact form</a> or send an email to <a href="mailto:contact@ether-core.com" className="errorcode-text-a">contact@ether-core.com</a></p>
							</div>
						</Col>
						<Col lg={6} className="d-none d-lg-block" />
					</Row>
				</Container>
			</section>
		);
	}
}

export default Errorcode;