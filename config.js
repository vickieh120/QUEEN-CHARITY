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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/hyBlMCC.mp4,https://i.imgur.com/2nLlxiB.jpeg";
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
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/hyBlMCC.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VGc2tadFNTNFZ1bUs3eUdINUNFV2hZL2wzRU1jWXdoQ2JSSFE2VGNFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGpJWFhZdDhBVEN6dUxXNTJVZVpPQnVabDVvNG9lQVY2dG0vZDNqa01sVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSE9VRmU3VlB0aG1GbW1WcHdxbmdseHdMeWJXckoyNFRaNGh5OVJCZTNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxV3B6d2p4ck5Td2hMK1hCOHhjQTBaWDV0dkhSNjBKVUk5VDlCNS9penp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FOVdqbFQ5RnYwUFY1Vml0Ny92MzZ1YkZSeFBINHE3VFJHNUpHVklaVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpBMnRzRGUwQVV5Y21LZTZiRUNGVFVmWm1MTTZwL1lpTEVtazFqdHY2QU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0I0RWVhMUJWM0RBbkR4L084VkN1eTFoRC9ZOUZTY05LM3ZBeFk5T1dtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG5QaGFnYVRTZzV6d3dQeUZQK2RZbWZjL3lIUXNCUWwvMzlkSmRVejFWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJiT2R3YzVKTTBvQ3lZYi9PeWJkYTRHTi85VUpzYVRsTFIwalVKRnNmN3krSzk4V3k2OERXVGxQSFpieENZekFQWkZvM0hQbDh4NmFhUjVDMUhub0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6Ijd4VnBBclVLbHNBQXpFWTN5YWdnR1EyRjJKRzF0Q1U2bis1SlNTWUFwSlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImQ5OXIxLU9pUTItcHhUcV85VFRpckEiLCJwaG9uZUlkIjoiYjUxYjJiYTYtNWZmNy00ZDVmLTkzZDQtYzJlMGExZGFlOGFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklrWUhLdkRuTmRXc2QyVXNvQWFpbmFqM2xtQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUDcyRjhxenVRZlVSSDUzdWtwakI4UU4rcUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjJIVkVKNEMiLCJtZSI6eyJpZCI6IjI1NDExMjE5MjExOTozNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWZielBvQkVJcW50TGtHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYnNVMGdLZ0traUtkaHB5SHRRVWNlWVRLaVk0UHlxVVZDcFg4R0R2Ym0xND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOUlkWVd1RHk3VnZBTDV5emdlV29wT3VjQm8vd3lWN2ZIWUpBSDgvUnMyejdmMWY1ZnMzbFJ3UlZsYlpGWjAzcGVuM1lUQzR1YklnUFNzQk9ILzlvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IjYvaXhqVG9WRjFYbTZ6T1hkWjE0R0dDekh1ZW5ZUFBqeHlCeHdJbjg4YlFBVkk3UDYxK2xRdks0bzY3cGlCUTBRYXlyQlpPZXVkNlAxOUdjZEFha0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMTkyMTE5OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc3Rk5JQ29DcElpbllhY2g3VUZISG1FeW9tT0Q4cWxGUXFWL0JnNzI1dGUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEwMDczODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGh5In0=" // session id here
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
