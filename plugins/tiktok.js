let fetch = require('node-fetch')
let handler = async (m, { conn, args, isOwner }) => {
	m.reply('Proses')
  if (!args[0]) throw 'Uhm...url nya mana?'
 // if (!isOwner) throw `Maaf, sementara fitur ini dinonaktifkan dulu karena terdapat bug`
  let me = conn.user.name
  let res = await fetch(`https://erdwpe-api.herokuapp.com/downloader/tiktok?url=` + args[0])
//  if (res.status !== 200) throw `Server error!`
  let json = await res.json()
//  if (!json.status) throw json
  let url = json.result.nowatermark
  let txt = `
${me} Tiktok Downloader
    `
    await conn.sendFile(m.chat, url, 'tiktok.mp4', txt.trim(), m)
}
handler.help = ['tiktok', 'tt', 'tik'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^tt|t(ik)?tok$/i
handler.limit = true
module.exports = handler
