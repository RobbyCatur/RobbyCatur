let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  m.reply('Proses')
  let res = await fetch('https://erdwpe-api.herokuapp.com/randomimg/ppcouple')
  let json = await res.json()
  let male = json.male
  let female = json.female
  conn.sendFile(m.chat, male, 'male.jpg', `Male`, m)
  conn.sendFile(m.chat, female, 'female.jpg', `Female`, m)
  }
  handler.command = /^ppcp$/i
  module.exports = handler