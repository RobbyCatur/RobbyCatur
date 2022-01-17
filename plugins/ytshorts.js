let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  m.reply('Proses')
  let res = await fetch(`https://api.lolhuman.xyz/api/ytreels?apikey=c6670fc7e461b7623a8fdf9f&url=` + args[0] )
  let json = await res.json()
  let url = json.result.link
  let img = json.result.thumbnail
  let teks = `
*Title:* ${json.result.title}
*Size:* ${json.result.size}
`.trim()
await conn.sendFile(m.chat, img, 'img.jpg', teks, m)
conn.sendFile(m.chat, url, 'ytshorts.mp4', teks, m)
}
handler.command = /^ytshort(s)$/i

module.exports = handler