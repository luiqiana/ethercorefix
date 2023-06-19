"use strict";
const nodemailer = require('nodemailer');

let sent;


module.exports = {
	sendEmail: async function(data) {
		sent = false;

		let Preferred = {
			Contact: null,
			Language: null
		}

		switch(data.Preferredcontact) {
			case "email":
				Preferred.Contact = "E-mail";
				break;
			case "phone":
				Preferred.Contact = "Phone";
				break;
		}

		switch(data.Preferredlanguage) {
			case "english":
				Preferred.Language = "English";
				break;
			case "polish":
				Preferred.Language = "Polish";
				break;
		}

		const transporter = nodemailer.createTransport({
			host: 'pro1.mail.ovh.net',
			port: 587,
			secure: false,
			auth: {
				user: "contact@ether-core.com",
				pass: "password"
			}
		});

		try {
			const info = await transporter.sendMail({
				from: '"Ether Core contact" contact@ether-core.com',
				to: "1karolek1@gmail.com",
				subject: "Ether Core contact",
				html: `<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Ether core contact</title><style>body {font-family: helvetica, sans-serif;font-weight: normal;padding: 10px;margin: 0;max-width: 600px;}header {text-align: center;width: 100%;margin: 0;padding: 5px 0;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom: 3px solid #00bfc9;}h1 {font-weight: normal;margin: 0;}h3 {font-weight: normal;margin: 0;}a {text-decoration: none;color: #000000 !important;transition: 0.5s !important;}a:hover {color: #0b8c94 !important;}div.content {width: 100%;background-color: #f8f9fa;border-radius: 10px;}div.contact-message {width: calc(100% - 20px);padding: 10px;overflow-x: auto;}table {text-align: start;table-layout: fixed;}tr {padding: 5px;border: 5px solid transparent;}th {text-align: start;vertical-align: top;width: 30%;}td {width: 70%;}footer {border-top: 3px solid #00bfc9;width: 100%;text-align: center;font-weight: bold;padding: 5px 0; color: #000000 !important}</style></head><body><div class="content"><header><h1><a href="https://ether-core.com">Ether Core</a></h1></header><div class="contact-message"><table><tr><th>First name</th><td>${data.Firstname}</td></tr><tr><th>Last name</th><td>${data.Lastname}</td></tr><tr><th>Company</th><td>${data.Company}</td></tr><tr><th>E-mail</th><td>${data.Email}</td></tr><tr><th>Phone number</th><td>${data.Phone}</td></tr><tr><th>Country</th><td>${data.Country}</td></tr><tr><th>Preferred method of contact</th><td>${Preferred.Contact}</td></tr><tr><th>Preferred contact language</th><td>${Preferred.Language}</td></tr><tr><th>Message</th><td>${data.Message}</td></tr></table></div><footer style="color: #000000 !important">Copyright &copy; <a href="https://ether-core.com">Ether Core</a>. All rights reserved.</footer></footer></div></body></html>`
			});

			console.log("Message sent: %s", info.messageId);
			sent = true;
		}
		catch(err) {
			console.error(err);
			sent = false;
		}

		try {
			let info;
			if(data.Company === '') {
				info = await transporter.sendMail({
					from: '"Ether Core contact" contact@ether-core.com',
					to: data.Email,
					subject: "Ether Core contact",
					html: `<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Ether core contact</title><style>body {font-family: helvetica, sans-serif;font-weight: normal;padding: 10px;margin: 0;max-width: 600px;}header {text-align: center;width: 100%;margin: 0;padding: 5px 0;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom: 3px solid #00bfc9;}h1 {font-weight: normal;margin: 0;}h3 {font-weight: normal;margin: 0;}a {text-decoration: none;color: #000000!important;transition: 0.5s!important;}a:hover {color: #0b8c94!important;}div.content {width: 100%;background-color: #f8f9fa;border-radius: 10px;}div.contact-message {width: calc(100% - 20px);padding: 10px;overflow-x: auto;}table {text-align: start;table-layout: fixed;}tr {padding: 5px;border: 5px solid transparent;}th {text-align: start;vertical-align: top;width: 30%;}td {width: 70%;}footer {border-top: 3px solid #00bfc9;width: 100%;text-align: center;font-weight: bold;padding: 5px 0; color: #000000 !important;}div.message {width: calc(100% - 30px);padding: 5px 15px; color: #000000 !important;}p.ignore {margin-top: 3px;margin-bottom: 5px;font-weight: normal;font-size: 12px; color: #000000 !important;}</style></head><body><div class="content"><header><h1><a href="https://ether-core.com">Ether Core</a></h1></header><div class="message"><h3>Dear customer,</h3><p style="margin: 5px 0;">Below we send you a copy of the contact form that was posted on our site today.</p></div><div class="contact-message"><table><tr><th>First name</th><td>${data.Firstname}</td></tr><tr><th>Last name</th><td>${data.Lastname}</td></tr><tr><th>E-mail</th><td>${data.Email}</td></tr><tr><th>Phone number</th><td>${data.Phone}</td></tr><tr><th>Country</th><td>${data.Country}</td></tr><tr><th>Preferred method of contact</th><td>${Preferred.Contact}</td></tr><tr><th>Preferred contact language</th><td>${Preferred.Language}</td></tr><tr><th>Message</th><td>${data.Message}</td></tr></table></div><footer><p class="ignore"><i>If you haven't sent any contact form, please ignore this message.</i></p>Copyright &copy; <a href="https://ether-core.com">Ether Core</a>. All rights reserved.</footer></div></body></html>`
				});
			}
			else {
				info = await transporter.sendMail({
					from: '"Ether Core contact" ether-core@mail.liftkatowice.com',
					to: data.Email,
					subject: "Ether Core contact",
					html: `<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Ether core contact</title><style>body {font-family: helvetica, sans-serif;font-weight: normal;padding: 10px;margin: 0;overflow: hidden;max-width: 600px;}header {text-align: center;width: 100%;margin: 0;padding: 5px 0;border-top-left-radius: 10px;border-top-right-radius: 10px;border-bottom: 3px solid #00bfc9;}h1 {font-weight: normal;margin: 0;}h3 {font-weight: normal;margin: 0;}a {text-decoration: none;color: #000000!important;transition: 0.5s!important;}a:hover {color: #0b8c94!important;}div.content {width: 100%;background-color: #f8f9fa;border-radius: 10px;}div.contact-message {width: calc(100% - 20px);padding: 10px;overflow-x: auto;}table {text-align: start;table-layout: fixed;}tr {padding: 5px;border: 5px solid transparent;}th {text-align: start;vertical-align: top;width: 30%;}td {width: 70%;}footer {border-top: 3px solid #00bfc9;width: 100%;text-align: center;font-weight: bold;padding: 5px 0; color: #000000 !important;}div.message {width: calc(100% - 30px);padding: 5px 15px; color: #000000 !important;}p.ignore {margin-top: 3px;margin-bottom: 5px;font-weight: normal;font-size: 12px; color: #000000 !important;}</style></head><body><div class="content"><header><h1><a href="https://ether-core.com">Ether Core</a></h1></header><div class="message"><h3>Dear customer,</h3><p style="margin: 5px 0;">Below we send you a copy of the contact form that was posted on our site today.</p></div><div class="contact-message"><table><tr><th>First name</th><td>${data.Firstname}</td></tr><tr><th>Last name</th><td>${data.Lastname}</td></tr><tr><th>Company</th><td>${data.Company}</td></tr><tr><th>E-mail</th><td>${data.Email}</td></tr><tr><th>Phone number</th><td>${data.Phone}</td></tr><tr><th>Country</th><td>${data.Country}</td></tr><tr><th>Preferred method of contact</th><td>${Preferred.Contact}</td></tr><tr><th>Preferred contact language</th><td>${Preferred.Language}</td></tr><tr><th>Message</th><td>${data.Message}</td></tr></table></div><footer><p class="ignore"><i>If you haven't sent any contact form, please ignore this message.</i></p>Copyright &copy; <a href="https://ether-core.com">Ether Core</a>. All rights reserved.</footer></div></body></html>`
				});
			}

			console.log("Message sent: %s", info.messageId);
		}
		catch(err) {
			console.error(err);
		}

		return sent;
	}
}