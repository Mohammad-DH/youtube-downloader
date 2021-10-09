var formidable = require('formidable');

function getData(req, res, download) {
    var data = new formidable.IncomingForm();

    data.parse(req, async (err, fields) => {
        if (err) { console.log(err) }
        download(res, fields.url)
    })
}

module.exports = getData;