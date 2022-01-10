let handler = async (m, { conn }) => {
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  let user = global.db.data.users
  let totalreg = Object.keys(global.db.data.users).length
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let d = new Date(new Date + 3600000)
  let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let noww = time - uptime
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
Bot telah berjalan pada ${noww}
`.trim(), m)
}
handler.command = /^infobot$/i
module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
