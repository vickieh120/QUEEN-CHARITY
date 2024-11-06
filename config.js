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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1sN2p5cGRWRzFKVTJtM2p4WVlKYW5tS0o3dEQ5cTgyQ01SbS9Vb2VtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHk4TzNJWDExc0FJR0MrQ3RPcWpmbjZhR0tYNlp0NXBxWkZLR1BBLyszRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSlpja25TaXRFdW5PMWNoMEh6ZGRvZC9VSGE5cHlFKzBCQnRGLzZQcTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVeGR4RTBLd0V5czdCN0VTM0s2OGIwSVNnWlJtRkhFYXpZYzJYMDk0RzJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBEVm50ck1Lc1pDUThyVjJwSmZSRFN5R0ZHQ3NQQkc2Z0JoQjVOMUFVWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdGQ09ra1M3aHB5WVlCL2VFbGNaUlpNYXJhV1pGOHJ6VVhzTmtwN2tUUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0g0RHlHUFRHa2dwUHdES0VFcG93WVNFQnd1cG14TnRSakpZOTNjK3FYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNitxa3ZmOXRSNHp1QnlOM0M3NE9hUnU4YWxYTnJIck5qbU9VSDg1T3ozMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldweVVLS0NKeFJ6Q2RsenFCMnNONHp5Njl5bGhmZXZNUWhPcldVdElSQ0Iyb0JiZUErMzNodWQzcTNzbFVaTENkSnNFbUtJQ1BXNFlyL0YvVWl2R2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiJoTFZZKy9uemF3bEtjUWJESEMrM1RJMnlLWkNBR1N0bU1BcXZUTmtLMWVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEODlGQ0E5QkRCNkQzNzlEMDlERUU3RTlCMjRERTFDQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwOTA2NDE0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIxOTIxMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjk0RjlFRUQ2RjM5NjdBMjY1NDU4ODc3RjkwODAxRDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDkwNjQxNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYkwtbjhqRmFRNWltSW5ybk9OUjlOdyIsInBob25lSWQiOiIzODU1NDQwNC1mNjAwLTRiZDMtOWM5MC01MWJhNGE5Y2RkZTUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakNzS1RjeUgyZEptdlRrTFc0N3lDMldDL0dnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpRYWw3K29JTWZOWmVZbFhNd2VZT2ZVUGtHcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDN0dKSzlFUCIsIm1lIjp7ImlkIjoiMjU0MTEyMTkyMTE5OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCSgLHqqrPwk4qI8JKGnPCTgoDhtLjhtLzhtL/htLDihILwnZS48J2VivCdlLzwnZWQ4oSd4oSN8J2VhvCdlLvwnZS88J2VivCTgoDwkoac8JOKiSDwkoCxIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJVGJ6UG9CRUo2U3Jya0dHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJic1UwZ0tnS2tpS2RocHlIdFFVY2VZVEtpWTRQeXFVVkNwWDhHRHZibTE0PSIsImFjY291bnRTaWduYXR1cmUiOiIzbHpJV1p1b3BEdU4wOTN3QVUxMnFPQ2xXS0RISDBGL1pYYmpCUVVlNjVCTUxIZy9ZNWFHZE8zcTdJNVlCZHF3VkR4WENlTXRKSGw5SlhYeElZNVBDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWRQMVlvdlBQVFloa3Z4aGV4OVY2Q0ZpakhTS2Q4TG9Cdyt1N0lzRnpFL1N0bXhRaDNuL2lndTlUck1lMUp2ckZJWWNEUkx4djlTNGZlRFM0bGN4aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTIxOTIxMTk6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzdGTklDb0NwSWluWWFjaDdVRkhIbUV5b21PRDhxbEZRcVYvQmc3MjV0ZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDkwNjQxMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIaVEifQ==" // session id here
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
