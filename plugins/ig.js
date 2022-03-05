let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (args) m.reply('Proses')
     else m.reply('Masukkan link Instagram yang ingin di download!')
  let me = conn.user.name
  let res = await fetch('https://hadi-api.herokuapp.com/api/instagram?url=' + args[0])
  let json = await res.json()
  let txt = `
${me} Instagram downloader
`.trim()
  conn.sendFile(m.chat, result, 'ig.jpg', txt, m)
}
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^ig$/i

handler.limit = false

module.exports = handler
