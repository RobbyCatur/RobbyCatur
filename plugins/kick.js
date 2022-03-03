let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let who = m.mentionedJid ? m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid))) : m.qouted ? m.quoted.sender : ''
  await conn.groupRemove(m.chat, [who])
}
handler.help = ['kick', '-'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

