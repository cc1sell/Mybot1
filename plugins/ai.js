const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
cmd({
    pattern: "ai",
    react: "🚀",
    desc: "ai chat",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
});


cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '𝗣𝗶𝗻𝗴𝗶𝗻𝗴...' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `📍 Ping : ${ping}ms` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});


cmd({
    pattern: "gemini",
    react: "🚀",
    desc: "ai chat",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.vihangayt.com/ai/gemini?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
});

