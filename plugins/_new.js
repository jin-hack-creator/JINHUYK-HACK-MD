let {
   runtime,
   formatp,
   prefix,
   smd,
   smdBuffer,
 } = require("../lib");
 const axios = require("axios");
 const fetch = require("node-fetch");
 const os = require("os");
 const speed = require("performance-now");
 const Config = require("../config");
 const cheerio = require("cheerio");
 smd(
  {
    pattern: "channel",
    desc: "Dev Channel",
    react: "⛓️",
    category: "user",
    filename: __filename,
  },
  async (message) => {
    const channelMessage = `꧁ JINHUYK-MD SUPPORT ࿇꧂└ 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 𝙎𝙐𝙋𝙋𝙊𝙍𝙏\n\n _ʜᴇʏ ʜᴇʀᴇ's ᴏᴜʀ ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ, ᴘʟᴇᴀsᴇ ғᴏʟʟᴏᴡ ᴀɴᴅ sᴜᴘᴘᴏʀᴛ ᴜs ᴛᴏ ᴋᴇᴇᴘ ᴛʜɪs ᴘʀᴏᴊᴇᴄᴛ ᴀʟɪᴠᴇ_\n *ʟɪɴᴋ:* https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41\n\n ${Config.botname} *©kang jinhuyk*`;

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
    };

    await message.send(channelMessage, { contextInfo });
  }
);
smd(
  {
    pattern: "support",
    desc: "Dev Support",
    react: "⛓️",
    category: "user",
    filename: __filename,
  },
  async (message) => {
    const SupportMsg = `꧁ JINHUYK-MD SUPPORT ࿇꧂ 𝙎𝙐𝙋𝙋𝙊𝙍𝙏 FOR ALL YOUR CONCERNS, JOIN WHATSAPP SUPPORT TO FIND SOLUTIONS! \n\n *WHATSAPP SUPPORT :* https://chat.whatsapp.com/GNsD6DEfgN2BKaN3qmJYCe\n\n ${Config.botname} *©️Kang jinhuyk*`;

    const contextInfo = {
      forwardingScore: 999,
      isForwarded: true,
    };

    await message.send(SupportMsg, { contextInfo });
  }
);
