let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	m.reply('Proses')
  let res = await fetch('https://docs-jojo.herokuapp.com/api/nekonime')
  let json = await res.json()
  let result = json.result

  if (json.result) await conn.sendFile(m.chat, result, 'neko.jpg', `Nih`, m)
  else throw `Not Found`
}
  handler.help = ['neko']
  handler.tags = ['wibu']
  handler.command = /^neko$/i
  module.exports = handler