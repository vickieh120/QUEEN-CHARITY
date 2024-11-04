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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlB2aVJjSW5lblp1ay9vb0Y4ZDFEMmFGcHpGdFBiSlpRWjZlV0dxRmtrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS25XVFp5dWpUMHdRZUJZb0tvZzA1dFVhU3F3M013Nk1SamM2d1ArOTdWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT3I0b2MrSCtkb2l4V3pMRmtoVVFlcHFZQWRLY2lmWUFnTVFQbHVJYzA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxdWNETnFtTldzRmg2cE40eFEySklSZ3FCUkE1aGN2OTJIdis1UXZNcXdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOUy8xbEk3QlBmdGI0TTBFZ3p3cDBheExmcG1yWGtnYzJKNTBLSVBCV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktUanhsZFp2Vm1WanByWEJzSVpVOUxKM2EvQ2lvNXkzZ3ovcU9PWGJGV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJmaUhzY09Pd0lqRHJWdGJteUZPL2F1MmY2NFphUVBpTHlZV0lJMnExOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDFWd0k4TnJXbnhjRy9oMnlvRmVWVENqeUZnVlRqNDF1MU9CbVAwWEpUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV5ZjhkZnV4d3FzVkthRzRlVnI0cW9jWTBFeG9BUlYyT1UrWnowLzNvMEthYkxnSy9hSml1N2Vla1dNWEpUZGF2ZmlMTi9kTlR5OTFwOXg0Sjc1b0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IjU4ZXhiRlg5U0d1U3V0M1BIUW5GSjg4azhZMlJmOWtHckxvK3YvRlZzR2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTEyMTkyMTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcyQjlGMTIyMjJEMDhCRTQ2ODBFNUFGRUFGMEMzRTA3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA3MDY4NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMjlDNDc4MkU0RjQ1MDYzNEFEQjYyMjAxRDE0MjY2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNzA2ODUwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFOWJMUWJ1RlFweXZyZnpWUEFrVlh3IiwicGhvbmVJZCI6IjVjNDM5OTE5LTA2OTItNGZjMS05ODBjLWQ1MTIwYWUyYjkxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUmRjQzd2aHc5azY2ZmgwVEYxLzZZWThWOWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzZEWUUxWG1yVUFWWS9vSHh6dmJwL2VnazIwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFNWThZUDYxIiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDQVNFWVJIT0RFUyDwn4yfIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJSGJ6UG9CRUpMN29ia0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJic1UwZ0tnS2tpS2RocHlIdFFVY2VZVEtpWTRQeXFVVkNwWDhHRHZibTE0PSIsImFjY291bnRTaWduYXR1cmUiOiJ3d2dWd0pzNDY1MEMxVE1oYnpFS3FwU1JkT1ZrTGZpTUZKYXZtRjFnMWN1YTk5SlJuRDZnQ2QzMDhXOHF3NFdad0VDbzRDWUtEWmg4VkRubGtVenVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWdhT3ZxdTRqc3NWQ0ZRdjlPZlVNK0tZSkVPOEgrN1FraGxOYS9Jc1oyZzNFMVB0RkwrODJiOXpjV1ZjMkJ5Nzl5K1NjTlN3U21XYWJUUUlDWkJEREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTIxOTIxMTk6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXN0ZOSUNvQ3BJaW5ZYWNoN1VGSEhtRXlvbU9EOHFsRlFxVi9CZzcyNXRlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNzA2ODQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhoeSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "CASEYRHODES",
  packname: process.env.PACK_NAME || "THE DONN",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
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
