const youtubedl = require('youtube-dl-exec')

async function download(res, url) {

    youtubedl(url, {
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        noPlaylist: true
    })
        .then(output => {
            if (output) {
                const DATA = {
                    target: output.webpage_url,
                    title: output.title,
                    thumbnail: output.thumbnail,
                    formats: output.formats
                }
                console.log(DATA)
                return res.status(200).json(DATA)
            }
        }).catch((err) => {
            console.log(err)
            return res.status(503).send('bad request')
        });

}

module.exports = download;