//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "fareedjimoh06@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/zw89uk.jpg";
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
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/evkqex.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mariapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1AwSUtONmpaNDBUYi9Nd2cycEpnV0V0TEc2MnZjMHZkdmJXYkF5b0VFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkVZSyswRXdxVFIwK1ZOVmZ5SXcraUJNNXNEM0Z2cVZjdm9MRU5Vc3UzOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSG1UdHRhMm1wK2YyQiswbXdhV3dYQitaYVZvNVo3d0d5SDYwMU5qc20wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNkNpVG93UUloUGp1ZWJBRkw2MmdRK0xCUnZNaW9YY2tUNkFOZ3lwZ2tZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMZS9aTVVod3l2M2wvcEkrT1hCWG1jM2NiQVRJYXM2V2pjRURGMWNxMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRXdlhwQjZ5bWFXNkQrQlpPbjVBOGg5RzdTNEpQaUlvQzVocUl0WklaQ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05MVTlzQnFRMnZMUzZSMW1KT3dWMnFDTXBKaTlSNGRIdzgxbnVIeVJWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjRZVDFaenlhcjZhU2g1a2l6RWs0YXc5TXoyaEVnK3NyY2dRY1p1YlFXcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl5YXBrbHJ6NWt0Z0Y2RmFQUUVLL0xaWng0SDduVVcrUi9HTlhxVGtSZDFUYkpEdHdaSExnZkVQUzJha1ljeTdpdWd4eER6YldxRlVWTUtpR2xRRWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiJUc3FDam1UQXdWcjBjSm9aaWY5a3lubzhxcWZYTlk1OGI3WWs3dzk4RkVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwMTAyMjU1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MzJGRjY2ODRFMzhGOTI4NTYzREE2MkZFNDJGNjhGQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTg1OTU2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMDEwMjI1NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzA1NTVBOERBREFDQjc5Mzc4MzQ3RDM4MEQzNjdBRDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDU4NTk1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTGZMVkFPbm5RWmFZTzBVaFJieWlsUSIsInBob25lSWQiOiI2YzE5ZjVkMy0wYjVjLTRjNjEtOWQzZi04MjAyNjAxMjdjMzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXBoUThETjJMbHYyVlkwRnprSENuamM5NlVvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhxZUpXQk9mNzZad05nR1M5eVBIQnRmTWZldz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4S0MzNVlXQyIsIm1lIjp7ImlkIjoiMjU0MTAxMDIyNTUxOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0FTRVlSSE9ERVMgVEVDSCBNRURJQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUgrbGFjREVOYkttcmtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidG1Idm1yRVRmZGxUdXZOVUhkRWIxQy9pQkNOWWVzUVlDRHNDL29xUjhsaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidVJ1c3R0UFZNcVlXK3BobFVoNk5NREgxMytDWk1nMzZQbS9iN1F1dVZoZ1M5TFM1eU51UGh0bmlPTXpmRXZaNUNXekkreDE4R1ZOanFOaXJFaDR0RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkhYUzhMT01rWGI1d0Y2NTFhZFc0bEpWNTJpUlZ1cHBhM2FGUDhzY2xubUlhZnZGMHlLU3dVd0o0NHN4c01lbUhFeUM0b3dNVE8zUU5wM1duamNVOWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTAxMDIyNTUxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlpoNzVxeEUzM1pVN3J6VkIzUkc5UXY0Z1FqV0hyRUdBZzdBdjZLa2ZKWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDU4NTk1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPc0QifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "CASEYRHODES",
  packname: process.env.PACK_NAME || "THE DONN",
  botname: process.env.BOT_NAME || "`QUEEN_CHARITY`",
  ownername: process.env.OWNER_NAME || "CASEYRHODES",
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
