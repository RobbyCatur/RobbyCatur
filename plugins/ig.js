let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!(args[0])) throw `Masukkan link Instagram yang ingin didownload!`
     else m.reply('Proses')
  let me = conn.user.name
  let res = await fetch('https://hadi-api.herokuapp.com/api/instagram?url=' + args[0])
  let json = await res.json()
  let txt = `
${me} Instagram downloader
`.trim()
  conn.sendFile(m.chat, json.result, 'ig.mp4', txt, m)
}
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^ig$/i

handler.limit = false

module.exports = handler
