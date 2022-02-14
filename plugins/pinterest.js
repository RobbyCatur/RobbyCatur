const fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  m.reply('Proses')
  let res = await fetch('https://docs-jojo.herokuapp.com/api/pinterest?url=' + args[0]}
  let json = await res.json
  let type = json.type
  let result = json.result
  let teks = `
${me} Pinterest Downloader
Media Type: ${type}
`.trim()
  if (json.result) await conn.sendFile(m.chat, result, 'pinterest.jpg', teks, m)
    else throw `Cannot find media`
}

handler.help = ['pinterest']
handler.tags = ['downloader']
handler.command = /^pin(terest)?$/i

module.exports = handler
