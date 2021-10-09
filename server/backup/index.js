const express = require('express')
var cors = require('cors')
const app = express()
var formidable = require('formidable');
const youtubedl = require('youtube-dl-exec')



app.post('/check', cors(), async function (req, res) {

    var data = new formidable.IncomingForm();

    data.parse(req, async (err, fields) => {

        console.table(fields.Link)

        if (err) {
            console.log(err)
        }
        async function G(I) {
            try {

                youtubedl(I, {
                    dumpSingleJson: true,
                    noWarnings: true,
                    noCallHome: true,
                    noCheckCertificate: true,
                    preferFreeFormats: true,
                    youtubeSkipDashManifest: true,
                })
                    .then(output => {

                        return res.status(200).json(output)

                    })

            } catch (err) {

                console.log(err)
            }

        }
        G(fields.Link)
    })
})


app.listen(4000)
console.log("app is on")


