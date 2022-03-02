let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (text) m.reply('Proses')
    else m.reply('Masukkan lirik yang ingin dicari!')
  let res = await fetch('https://leyscoders-api.herokuapp.com/api/lirik?q=' + text + '&apikey=dappakntlll')
  let json = await res.json()
  conn.reply(m.chat, `Lirik lagu ${text}\n\n${json.result}', m)
}
handler.command = /^(lirik)$/i
module.exports = handler
