let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  let res = await fetch('https://leyscoders-api.herokuapp.com/api/lirik?q=' + text + '&apikey=dappakntlll')
  let json = await res.json()
  conn.reply(m.chat, json.result, m)
}
handler.command = /^(lirik)$/i
module.exports = handler
