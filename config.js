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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FKMjJKTU9MQmNIWUVvR20xSkprQlpndktCNDdQUERURzI4MW01bi8zTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHViR0dSeTNTTDQ5K0liR1F5TUNWQXBsK0c5QWFoU0hOZ3ZQV2VLVlN3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQnNkdUFyRVVwb0FzNDRhMUZScXIxYk5FdExFRllIZ0JvYmgwYk5VamtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUythL0tMS1hvVzFPRkJDRzZ4K3B3TENqbkRScEJ6Q2UwclF5K0w5VHlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDRG5EU0Vjc25VVVIrSklSYzNhTnc2Y2dzcDl4Y21ma2dURzBjYUIzRUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFzdDR2Zk4vYlBJOGRJY3kxeVhLdnM5L2tNdlRsdEdhdHVMWWVPSHB3Z3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtHNm5KeGR4TytNWEpCTjJuMDJ2Yy9KQXBkeXhUcFJIdHR5cmV1RlhXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmRXbWlaZ0ttekpuNzB2cUtESFNOOGU3dkNQWG91Wm5aclFuRSs4alNTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVZbCsyaWlZM3duNHFRa3RZUHlGK0dYNUF6OXFSaTltVG9zVzhzM01VMXhGVHcxLzZmVXZEdVFNQ3V0V0lOL2ExYWxwdHVhS1BOQ2xVL3Y2eUpkRmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IlhlcTgvc2RxQmtrODQ5cnBlU0R5YWE1R1p4eDMzbWlSY2hWSGFPMnB3OWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTEyMTkyMTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU0NEY3N0FERTNBMDY5RUNDQjU2MTVCRUY5ODQ4OTlDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA3NDgyOTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4ODNEQTc1NjI4NTFGQzRDQTQwQjg0RTIyNDJDMjZCMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNzQ4MjkxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3U19tb0EzbVNpR3MtN3gxdkxJbXN3IiwicGhvbmVJZCI6IjRjYjM1NmRjLWRhZDctNGY3MC05NDczLTMyNTA1YzZiYmM0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTaUN2bkQzSHc2WFlUdnhSY1Y0cXRJU2swbkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnVxd1hHRWtVeHBOSktiOURqU0NWZm1TOHYwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJHQ0VFQUY0IiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDQVNFWVJIT0RFUyDwn4yfIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTGJ6UG9CRVBPK3BMa0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJic1UwZ0tnS2tpS2RocHlIdFFVY2VZVEtpWTRQeXFVVkNwWDhHRHZibTE0PSIsImFjY291bnRTaWduYXR1cmUiOiI2cUVMSHIwMzl5dWo4NFZZd2l3VWpyaGh3anBvUkhVZFl4cHVralloZm9NMFdNRmpXbHlFK1RJcW1vaWMyR0E0WG1sL0x3QVVKRWFNb01kSGdidVRDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTHUvbEkvRjRjNTQzdFFxUHhGd2M0SEx3aVpBRlc3MFlMVGo2MjY2b1N5anNUZGdFSitGZ1p2ZC9qbEpBUTRFcm1LYmk2SUpHRDJhb2ZwbGF3cm1nZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTIxOTIxMTk6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXN0ZOSUNvQ3BJaW5ZYWNoN1VGSEhtRXlvbU9EOHFsRlFxVi9CZzcyNXRlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNzQ4Mjg4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhpSSJ9" // session id here
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
