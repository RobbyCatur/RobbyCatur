let fetch = require('node-fetch')
let handler = async (m, { conn, args, isOwner }) => {
	m.reply('Proses')
  if (!args[0]) throw 'Uhm...url nya mana?'
  if (!isOwner) throw `Maaf, sementara fitur ini dinonaktifkan dulu karena terdapat bug`
  let me = conn.user.name
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=c6670fc7e461b7623a8fdf9f&url=` + args[0])
  if (res.status !== 200) throw `Server error!`
  let json = await res.json()
//  if (!json.status) throw json
  let url = json.link
  let txt = `
${me} Tiktok Downloader
    `
    await conn.sendFile(m.chat, url, 'tiktok.mp4', txt.trim(), m)
}
handler.help = ['tiktok', 'tt', 'tik'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^t(ik)?t(ok)?$/i
handler.limit = true
module.exports = handler
