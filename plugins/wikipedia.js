let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  m.reply('Proses')
  let res = await fetch('https://docs-jojo.herokuapp.com/api/wiki?q=' + text )
  let json = await res.json()
  let result = json.result
  let img = json.img[0]
  conn.sendFile(m.chat, img, 'img.jpg', result, m)
  }
  handler.command = /^wiki|wikipedia$/i
  module.exports = handler
