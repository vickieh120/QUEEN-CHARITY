//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6xuv7u.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg,https://i.imgur.com/XiP8U1i.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdLR2NaeDlqbkNLUDJWMGF2ZGNnZE1HOFg1TThrNC9sblBXZmE5VENGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieENXYjYxZzBMLzVRdzJDeHZyNk5GdFdSNGM3U2YvcGU3OUlNbEZvZ2ltdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Qm0yVHJnNXZHUFNETVBObVVsK1B6ekZUNzkyeTJqaU95WVAxVXN2bEVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDbFhpNlpzZElGcE94UVVGRXdoVW9nMTZ3V0ljemV2SWhsakpWaXpqWWo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKUEFjSE9KelZ5SnNUWkQ0aldsd0QyUzBLRm10WmVxZlJSWWF2NWFLMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYvR2VDSjNNako0dEhLNldmZzhIdGxQZ1dQcElTWERndHA0MGd3NUluZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlpeEpkbVJaVldmZVpOZFF4M3N3SklFVHUvL0xhekErb1VoL1hkdDNIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVlnRUNQa3gya0xZYVVRNzdTZmVIaVM1Z1lyY0xLK0Iwb1BLeG8xTk9SMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhLOXd1d0VzZlAxOHQ2SFl0N0EzN3cxdGFDa2thU21TTnNHUit4cVRjYkpnQXpoWUZWQTE5eEg1ZnZpTWgwVmp0ak4wWFFldTc4MnlUcWJyMUtLOGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiOEM5R29YaXJZVkdvUmFCR1ZlWkdqbk9NYXZSNmUrWE9yZDdaRVB6YTVoWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIxOTIxMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTc3RDY5QzY1NEE5RjhBOEVERTg2NEMzMENBOUQ4NkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTU5MjI4OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV2dlVmRMX0VUeS1QUjBWbEZiaGdiQSIsInBob25lSWQiOiIzZTAxMWY4MC0zNTk0LTRlMGMtODU1MC1jYWVlNTZhZTEyOTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGRpWFdieDBhZ1cwTVBBUTV2ZXRXd0h3T0c0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZGelp6em5oQU1SSGhPQUZzUTlyY2xCODZUYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZM1AxRVM2NiIsIm1lIjp7ImlkIjoiMjU0MTEyMTkyMTE5OjY2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCSgLHqqrPwk4qI8JKGnPCTgoDhtLjhtLzhtL/htLDihILwnZS48J2VivCdlLzwnZWQ4oSd4oSN8J2VhvCdlLvwnZS88J2VivCTgoDwkoac8JOKiSDwkoCxIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQRGZoOHdERU5HQTJMa0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwL2lCaGhZVVh5RUNrR3h3cEVpbVhMRjR3SzRLVUlhQkZ3dkI3ZklvS1hjPSIsImFjY291bnRTaWduYXR1cmUiOiJUQ3JyYzRHMDl2VW5sUFp2V2s0ZERNWENQSG1maGFFSkhzM2pNM0toaklkRGgrL25SK2ZUOGxFOTR3eGRWU2daNlp5elBDZk8zOTdvcjV4ellWczBDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZEt0SzZWQWVESlBJUHB1TEk1NmhzQm9RVURBUHM1SlVyWTlMNkZ3SjZYK0htNGlTd3pRNFh5cjAyV3RYYTM4cTdid0gwUHBmdytrWU84ZGFTMm9SaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTIxOTIxMTk6NjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWY0Z1lZV0ZGOGhBcEJzY0tSSXBseXhlTUN1Q2xDR2dSY0x3ZTN5S0NsMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTU5MjI4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQRVoifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
