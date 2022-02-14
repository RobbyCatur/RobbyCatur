let fetch = require('node-fetch')

let handler = async (m, { conn. args }) => {
  let res = await fetch(`https://docs-jojo.herokuapp.com/api/pinterest?url=` + args[0])
  let json = await res.json()
  let result = json.result
  conn.sendFile(m.chat, result, 'pinterest' + ${json.type == 'image' ? '.jpg' : '.mp4', `tes`, m)
  }
  handler.command = /^pin$/i

module.exports = handler