const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const WSF = require('wa-sticker-formatter')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let wsf = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas gambar dengan caption *${usedPrefix + command}*`
      wsf = new WSF.Sticker(img, {
            pack: global.packname,
            author: global.author,
            crop: false,
            })
    } else if (/video/.test(mime)) {
    if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download()
      if (!img) throw `balas video/gif dengan caption *${usedPrefix + command}*`
      wsf = new WSF.Sticker(img, {
            pack: global.packname,
            author: global.author,
            crop: false,
    } else if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
      wsf = new WSF.Sticker(img, {
            pack: global.packname,
            author: global.author,
            crop: false,
            })
    } else if (args[0]) {
      if (isUrl(args[0])) wsf = new WSF.Sticker(img, {
            pack: global.packname,
            author: global.author,
            crop: false,
            })
      else return m.reply('URL tidak valid!')
      }
  } finally {
  if (wsf) {
            await wsf.build()
            const sticBuffer = await wsf.get()
            if (sticBuffer) await conn.sendMessage(m.chat, sticBuffer, MessageType.sticker, {
                quoted: m,
                mimetype: 'image/webp'
            })
        }
   }
}
handler.help = ['s', 'stiker', 'sticker', 'sgif']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker|gif)?)$/i
module.exports = handler
