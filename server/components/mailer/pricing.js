"use strict";

const nodemailer = require("nodemailer");
let sent;

module.exports = {
	createVars: function(data) {
		let Strings = {
			Mailer: {
				Uses: '',
				Other: ''
			},
			Accounts: {
				Peoples: '',
				Other: '',
			},
			Teamspeak: {
				Choose: ''
			},
			Models: {
				Own: ''
			},
			Configurator: {
				Other: ''
			},
			Minecraft: {
				Uses: '',
				Other: ''
			},
			Adminpanel: {
				Other: ''
			},
			Additionalinput: {
				Enabled: false,
				Other: ''
			},
			Preferred: {
				Contact: '',
				Language: ''
			},
			Company: false
		};

		if(data.Mailer) {
			let uses = 0;
			if(data.MailerInfo.Form) {
				Strings.Mailer.Uses = "forms"
				uses++;
			}

			if(data.MailerInfo.News) {
				if(uses > 0) {
					Strings.Mailer.Uses += ", ";
				}
				Strings.Mailer.Uses += "newsletter";
				uses++
			}

			if(data.MailerInfo.Other) {
				if(uses > 0) {
					Strings.Mailer.Uses += ", ";
				}
				Strings.Mailer.Uses += "other";
				Strings.Mailer.Other = data.MailerInfo.OtherInput;
			}
		}

		if(data.Accounts) {
			switch(data.AccountsInfo.Peoples) {
				case "100":
					Strings.Accounts.Peoples = "up to 100";
					break;
				case "1000":
					Strings.Accounts.Peoples = "up to 1000";
					break;
				case "more":
					Strings.Accounts.Peoples = "more than 1000";
					break;
				default: break;
			}
			Strings.Accounts.Other = data.AccountsInfo.OtherInput;
		}

		if(data.Teamspeak) {
			let choose = 0;
			if(data.TeamspeakInfo.Link) {
				Strings.Teamspeak.Choose = "link";
				choose++;
			}

			if(data.TeamspeakInfo.Manager) {
				if(choose > 0) {
					Strings.Teamspeak.Choose += ", ";
				}
				Strings.Teamspeak.Choose += "manager";
				choose++;
			}
		}

		if(data.Models) {
			switch(data.ModelsInfo.OwnModels) {
				case "no":
					Strings.Models.Own = "no";
					break;
				case "yes":
					Strings.Models.Own = "yes";
					break;
				default: break;

			}
		}

		if(data.Configurator) {
			Strings.Configurator.Other = data.ConfiguratorInfo.OtherInput;
		}

		if(data.Minecraft) {
			let uses = 0;
			if(data.MinecraftInfo.Itemshop) {
				Strings.Minecraft.Uses = "itemshop";
				uses++;
			}

			if(data.MinecraftInfo.Bans) {
				if(uses > 0) {
					Strings.Minecraft.Uses += ", ";
				}
				Strings.Minecraft.Uses += "punishments list";
				uses++;
			}

			if(data.MinecraftInfo.Other) {
				if(data.MinecraftInfo.Other) {
					if(uses > 0) {
						Strings.Minecraft.Uses += ", ";
					}
					Strings.Minecraft.Uses += "other";
					Strings.Minecraft.Other = data.MinecraftInfo.OtherInput;
				}
			}
		}

		if(data.Adminpanel) {
			Strings.Adminpanel.Other = data.AdminpanelInfo.OtherInput;
		}

		if(data.OtherInput !== '') {
			Strings.Additionalinput.Other = data.OtherInput;
			Strings.Additionalinput.Enabled = true;
		}

		switch(data.Preferredcontact) {
			case "email":
				Strings.Preferred.Contact = "E-mail";
				break;
			case "phone":
				Strings.Preferred.Contact = "Phone";
				break;
			default: break;
		}

		switch(data.Preferredlanguage) {
			case "polish":
				Strings.Preferred.Language = "Polish";
				break;
			case "english":
				Strings.Preferred.Language = "English";
				break;
			default: break;
		}

		if(data.Company !== '') {
			Strings.Company = true;
		}

		return Strings;
	},

	generateHtml: async function(data, client) {
		const Strings = this.createVars(data);
		return `
				<!DOCTYPE html>
				<html lang="en">
					<head>
						<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"/>
				        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
					    <title>Ether core contact</title>
						<style>
							body {
								font-family: helvetica, sans-serif;
								font-weight: normal;
								padding: 10px;
								margin: 0;
								max-width: 600px;
								color: #000000 !important;
							}
				
							header {
								text-align: center;
								width: 100%;
								margin: 0;
								padding: 5px 0;
								border-top-left-radius: 10px;
								border-top-right-radius: 10px;
								border-bottom: 3px solid #00bfc9;
								color: #000000 !important;
							}
				
							h1 {
								font-weight: normal;
								margin: 0;
								color: #000000 !important;
							}
				
							h3 {
								font-weight: normal;
								margin: 0;
								color: #000000 !important;
							}
				
							a {
								text-decoration: none !important;
								color: #000000 !important;
								transition: 0.5s !important;
							}
				
							a:hover {
								color: #0b8c94 !important;
							}
				
							div.content {
								width: 100%;
								background-color: #f8f9fa;
								border-radius: 10px;
								color: #000000 !important;
							}
				
							div.contact-message {
								width: calc(100% - 20px);
								padding: 10px;
								overflow-x: auto;
								color: #000000 !important;
							}
				
							table {
								text-align: start;
								table-layout: fixed;
								color: #000000 !important;
							}
				
							tr {
								padding: 5px;
								border: 5px solid transparent;
								color: #000000 !important;
							}
				
							th {
								text-align: start;
								vertical-align: top;
								width: 30%;
								color: #000000 !important;
							}
				
							td {
								width: 70%;
								color: #000000 !important;
								text-align: start;
							}
				
							footer {
								border-top: 3px solid #00bfc9;
								width: 100%;
								text-align: center;
								font-weight: bold;
								padding: 5px 0;
								color: #000000 !important;
							}
				
							div.modules-header {
								text-align: center;
								color: #000000 !important;
							}
				
							div.module-second {
								padding-top: 10px;
								color: #000000 !important;
							}
							
							div.message {
								width: calc(100% - 30px);
								padding: 5px 15px;
								color: #000000 !important;
							}
							
							p.ignore {
								margin-top: 3px;
								margin-bottom: 5px;
								font-weight: normal;
								font-size: 12px;
								color: #000000 !important;
							}
						</style>
					</head>
					<body>
						<div class="content">
							<header>
								<h1>
									<a href="https://ether-core.com">Ether Core</a>
								</h1>
							</header>
							${client ? `
								<div class="message">
									<h3>Dear customer,</h3>
									<p style="margin: 5px 0;">Below we send you a copy of the pricing form that was posted on our site today.</p>
								</div>
							` : ''}
							<div class="contact-message">
								<table>
									<tr>
										<th>First name</th>
										<td>${data.Firstname}</td>
									</tr>
									<tr>
										<th>Last name</th>
										<td>${data.Lastname}</td>
									</tr>
									${Strings.Company ? `
										<tr>
											<th>Company</th>
											<td>${data.Company}</td>
										</tr>
									` : ''}
									<tr>
										<th>E-mail</th>
										<td>${data.Email}</td>
									</tr>
									<tr>
										<th>Phone number</th>
										<td>${data.Phone}</td>
									</tr>
									<tr>
										<th>Country</th>
										<td>${data.Country}</td>
									</tr>
									<tr>
										<th>Preferred method of contact</th>
										<td>${Strings.Preferred.Contact}</td>
									</tr>
									<tr>
										<th>Preferred contact language</th>
										<td>${Strings.Preferred.Language}</td>
									</tr>
								</table>
								<div class="modules-header">
									<h3>Additional modules</h3>
								</div>
								<table>
									${data.Mailer ? `
										<div class="module">
											<tr>
												<th>Mailer</th>
											</tr>
											<tr>
												<th>Uses for mailer</th>
												<td>${Strings.Mailer.Uses}</td>
											</tr>
											${data.MailerInfo.Other ? `
												<tr>
													<th>Other informations</th>
													<td>${Strings.Mailer.Other}</td>
												</tr>
											` : ''}
										</div>
									` : ''}
									${data.Accounts ? `
										<div class="module">
											<tr>
												<th>Accounts</th>
											</tr>
											<tr>
												<th>Maximum number of users</th>
												<td>${Strings.Accounts.Peoples}</td>
											</tr>
											<tr>
												<th>OtherInput</th>
												<td>${Strings.Accounts.Other}</td>
											</tr>
										</div>
									` : ''}
									${data.Discord ? `
										<div class="module">
											<tr>
												<th>Discord widget</th>
											</tr>
										</div>
									` : ''}
									${data.Teamspeak ? `
										<div class="module">
											<tr>
												<th>Teamspeak</th>
											</tr>
											<tr>
												<th>Choose</th>
												<td>${Strings.Teamspeak.Choose}</td>
											</tr>
										</div>
									` : ''}
									${data.Models ? `
										<div class="module">
											<tr>
												<th>3D models</th>
											</tr>
											<tr>
												<th>Own models</th>
												<td>${Strings.Models.Own}</td>
											</tr>
										</div>
									` : ''}
									${data.Autopricing ? `
										<div class="module">
											<tr>
												<th>Auto pricing</th>
											</tr>
										</div>
									` : ''}
									${data.Configurator ? `
										<div class="module">
											<tr>
												<th>Configurator</th>
											</tr>
											<tr>
												<th>About configurator</th>
												<td>${Strings.Configurator.Other}</td>
											</tr>
										</div>
									` : ''}
									${data.Minecraft ? `
										<div class="module">
											<tr>
												<th>Minecraft</th>
											</tr>
											<tr>
												<th>Uses for minecraft</th>
												<td>${Strings.Minecraft.Uses}</td>
											</tr>
											${data.MinecraftInfo.Other ? `
												<tr>
													<th>Other informations</th>
													<td>${Strings.Minecraft.Other}</td>
												</tr>
											` : ''}
										</div>
									` : ''}
									${data.Adminpanel ? `
										<div class="module">
											<tr>
												<th>Adminpanel</th>
											</tr>
											<tr>
											</tr>About</th>
												<td>${Strings.Adminpanel.Other}</td>
											</tr>
										</div>
									` : ''}
									${Strings.Additionalinput.Enabled ? `
										<div class="module">
											<tr>
												<th>Additional infomations</th>
												<td>${Strings.Additionalinput.Other}</td>
											</tr>
										</div>
									` : ''}
								</table>
							</div>
							<footer>
								${client ? `
									<p class="ignore">
										<i>If you haven't sent any contact form, please ignore this message.</i>
									</p>
								` : ''}
								Copyright &copy; <a href="https://ether-core.com">Ether Core</a>. All rights reserved.
							</footer>
						</div>
					</body>
				</html>
			`;
	},

	sendEmail: async function(data) {
		sent = false;

		let emailHtml;

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
			emailHtml = await this.generateHtml(data, false)
			const info = await transporter.sendMail({
				from: '"Ether Core pricing" contact@ether-core.com',
				to: "1karolek1@gmail.com",
				subject: "Ether Core pricing",
				html: emailHtml
			});

			console.log("Message sent: %s", info.messageId);
			sent = true;
		}
		catch (err) {
			console.error(err);
			sent = false;
		}

		try {
			emailHtml = await this.generateHtml(data, true)
			const info = await transporter.sendMail({
				from: '"Ether Core pricing" contact@ether-core.com',
				to: data.Email,
				subject: "Ether Core pricing",
				html: emailHtml
			});

			console.log("Message sent: %s", info.messageId);
		}
		catch (err) {
			console.error(err)
		}

		return sent;
	}
}