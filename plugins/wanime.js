let handler = async (m, { conn }) => {
  m.reply('Proses')
  let me = conn.user.name
  conn.sendFile(m.chat, (`https://api.lolhuman.xyz/api/random/wallnime?apikey=c6670fc7e461b7623a8fdf9f`), '', `Wallpaper for you by ${me}`, m)
  }
  handler.help = ['wanime']
  handler.tags = ['random']
  handler.command = /^wanime$/i
  module.exports = handler
