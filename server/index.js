const express = require('express')
const cors = require('cors')
const app = express()
const getData = require("./module/getData")
const download = require("./module/download")

app.use(cors())

app.post('/check', cors(), async function (req, res) {

    getData(req, res, download)

})


app.listen(4000)
console.log("app is on")


