let handler = async (m, { conn }) => {
  m.reply('Proses')
  conn.sendFile(m.chat, (`https://api.lolhuman.xyz/api/random/estetic?apikey=c6670fc7e461b7623a8fdf9f`), '', `Aesthetic banget kan`, m)
  }
  handler.help = ['wpaestetik', 'wpaesthetic', 'wallpaperaestetik', 'wallpaperaesthetic']
  handler.command = /^w(all)?p(aper)?aest(h)?eti(c|k)?$/i
  module.exports = handler
