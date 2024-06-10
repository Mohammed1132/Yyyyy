module.exports.config = {
  name: "wibu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Hình Ảnh",
  usages: "wibu",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/TreaQR2.jpeg",
"https://i.imgur.com/BtLuB2i.jpeg",
"https://i.imgur.com/qxB1OUU.jpeg",
"https://i.imgur.com/w4oXKMW.jpeg",
"https://i.imgur.com/muTQa1F.jpeg",
"https://i.imgur.com/zsechO9.jpeg",
"https://i.imgur.com/pyu93gE.png",
"https://i.imgur.com/rwyoxbC.jpeg",
"https://i.imgur.com/GtpUqsg.jpeg",
"https://i.imgur.com/0wM49Ki.jpeg",
"https://i.imgur.com/Gpn5TcR.jpeg",
"https://i.imgur.com/Z6zItRS.jpeg",
"https://i.imgur.com/SGKOvnt.jpeg",
"https://i.imgur.com/wGYVNFF.jpg",
"https://i.imgur.com/2zgWPnT.jpg",
"https://i.imgur.com/7iwQckU.jpg",
"https://i.imgur.com/YhlD1lY.jpg",
"https://i.imgur.com/icPTKzn.jpg",
"https://i.imgur.com/RJamTWw.jpg",
"https://i.imgur.com/0MgxYyq.jpg",
"https://i.imgur.com/rQyixmC.jpg",
"https://i.imgur.com/XRTxzvg.jpg",
"https://imgur.com/B991MvQ.jpg",
"https://i.imgur.com/dqPmsd3.jpg",
"https://i.imgur.com/dwtgbLM.jpg",
"https://imgur.com/Y8GijZ6.jpg",
"https://imgur.com/qlj2ehM.jpg",
"https://i.imgur.com/UKhxssX.jpg",
"https://i.imgur.com/x7vQSEU.jpg",
"https://i.imgur.com/5fSyoWb.jpg",
"https://i.imgur.com/6yBLdh6.jpg",
"https://i.imgur.com/NBnYS6V.jpg",
"https://imgur.com/KYKSJgl.jpg",
"https://imgur.com/wUv1qvK.jpg",
"https://imgur.com/JjJiiaY.jpg",
"https://i.imgur.com/yWqfP1O.jpg",
"https://imgur.com/undefined.jpg",
"https://i.imgur.com/NmMg5ds.jpg",
"https://i.imgur.com/ZFCPJIi.jpg",
"https://i.imgur.com/ogM6LKg.jpeg",
"https://imgur.com/01v4VSy.jpg",
"https://i.imgur.com/I9i1n0t.jpg",
"https://imgur.com/undefined.jpg",
"https://imgur.com/n3LO41j.jpg",
"https://imgur.com/ewiKHIB.jpg",
"https://imgur.com/67nisft.jpg",
"https://imgur.com/BD8UShL.jpg",
"https://imgur.com/undefined.jpg",
"https://imgur.com/8D6mv1q.jpg",
"https://imgur.com/undefined.jpg",
"https://imgur.com/4WMlXUw.jpg",
"https://imgur.com/S0son5D.jpg",
"https://imgur.com/undefined.jpg",
"https://imgur.com/undefined.jpg",
"https://imgur.com/undefined.jpg",
"https://imgur.com/gOHHMtt.jpg",
"https://imgur.com/undefined.jpg",
"https://imgur.com/undefined.jpg",
  ];
	 var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 0đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`Hình oreki houtarou  Dành Cho You Nè \nSố Ảnh: ${link.length}\n-0 đô !`,attachment: fs.createReadStream(__dirname + "/cache/28.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/28.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/28.jpg")).on("close",() => callback());
     }
   };