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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0k2R2wvQjZzaWNSdmpCRkFtNjAyRzl5Z0ZySkRxbTlFRUo3eHB2eWJXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVM5VzZIRmVmc1ZmSno3Q0Y2TklTaDZQblBZZlBCakdFVko4V3JNdlprZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRjE4QmsxRVREb2Q4cHphVXoxOFMwZ2hObGdUZXp1WnZCeW9wNlk1dkU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMU9yTWRMM3p1a1daL1JXdlRyT203TXh0Z3Z0dkhYSGVBZng4SGpUQ3ljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBZ2pqc0cyS09zd1RVTXBuZWlETklXWms2UnNNR1VvMlA2YUpOUGVtR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc1bjRkTTVlM2dMaGJNSmdVbHBZRlNDNnF5cVRFTlphTXUxNU1KSWppZ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZIWUs5NVNRV0Rqd0svcmdUU2QzbjdTNUhrSHNkSmJXWGxXSUdzYnpGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHBzTFVaTmFqRGUxd2lSYlgxaWQybU5zR1ppdXlOWWdYa3Jid0ZyaGpUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpsNjB1aStBT3E0dnVDUUdFQ051UWdUK0sxNHhrVEFnS2h5bDVVUUdrOGdudzZVald5bkpRSDUwSXNNM1lSRWFqZEZvOTRpaExXaEhaeGtLaFpkNUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJ3bkJuL00yZWkrVVc4eW5UTnd6ZjJjcTlVT2FzRXo5RlRoTEVPTW9QUjBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MkUyRDdCM0E0RjYwNkFFRUQ1OTZDMkFFNkFDRkYwRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTkwNTg5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIxOTIxMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjdGNTMyNUYwRTFBQjU0M0YzNzNDMDVBRENCMDc1NkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDU5MDU4OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTEyMTkyMTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM3NEEyNzVGQzgzNzI2MDU0MURFRjU3QUJDRDgxMkU0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA1OTA1OTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNkFFOEQyRTUyRkNDMzEyMzhDMUJDRkZENjY3RjMwMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTkwNTkwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0SjdVV1F3N1NiS29wa1BsdWJOaG1nIiwicGhvbmVJZCI6IjMwMzlkN2VhLWNhOGMtNGVlOS1hOGIwLWE0NzNlMTE5ODRjZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzVlhPUE9NSTVmN3NnNGgwTER2U2FOdVo3eDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEhVOHNETHdSenA1WWxzcm9BdVBXYmpScEVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdERVg0OVFYIiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6ODhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0FTRVlSSE9ERVMg8J+MnyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHphelBvQkVPN3VtcmtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYnNVMGdLZ0traUtkaHB5SHRRVWNlWVRLaVk0UHlxVVZDcFg4R0R2Ym0xND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWIvQ0c2Y3NkQzhiV09OZkpiUVNhV1kwckJhSmtuODFEOHUxQzdseE5qUlhNYUZKNHc2UUZFR0w1ZFNqb3Y2cXJ5bHhHWnlIZXVodmRSU2RMRjBPRHc9PSIsImRldmljZVNpZ25hdHVyZSI6InVmZW5jbVBzSGRoR1dHSWY2bEZ3Y2NoRTIwZU8yMXZHRW1hVkRwU1dncVpHeklYMkZOWUJrOWlkOUdwNHh1ajVod0tTMk4vbGZGcVZVVDVjSzRSM0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMTkyMTE5Ojg4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc3Rk5JQ29DcElpbllhY2g3VUZISG1FeW9tT0Q4cWxGUXFWL0JnNzI1dGUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA1OTA1ODYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGh5In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
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
