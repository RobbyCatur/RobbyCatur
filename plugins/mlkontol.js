let handler = async (m, { conn }) => {
  conn.sendButton(m.chat, `
*MOBILE LEGEND FAST R.2850 Proses 1-5menit*

86	Rp19.950
172	Rp39.900
257	Rp59.850
344	Rp79.800
429	Rp99.750
514	Rp119.700
600	Rp139.650
706	Rp159.600
878	Rp199.500
1049	Rp239.400
1412	Rp319.200
2195	Rp474.525
3072	Rp674.025
3688	Rp789.450
4394	Rp949.050
5532	Rp1.185.600
6238	Rp1.345.200
9288	Rp1.975.050
12188	Rp2.609.175
Starlight	Rp131.670
Starlight Plus	Rp299.250
Twilight Pass	Rp131.670
`.trim(), '©Robby Catur', 'BAYAR', '.bayar', m)
}
handler.command = /^mlkontol$/i
module.exports = handler
