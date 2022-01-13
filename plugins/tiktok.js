let fetch = require('node-fetch')
let handler = async (m, { conn, args, isOwner }) => {
	m.reply('Proses')
  if (!args[0]) throw 'Send linknya'
 // if (!isOwner) throw `Maaf, sementara fitur ini dinonaktifkan dulu karena terdapat bug`
  let me = conn.user.name
  let res = await fetch(`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=` + args[0])
  let json = await res.json()
  let url = json.download
  let txt = `
${me} Tiktok Downloader
    `
    if (json.download) await conn.sendFile(m.chat, url, 'tiktok.mp4', txt.trim(), m)
      else throw `Server error`
}
handler.help = ['tiktok', 'tt', 'tik'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^t(ik)?t(ok)?$/i
handler.limit = true
module.exports = handler
