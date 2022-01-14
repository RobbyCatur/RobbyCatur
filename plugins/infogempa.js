let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
	m.reply('Proses')
  let res = await fetch(`https://docs-jojo.herokuapp.com/api/infogempa`)
  let json = await res.json()
  let img = json.map
  let result = `
*INFO GEMPA*

Waktu : ${json.waktu}
Magnitude : ${json.magnitude}
Kedalaman : ${json.kedalaman}
koordinat : ${json.koordinat}
Lokasi : ${json.lokasi}
Potensi : ${json.potensi}
`.trim()
  if (json.status == 200) await conn.sendFile(m.chat, img, 'img.jpg', result, m)
  else throw `Error Not Found`
  }
  handler.command = /^infogempa$/i
  module.exports = handler
