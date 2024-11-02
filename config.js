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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lxUVJtU3VLQ0U3eU5UQnY0eXZwaXpBR3ZkWTlKZnZEa3VOME5mNGoyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVVnNWFXeW50T0JJZW9nYnlISXFJUnRxelVzeVBKQlZEREdRM1RIQkhGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR2Irc0F3aVhHSGlMNlJaeWErRTNiNEVLQmtSRElIRHdjN3JqM3ZMem5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0STBpU1Ryb1NaVGkxbXV1UlVtS2xwVno2TEF0MUtNM3cxai9Ob1VMUENNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLUmZjZmlLMXJpdm05THYrZ0JRK3NGdklwQ2FBMXZ1OVE1VTBoU2lnVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZzNUZvSENLR0ZHTkthd1FJWUJ6N0hkNDVzZlQyaUVJVkpzUDZhNUErVEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVKbnJ0RlhGMklSeFJHb1BkVHliTjZEcTI3Zlgxc1h4ZFBFVnlMMVIyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXA3QTFBUm1oZGUvRC9mN3hpM2gxNDFDTmhSQlpIcmRHbDhhVjRySUVEVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlYb0EvZ0E4Z3JKbVVmb0llMUp5R01MUXVKQmJaMFNXd2xlRVlReFRLMDNoQzg2dlRyN3JkS0JUczlwaTRhczZKUUhrUFQvK2cydnZGMmVXSW5aOGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6Ino5dDBrY1QzSFpaV3VsbExhUVVyU1JDczJkQitqSW9RNnFEbzc5Y2xQMkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTAxMDIyNTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk2NDdEQkVCQTlBMTEzQTE2NTY5QjMwMzdBQTg0OTVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA1ODE3ODB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwMTAyMjU1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQzM3OUFCMjM2RkU0MDMzNkIzQzdBRDdDQ0QyNTFERiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNTgxNzgxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMDEwMjI1NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzM4NTk2QzRDMkExMDJEN0MzOUIwRENFOTA4REM2NkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDU4MTc4NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTAxMDIyNTUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNCREFCMDU2MTk0RkQzMEU1NjQ3REUwRjAzNkFFQ0U2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA1ODE3ODR9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpleG12ZGY4UXh1bGh3cm1oQjA2MEEiLCJwaG9uZUlkIjoiYmQ3MTY2MTgtZGJjYS00NmM3LWIwMjUtNWFlNTkwMzkwYjliIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJReTJ1REU4cG4vcEQ2NTNXSE1NQTFnd1ZoQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRm44RVZMeG0yZlNoSFozZ0hPQ0RidEtreDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTdNODFKRUsiLCJtZSI6eyJpZCI6IjI1NDEwMTAyMjU1MTo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNBU0VZUkhPREVTIFRFQ0ggTUVESUEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lIK2xhY0RFSWFxbXJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRtSHZtckVUZmRsVHV2TlVIZEViMUMvaUJDTlllc1FZQ0RzQy9vcVI4bGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFZaXVBK1NVVUkrRlAycUV6Q2xLamZna04zcVUrYXVZR20xME5ZSk1kbGpmcFZLY0UvbUZYTHJ5bk16YURNcmNjR21FMkQybmp4ZUdTL3dXaU01aUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqbUFGY1BEbTNBbmkrRUFZWjlQMk9lNVBmcXQzQ2dhME9xaVI1Y3NtZ3d4VkNzYVZpU0VDYU1KNkY5OVBkdVBVSXFOY0ZDZjhPRE5BM2JBSkJESkdqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDEwMTAyMjU1MTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJaaDc1cXhFMzNaVTdyelZCM1JHOVF2NGdRaldIckVHQWc3QXY2S2tmSloifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA1ODE3NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3NGIn0=" // session id here
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
