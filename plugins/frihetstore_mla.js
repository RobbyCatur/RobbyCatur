let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond ML B_*
*_Via ID - Legal 100%_*
🔰 *_FrihetStore_* 🔰

34+5 = 39💎 Rp 9.222
58+7 = 65💎 Rp 15.111
83+9 = 92💎 Rp 20.944
120+13 = 133💎 Rp 29.920
240+26 = 266💎 Rp 59.874
360+40 = 400💎 Rp 89.726
480+54 = 534💎 Rp 119.680
600+70 = 670💎 Rp 149.600
1200+142 = 1342💎 Rp 299.200
2400+300 = 2700💎 Rp 598.500
3600+550 = 4150💎 Rp 898.000
6000+1050 = 7050💎 Rp 1.500.000

⏳ *PROSES 3-60 MENIT MAX* 
*24 JAM*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
⚠️ *NOTE : TANDA (+) ATAU BONUS TIDAK TERHITUNG PADA EVENT TOPUP*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}

handler.command = /^mla$/i
module.exports = handler
