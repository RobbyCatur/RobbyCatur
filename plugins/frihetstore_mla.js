let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PriceList Diamond ML A_*
*_Via ID - Legal 100%_*
🔰 *FrihetStore* 🔰

86 💎 = Rp 20.500
172 💎 =Rp 41.000 
257 💎 = Rp 61.500 
344 💎 = Rp 82.000
429 💎 = Rp 102.500
514 💎 = Rp 123.000
600 💎 = Rp 144.000
706 💎 = Rp 165.000 
878 💎 = Rp 205.000 
963 💎 = Rp 225.500 
1050 💎 = Rp 246.000 
1220 💎 = Rp 287.000 
1412 💎 = Rp 328.000 
2195 💎 =Rp 488.000
3073 💎 = Rp 693.000
3688 💎 = Rp 812.000
4032 💎 = Rp 894.000 
5532 💎 = Rp 1.219.000 
6238 💎 = Rp 1.383.000 
9288 💎 = Rp 2.030.000 
⭐SL/TW	 Rp95.000
🌟SL PLUS	 Rp285.000

⏳ *_PROSES 1-10 MENIT_*
⚠️ *NOTE : TANYAKAN STOK SEBELUM MELAKUKAN TRANSFER*
`.trim(), '© Robby Catur', 'BAYAR', '.payment', m)
}

handler.command = /^mla$/i
module.exports = handler
