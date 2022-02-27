let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  m.reply('Proses')
  let res = await fetch(`https://api-xcoders.xyz/api/stalk/ig?username=` + text + `&apikey=DPZDDDpHHM`)
  let json = await res.json()
  let result = json.result
  let pp = result.profile_url
  let txt = `
Username: ${result.username}
Name: ${result.full_name}
Followers: ${result.followers}
Following: ${result.following}
Post : ${result.posts_count}
Bio: ${result.bio}
External Url: ${result.external_url}
Private: ${result.is_private}
Verified: ${result.is_verified}
`.trim()
conn.sendFile(m.chat, pp, 'ppig.jpg', txt, m)
}
handler.help = ['igstalk']
handler.tags = ['stalker']
handler.command = /^(igstalk)$/i
module.exports = handler
