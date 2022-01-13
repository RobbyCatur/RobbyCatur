let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  m.reply('Proses')
  let res = await fetch('https://docs-jojo.herokuapp.com/api/waifu2')
  let json = await res.json()
  let img = json.img

  conn.sendFile(m.chat, img, 'waifu.jpg', `Istri Kartun`, m)
  }
  handler.help = ['waifu']
  handler.tags = ['wibu']
  handler.command = /^waifu$/i
  module.exports = handler