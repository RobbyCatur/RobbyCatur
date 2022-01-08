let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*_PAYMENT/PEMBAYARAN_*
🔰 *FrihetStore* 🔰

💳 SHOPE : 082288316705 
 
💳 OVO : 082288316705

💳 NEO BANK : 082288316705

💳 BCA VIRTUAL ACCOUNT : 1375300000623051

💳DANA/GOPAY : MINTA KE ADMIN BERUPA QRIS ATAU BUKU WARUNG
 
💳 Qris/Alfamart/Indomaret
Pm Langsung Ke admin

*NOTE :*
SEMUA PEMBAYARAN ATAS NAMA *MUHAMMAD ZULFADLI*
`.trim(), '© Robby Catur', 'MENU', '.frihetstore', m)
  }
handler.command = /^payment$/i
module.exports = handler
