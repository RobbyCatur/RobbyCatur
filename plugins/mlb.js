let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond ML B_*
*_Via ID - Legal 100%_*
🔰 *_FrihetStore_* 🔰

34+5 = 39💎 Rp 9.000
58+7 = 65💎 Rp 14.740
83+9 = 92💎 Rp 20.636
120+13 = 133💎 Rp 29.480
240+26 = 266💎 Rp 58.993
360+40 = 400💎 Rp 88.406
480+54 = 534💎 Rp 117.920
600+70 = 670💎 Rp 147.500
1200+142 = 1342💎 Rp 295.000
2400+300 = 2700💎 Rp 593.000
3600+550 = 4150💎 Rp 887.000
6000+1050 = 7050💎 Rp 1.480.000

⏳ *PROSES 3-60 MENIT MAX* 
*24 JAM*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
⚠️ *NOTE : TANDA (+) ATAU BONUS TIDAK TERHITUNG PADA EVENT TOPUP*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}
handler.command = /^mlb$/i
module.exports = handler
