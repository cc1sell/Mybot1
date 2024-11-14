

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')




cmd({
    pattern: "fb",
    alias: ["fbdl","fb2"],
    react: "🍧",
    desc: "",
    category: "download",
    use: '.fb < url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me tiktok url");
  if(!q.includes('facebook.com')) return await reply("This url is invalid");
  
const fb2 = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/fbdl1?url=${q}`);
  
  


// SEND HD VIDEO
await conn.sendMessage(from, { video: { url: fb2.result.sd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });
await conn.sendMessage(from, { video: { url: fb2.result.hd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply(e)
}
})
