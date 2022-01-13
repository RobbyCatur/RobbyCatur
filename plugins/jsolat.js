const fetch = require('node-fetch')

let handler = async (m, { conn, text } => {
	m.reply('Proses')
  let res = await fetch(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=` + text )
  let json = await res.json()
  let result = `
  Jadwal sholat untuk ${text}

Imsyak : ${json.Imsyak}
Subuh : ${json.Subuh}
Dhuha : ${json.Dhuha}
Dzuhur : ${json.Dzuhur}
Ashar : ${json.Ashar}
Maghrib : ${json.Maghrib}
Isya : ${json.Isya}
`.trim()
  if (result) await m.reply(result)
  else throw `Kota tidak ditemukan`
  }
  handler.conmand = /^j(adwal)?(sholat|salat|solat|shalat)$/i
  module.exports = handler