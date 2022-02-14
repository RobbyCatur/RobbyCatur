let fetch = require('node-fetch')

let handler = async (m, { conn. args }) => {
  let res = await fetch(`https://docs-jojo.herokuapp.com/api/pinterest?url=` + args[0])
  let json = await res.json()
  let result = json.result
  let type = json.type
  conn.sendFile(m.chat, result, 'pinterest' + ${type == 'video' ? '.mp4' : '.jpg'}, `tes`, m)
  }
  handler.command = /^pin$/i

module.exports = handler
