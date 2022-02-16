const fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  let res = await fetch('https://api-xcoders.xyz/api/download/ytmp3?url=' + args[0] + '&apikey=DPZDDDpHHM')
  let json = await res.json()
  let url = json.result.url
  let thumb = json.result.thumbnail
  let teks = `
Judul: ${json.result.title}
File size: ${json.result.size}
Link: ${json.result.url}
`.trim()
  let txt = `
Judul: ${json.result.title}
File size: ${json.result.size}
`.trim()
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', teks, m)
  conn.sendFile(m.chat, url, 'ytvideo.mp4', txt, m)
  }
  
  handler.help = ['ytmp4', 'ytv', 'ytvideo']
  handler.tags = ['downloader']
  handler.command = /^(ytv(ideo)?|ytmp4)$/i
  module.exports = handler