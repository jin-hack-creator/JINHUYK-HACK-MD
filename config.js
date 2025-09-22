//#ENJOY BRO😍
// Credit: JINHUYK|jin-hack-creator 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/jin-hack-creator/JINHUYK-HACK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "242067274660";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://jinhuyk-pairing-server.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "JINHUYK;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZMWWc4RUZNNzVyQVdxQ0pXL1JQWGx5Q0JyTEM2VWU4WEhFY2FoaTVXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFMraFZQeHFCNE13OFNnWWZMUi95VG4zS1ZmZjhCVnQwRXJCMGZlMzdnMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSEZ1TXYrZ2xldVlNVEd5Vzl6U01Nd2dZbDdKYmY4ZGM4c1N0eWtDRUZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZbG9VYzU1VndYdVpBV3B6UWpHU1B5RWtIai9yOHc5L2RBK0dGUHZMVGxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLemcyaDR3MFNTeTgvakZTeFppYnFuQTZHQ3ByREFXSmtDdGNMNHFoa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJN2MrUWd3SnJqYWZxOVgxVjUwSmpxS3RuMGVzUXB3YmRaWlVGVStXelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNjQWlMZ1VNV3VJVkFOdFdpem83SDk5dU0yQ0pMV05INTRuMndPK3Nubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQis0VVg0RXBhNjVlNjFVSUlxeVhCcnU4ekduM1lLTTVxTnFDcFNMRnJ6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik81aXFOS2hid1lwL3lnQ3pwdEh3TGdlcFRUZ0VqcFNtcFJkUzdGL2pPZVR6UTZCSDUwSGlYMEQ5M1YwTTlGcE5WcGNoWE1FcUNVQXZBYVFDb1Bkc2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJZK0xJRVQ1UDgrampWWFFZSHRUNkVOMHRTaW9wNTBzOUlUa0M5d1BXdk44PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNKYWJ1dVFIRU1HcnhjWUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHY25ZTVg4TEx1RFR6YS9PRGQvYzUyT0tEM3ZPS1E2R0xFdU9SREd3SnhjPSIsImFjY291bnRTaWduYXR1cmUiOiJHRjlHamNoZkI4dG9JeWZNT2dNMDNNYjU2Q2lPenJ4Z09qUVhCUFJzTHdDV1ZEbW1oV2xoSDZiYWwrbVZ4cjh1MFlhazdEZHR5cjRwdTZQck5pYnBCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoialB2TnV2Z2ZvQ0ErR3czbzVHdjVXSVl6VFI4VlJMUnZsWm93THRwVU9nNkJoUjBIMkpkWWx5dkFnVXIrQ0F4T21pZ0lhNzQwd1FrYllscnlXVWpZZ3c9PSJ9LCJtZSI6eyJpZCI6IjI0MjA2NzI3NDY2MDo4MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4NDgxNzIyNDMxMDgwNzo4MEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQyMDY3Mjc0NjYwOjgwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJuSjJERi9DeTdnMDgydnpnM2YzT2RqaWc5N3ppa09oaXhMamtReHNDY1gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODU0OTQ3NCwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBVTkifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂jin-hack-creator🍂",
  packname: process.env.PACK_NAME || "🍂JINHUYK-HACK-MD🍂",
  botname: process.env.BOT_NAME || "JINHUYK-HACK-MD",
  ownername: process.env.OWNER_NAME || "🍁jin-hack-creator🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK-HACK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
