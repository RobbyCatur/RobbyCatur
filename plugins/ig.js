const HX = require('hxz-api')

let handler = async (m, { conn, args }) => {
  m.reply('Proses')
  let me = conn.user.name
  let txt = `
${me} Instagram downloader
`.trim()
  let result = HX.igdl(args[0]).then(res => conn.sendFile(m.chat, res.medias[0].url, '', txt, m))
}
handler.command = /^ig$/i
module.exports = handler
