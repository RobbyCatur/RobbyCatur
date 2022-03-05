let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
        if (q.mtype == 'viewOnceMessage') {
            await conn.copyNForward(m.chat, await this.loadMessage(m.chat, q.id), false, { readViewOnce: true })
        }
    }
  handler.command = /^(lihat)$/i
  module.exports = handler
