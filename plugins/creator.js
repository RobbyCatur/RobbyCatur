function handler(m) {
  this.sendContact(m.chat, '6282245409072', 'Robby Catur', m)
}
handler.help = ['creator', 'owner']
handler.tags = ['info']
handler.command = /^(creator|owner)$/i

module.exports = handler
