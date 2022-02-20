let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  m.reply('Proses')
  let me = conn.user.name
  let res = await fetch('https://api-xcoders.xyz/api/download/ig?url=' + args[0] + '&apikey=DPZDDDpHHM')
  let json = await res.json()
  let result = json.result.url
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
