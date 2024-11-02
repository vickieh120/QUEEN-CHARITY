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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0w4Y0gvakZjWEdleThGZ3VncEpjbjd6TEd2YXJPdHF2d3d2cVZieTJsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDFoWDdZQkxOOUNPcjV4cGdQbTdMYlFGbzZITEZ2YmVqaDZoVmxWanZVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SGg5ZTRKaTBPRzJXbXpwTmoya1F6ZU5lNjBPVG42d1BIeVZrWGw2MG5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZmYwVWNNNVQ0NzZPa3NoU3ZwN2tlMVgwRGh0TFRFNURDbGpZUjZUV0VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGTXFjYWtveDB5T0hjUzAvN1BNQ01FM0xpdFhrRzU1cDcrNE41bGpnMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKM0VjRzR2eUplN2RxRk9YeWptY1UyZld5STVHUnhrTE9UOXJPVlJvUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhNM1c1Z3VZU1hlcjRvWkpmTmpnZG4yajJoaWJUdHkwWTY4N2Q0bVIxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BnR0FYV2FPNHVCZXJHamRnclFiWTZNRWhFdVk0RTAzdkNJc3RiWmpFUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQvUXB6TkxvSzFJMnBtSVdCZWk5YkYxTTJpQkM5c3YvV1JVQmdBR1czK1JGQi9abm04NVlVNlUzTElteGdMakFhTWUzcVdKMFFSRnFnRlZJT0JZTGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJGYTQreFdkS1hCSFdiVTVUNzI2K3FJbUtvNlNmQWNXMHZDRmlodmc5TW93PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwMTAyMjU1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRjQ0NDU0NkI1RTM4QTk0QjY3NTcxMDg0NDBFOTcyMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTgwNDU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGb20yN0VXTFFlaVAxSVR2aUZJWWpBIiwicGhvbmVJZCI6ImFhZDRlODlkLWYxZDktNGM5OS04YTIzLTMyMzhkMGY1ZTlmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqa25TTU85RHNFVE9jUEs3aXo2cHlqZFFSVjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVV3b05MbnJpVGZrN2VkTkNTVHl6WUpkbXpRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkoyMTlGRlBNIiwibWUiOnsiaWQiOiIyNTQxMDEwMjI1NTE6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDQVNFWVJIT0RFUyBURUNIIE1FRElBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRCtsYWNERU5tZm1ya0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0bUh2bXJFVGZkbFR1dk5VSGRFYjFDL2lCQ05ZZXNRWUNEc0Mvb3FSOGxrPSIsImFjY291bnRTaWduYXR1cmUiOiJnWlFwblFVZmJjM2YvaFdkeW9sdkhDQW14WCtEWGRac0RzQ0trR2FFd096Um9SSnlQRzJUVFhJM2VJdkFBRjJOWWJHNU0xbGVBc0hYVXA0M2psdUxBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3E4ODUvYTRlamt2NFM5SklCUUtPMytDc2NOL3lUVFN5MGZBbFNLUWQwS0NzbC9hT0tPRnNINUVuRDdwdUtDb0dncTFuSFRIaWRmZDJLN1lyWmg1aGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMDEwMjI1NTE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiWmg3NXF4RTMzWlU3cnpWQjNSRzlRdjRnUWpXSHJFR0FnN0F2NktrZkpaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTgwNDU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9zQiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "ABBY",
  packname: process.env.PACK_NAME || "LØRD",
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
