let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
	m.reply('Proses')
  if (!args[0]) throw 'Uhm...url nya mana?'
  let me = conn.user.name
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=c6670fc7e461b7623a8fdf9f&url=` + args[0])
//  if (res.status !== 200) throw `Coba lagi`
  let json = await res.json()
//  if (!json.status) throw json
  let url = json.result.link
  let txt = `
${me} Tiktok Downloader
    `
    await conn.sendFile(m.chat, url, 'tiktok.mp4', txt.trim(), m)
}
handler.help = ['tiktok', 'tt', 'tik'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tt|tik(tok)?(dl)?)$/i
handler.limit = true
module.exports = handler
