exports.pinterestdl = async (link) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: `https://pinterestvideodownloader.com/`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'user-agent': fakeUa(),
        cookie: '_ga=GA1.2.894954552.1635394717;',
      },
      formData: {
        url: link,
      },
    }

    request(options, async function (error, response, body) {
      if (error) throw new Error(error)
      const $ = cheerio.load(body)
      const link = []
      const judul = []
      const result = []
      $('#content > center > div > div.col-md-4.col-md-offset-4 > table > tbody > tr > td > a').each(function (a, b) {
        deta = $(b).text()
        judul.push(deta)
        link.push($(b).attr('href'))
      })
      for (let i = 0; i < link.length; i++) {
        result.push({
          dlinfo: judul[i],
          link: link[i],
        })
      }
      resolve({
        creator: 'Fajar Ihsana',
        result: result,
      })
    })
  })
}
