let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw `Masukkan lirik lagu yang ingin dicari!\nContoh: ${usedPrefix}lirik menepi`
  let res = await fetch('https://leyscoders-api.herokuapp.com/api/lirik?q=' + text + '&apikey=dappakntlll')
  let json = await res.json()
  conn.reply(m.chat, `Lirik lagu ${text}\n\n${json.result}', m)
}
handler.command = /^(lirik)$/i
module.exports = handler
