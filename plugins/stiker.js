const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const WSF = require('wa-sticker-formatter')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    let stiker = false
    let wsf = false
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
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (/webp/.test(mime)) {
      let img = await q.download()
      if (!img) throw `balas sticker dengan caption *${usedPrefix + command}*`
      wsf = new WSF.Sticker(img, {
            pack: global.packname,
            author: global.author,
            crop: false,
            })
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL tidak valid!')
      }
      if (wsf) {
            await wsf.build()
            const sticBuffer = await wsf.get()
            if (sticBuffer) await this.sendMessage(m.chat, sticBuffer, MessageType.sticker, {
                quoted: m,
                mimetype: 'image/webp'
            })
        }
  } finally {
  if (stiker) await this.sendMessage(m.chat, stiker, 'stickerMessage', {
            quoted: m
        })
   }
}
handler.command = /^s$/i
module.exports = handler
