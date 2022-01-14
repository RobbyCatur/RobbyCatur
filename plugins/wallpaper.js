let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (text) m.reply('Proses')
  else m.reply('Masukkan query!')
  let res = await fetch('https://api.lolhuman.xyz/api/wallpaper?apikey=c6670fc7e461b7623a8fdf9f&query=' + text )
  let json = await res.json()
  let result = json.result
  if (json.result) await conn.sendFile(m.chat, result, 'wp.jpg', `Wallpaper ${text} by Robby Catur`, m)
  else throw `Wallpaper ${text} tidak ditemukan`
  }
  handler.help = ['wp', 'wallpaper'].map(v => v + '<teks>')
  handler.tags = ['internet']
  handler.command = /^wp|wallpaper$/i
  module.exports = handler
