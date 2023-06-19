import React, {Component} from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/css/style.css';

import Index from "./components/Index";

import MailerModule from "./components/modules/Mailer";
import AccountsModule from "./components/modules/Accounts";
import DiscordModule from "./components/modules/Discord";
import TeamspeakModule from "./components/modules/Teamspeak";
import ModelsModule from "./components/modules/Models";
import AutopricingModule from "./components/modules/Autopricing";
import ConfiguratorModule from "./components/modules/Configurator";
import MinecraftModule from "./components/modules/Minecraft";
import AdminpanelModule from "./components/modules/Adminpanel";

import Demos from "./components/Demos";
import StarsParallaxBg from "./components/demos/background/StarsParallax";
import SnowyBg from "./components/demos/background/Snowy";
import CubicBg from "./components/demos/background/Cubic";
import NightSkyBg from "./components/demos/background/NightSky";
import ParticlesBg from "./components/demos/background/Particles";
import GradientWavesBg from "./components/demos/background/GradientWaves";
import GradientBg from "./components/demos/background/Gradient";
import TextAnimation from "./components/demos/TextAnimation";
import CoolCards from "./components/demos/CoolCards";
import TextParallax from "./components/demos/TextParallax";
import RangeInputs from "./components/demos/RangeInputs";

import DemoPanelLogin from "./components/demos/panel/Login";
import DemoPanelIndex from "./components/demos/panel/Index";

import Errorcode from "./components/Errorcode";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Error400 from "./errors/400";
import Error401 from "./errors/401";
import Error402 from "./errors/402";
import Error403 from "./errors/403";
import Error404 from "./errors/404";
import Error405 from "./errors/405";
import Error406 from "./errors/406";
import Error407 from "./errors/407";
import Error408 from "./errors/408";
import Error409 from "./errors/409";
import Error410 from "./errors/410";
import Error411 from "./errors/411";
import Error412 from "./errors/412";
import Error413 from "./errors/413";
import Error414 from "./errors/414";
import Error415 from "./errors/415";
import Error500 from "./errors/500";
import Error501 from "./errors/501";
import Error502 from "./errors/502";
import Error503 from "./errors/503";
import Error504 from "./errors/504";
import Error505 from "./errors/505";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Index />} />

					<Route path="/modules/mailer" element={<MailerModule />} />
					<Route path="/modules/accounts" element={<AccountsModule />} />
					<Route path="/modules/discord" element={<DiscordModule />} />
					<Route path="/modules/teamspeak" element={<TeamspeakModule />} />
					<Route path="/modules/models" element={<ModelsModule />} />
					<Route path="/modules/autopricing" element={<AutopricingModule />} />
					<Route path="/modules/configurator" element={<ConfiguratorModule />} />
					<Route path="/modules/minecraft" element={<MinecraftModule />} />
					<Route path="/modules/adminpanel" element={<AdminpanelModule />} />

					<Route path="/demos" element={<Demos />} />
					<Route path="/demos/background/starsparallax" element={<StarsParallaxBg />} />
					<Route path="/demos/background/snowy" element={<SnowyBg />} />
					<Route path="/demos/background/cubic" element={<CubicBg />} />
					<Route path="/demos/background/nightsky" element={<NightSkyBg />} />
					<Route path="/demos/background/particles" element={<ParticlesBg />} />
					<Route path="/demos/background/gradientwaves" element={<GradientWavesBg />} />
					<Route path="/demos/background/gradient" element={<GradientBg />} />
					<Route path="/demos/textanimation" element={<TextAnimation />} />
					<Route path="/demos/coolcards" element={<CoolCards />} />
					<Route path="/demos/textparallax" element={<TextParallax />} />
					<Route path="/demos/rangeinputs" element={<RangeInputs />} />

					<Route path="/demos/panel/signin" element={<DemoPanelLogin />} />
					<Route path="/demos/panel" element={<DemoPanelIndex />} />

					<Route path="/errorcode" element={<Errorcode />} />

					<Route path="/error/400" element={<Error400 />} />
					<Route path="/error/401" element={<Error401 />} />
					<Route path="/error/402" element={<Error402 />} />
					<Route path="/error/403" element={<Error403 />} />
					<Route path="/error/404" element={<Error404 />} />
					<Route path="/error/405" element={<Error405 />} />
					<Route path="/error/406" element={<Error406 />} />
					<Route path="/error/407" element={<Error407 />} />
					<Route path="/error/408" element={<Error408 />} />
					<Route path="/error/409" element={<Error409 />} />
					<Route path="/error/410" element={<Error410 />} />
					<Route path="/error/411" element={<Error411 />} />
					<Route path="/error/412" element={<Error412 />} />
					<Route path="/error/413" element={<Error413 />} />
					<Route path="/error/414" element={<Error414 />} />
					<Route path="/error/415" element={<Error415 />} />
					<Route path="/error/500" element={<Error500 />} />
					<Route path="/error/501" element={<Error501 />} />
					<Route path="/error/502" element={<Error502 />} />
					<Route path="/error/503" element={<Error503 />} />
					<Route path="/error/504" element={<Error504 />} />
					<Route path="/error/505" element={<Error505 />} />

					<Route path="/modules" element={<Navigate replace to="/#modules"/>}/>
					<Route path="/demos/*" element={<Navigate replace to="/demos"/>} />
					<Route path="/demo/*" element={<Navigate replace to="/demos"/>} />
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
