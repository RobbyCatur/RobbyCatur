let handler = async (m, { conn }) => {
	m.reply('Proses')
  conn.sendFile(m.chat, `https://docs-jojo.herokuapp.com/api/quotes-image`, 'quotes.jpg', `Quotes image © Robby Catur`, m)
  }
  handler.command = /^q(uotes)?(image|img)$/i
  module.exports = handler