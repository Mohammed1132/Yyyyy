module.exports.config = {
	name: "neko",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB",
	description: "FBI =))",
	commandCategory: "Hình ảnh",
	usages: "dog",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies, Users }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 0) {
		axios.get('https://nekos.life/api/v2/img/neko').then(res => {
		let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
		var callback = function () {
					api.sendMessage({
						   body:  'Ảnh neko của bạn đây:\n-0 đô.',
						attachment: fs.createReadStream(__dirname + `/cache/2.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/2.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/2.${ext}`)).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 0}));
			})
	} else return api.sendMessage("Bạn cần 0 đô để xem ảnh ?",event.threadID,event.messageID);
}