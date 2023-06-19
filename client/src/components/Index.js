import React, { Component } from 'react';
import $ from 'jquery';

import Main from './index/Main';
import About from './index/About';
import Portfolio from "./index/Portfolio";
import Team from "./index/Team";
import Contact from "./index/Contact";
import Pricing from "./index/Pricing";
import Modules from "./index/Modules";

class Index extends Component {
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
		let hashLink = window.location.hash;
		if($(hashLink).length) {
			window.location.href = window.location.hash;
		}
	}

	render() {
		return (
			<>
				<Main />
				<About />
				<Portfolio />
				<Team />
				<Contact />
				<Pricing />
				<Modules />
			</>
		);
	}
}

export default Index;