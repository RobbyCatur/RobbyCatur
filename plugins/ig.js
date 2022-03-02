let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  m.reply('Proses')
  let me = conn.user.name
  let res = await fetch('https://api.lolhuman.xyz/api/instagram?apikey=c6670fc7e461b7623a8fdf9f&url=' + args[0])
  let json = await res.json()
  let result = json.result[0]
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
