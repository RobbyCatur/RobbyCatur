let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond FreeFire_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰
    
5 💎 = Rp 850
20 💎 = Rp 2.750
50 💎 = Rp 6.700
70 💎 = Rp 9.000
100 💎 = Rp 13.400
140 💎 = Rp 18.000
210 💎 = Rp 27.100
355 💎 = Rp 45.130
720 💎 = Rp 90.255
 2000 💎 = Rp 248.000
7290 💎 = Rp 905.000
🗿MM= Rp 27.500
🦏MB = Rp 137.000

*FORMAT ORDER :*
User id :
Nickname :
Nominal Order :
Sertakan Bukti pembayaran


⏳ *_PROSES 1-10 MENIT_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}
handler.command = /^ff$/i
module.exports = handler
