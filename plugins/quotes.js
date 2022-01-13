let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://docs-jojo.herokuapp.com/api/randomquotes')
  let json = await res.json()
  let quotes = json.quotes
  let author = json.author
  if (json.quotes) conn.reply(m.chat, `Random quotes\n\"${quotes}\" by ${author}`, m)
  else throw `Not Found`
  }
  handler.help = ['quotes']
  handler.help = ['random']
  handler.command = /^quotes$/i
  module.exports = handler
