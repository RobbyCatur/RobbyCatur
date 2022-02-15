let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
	m.reply('Proses')
	let me = conn.user.name
	let res = await fetch(`https://docs-jojo.herokuapp.com/api/pinterest?url=` + args[0])
	let json = await res.json()
	let url = json.result
	conn.sendFile(m.chat, url, 'pin.jpg', `${me} pinterest downloader`, m)
	}
	handler.command = /^pin$/i

module.exports = handler
