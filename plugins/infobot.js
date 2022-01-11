let handler = async (m, { conn, _p }) => {
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  let user = global.db.data.users
  let totalreg = Object.keys(global.db.data.users).length
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  conn.reply(m.chat, `
*Info Bot:*
Total Chat : ${chats.length}
Total Grup : ${groups.length}
Grup Join : ${groupsIn.length}
Grup Out : ${groups.length - groupsIn.length}
Chat Pribadi : ${chats.length - groups.length}

User Bot : ${totalreg}
User Terdaftar : ${rtotalreg}

Bot telah berjalan selama ${uptime}
`.trim(), m)
}
handler.help = ['infobot']
handler.tags = ['owner']
handler.command = /^infobot$/i

handler.owner = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
