let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  m.reply('Proses')
  let res = await fetch(global.API('LeysCoder', '/api/lirik', {
  q: text
}, 'APIKEY'))
  let json = await res.json()
  let result = json.result
  conn.reply(m.chat, result, m)
  }
handler.command = /^(lirik)$/i
module.exports = handler