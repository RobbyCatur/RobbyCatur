let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://hardianto.xyz/api/instagram?url=` + args[0])
  let json = await res.json()
  conn.sendFile(m.chat, ${json.url_mp3}, m)
  }
  handler.command = /^igmp3$/i
  module.exports = handler
