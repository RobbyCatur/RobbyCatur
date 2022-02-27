let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond ML B_*
*_Via ID - Legal 100%_*
🔰 *_FrihetStore_* 🔰

39     💎 = Rp 9.233
65     💎 = Rp 15.266
92     💎 = Rp 21.422
133   💎 = Rp 30.588
266   💎 = Rp 61.122
400   💎 = Rp 91.533
534   💎 = Rp 122.622
670   💎 = Rp 152.599
1342 💎 = Rp 305.122
2700 💎 = Rp 610.500
4150 💎 = Rp 915.500
7050 💎 = Rp 1.525.500

⏳ *PROSES 3-60 MENIT MAX* 
*24 JAM*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}
handler.command = /^mlb$/i
module.exports = handler
