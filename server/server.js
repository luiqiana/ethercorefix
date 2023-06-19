const express = require('express');
const cors = require('cors');
const app = express();


const contactMailer = require('./components/mailer/contact');
const pricingMailer = require('./components/mailer/pricing');
const demoPanelLogin = require("./components/demos/panel/login");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors({origin: '*'}));

app.post("/api/mailer/contact", async (req, res) => {
	res.json(
		{
			"sent": await contactMailer.sendEmail(req.body)
		}
	);
	res.end();
});

app.post("/api/mailer/pricing", async (req, res) => {
	res.json(
		{
			"sent": await pricingMailer.sendEmail(req.body)
		}
	);
	res.end();
});

app.post("/api/demos/panel/signin", async (req, res) => {
	res.json(
		{
			"valid": await demoPanelLogin.verify(req.body)
		}
	);
});

app.get("*", (req, res) => {
	res.redirect("https://ether-core.com");
	res.end();
});

app.listen(3001, () => { console.log("Listening on port 3001..."); });