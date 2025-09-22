const axios = require("axios");
const {
  smd
} = require("../lib");
const fetch = require("node-fetch");
async function randomeFunfacts(_0x1be35e) {
  try {
    if (_0x1be35e === "question") {
      return await random_question();
    } else if (_0x1be35e === "truth") {
      return await truth();
    } else if (_0x1be35e === "dare") {
      return await dare();
    } else if (_0x1be35e === "joke") {
      const _0x4fe671 = await (await fetch("https://official-joke-api.appspot.com/random_joke")).json();
      return "*Joke :* " + _0x4fe671.setup + "\n*Punchline:*  " + _0x4fe671.punchline;
    } else if (_0x1be35e === "joke2") {
      const _0x1cc76d = await (await fetch("https://v2.jokeapi.dev/joke/Any?type=single")).json();
      return "*joke :* " + _0x1cc76d.joke;
    } else if (_0x1be35e === "fact") {
      const {
        data: _0x202058
      } = await axios.get("https://nekos.life/api/v2/fact");
      return "*Fact:* " + _0x202058.fact;
    } else if (_0x1be35e === "quotes") {
      const {
        data: _0x6d4253
      } = await axios.get("https://favqs.com/api/qotd");
      return "╔════◇\n║ *🎗️Content:* " + _0x6d4253.quote.body + "\n║ *👤Author:* " + _0x6d4253.quote.author + "\n║\n╚════════════╝";
    }
  } catch (_0x1147af) {
    msg.error(_0x1147af);
    console.log("./lib/asta.js/randomeFunfacts()\n", _0x1147af);
  }
}






smd({
  cmdname: "fact",
  info: "Sends fact in chat.",
  type: "fun",
  filename: __filename
}, async (_0x1dc7e3, _0x16aaa1, {
  smd: _0x375b98
}) => {
  try {
    await _0x1dc7e3.reply(await randomeFunfacts(_0x375b98));
  } catch (_0x1e1a8b) {
    await _0x1dc7e3.error(_0x1e1a8b + "\n\ncommand: " + _0x375b98, _0x1e1a8b);
  }
});
smd({
  cmdname: "quotes",
  info: "Sends quotes in chat.",
  type: "fun",
  filename: __filename
}, async (_0x12963f, _0x4f30d2, {
  smd: _0x3462d1
}) => {
  try {
    await _0x12963f.reply(await randomeFunfacts(_0x3462d1));
  } catch (_0x18e714) {
    await _0x12963f.error(_0x18e714 + "\n\ncommand: " + _0x3462d1, _0x18e714);
  }
});
smd({
  cmdname: "define",
  info: "urban dictionary.",
  type: "fun",
  filename: __filename
}, async (_0x460337, _0x614c0a) => {
  try {
    let _0x328d73 = _0x614c0a ? _0x614c0a : _0x460337.reply_text;
    if (!_0x328d73) {
      return await _0x460337.send("*_Hey " + _0x460337.senderName + ", please provide a text!_*");
    }
    let {
      data: _0x330600
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x328d73);
    var _0x27eb8f = _0x330600 ? "*Word:* ```" + _0x328d73 + "``` \n*Definition:* ```" + _0x330600.list[0].definition.replace(/\[/g, "").replace(/\]/g, "") + "``` \n*Example:* ```" + _0x330600.list[0].example.replace(/\[/g, "").replace(/\]/g, "") + "```" : "*_No results found for given word_*";
    return _0x460337.reply(_0x27eb8f);
  } catch (_0x1d0916) {
    await _0x460337.error(_0x1d0916 + "\n\ncommand: define", _0x1d0916, "*No result for:* ```" + text + "```");
  }
});


smd({
   pattern: 'lines',
   fromMe: false,
   desc: 'Get a nice message',
   type: 'fun'
}, async (message, match) => {
   try {
       const response = await axios.get('https://api.maher-zubair.tech/misc/lines');
       const messageText = response.data.result;
       
       await message.send(messageText, { quoted: message.data });
   } catch (error) {
       console.error('Error fetching message:', error);
       await message.send('_Failed to fetch message._', { quoted: message.data });
   }
});
