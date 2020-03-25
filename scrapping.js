var request = require('request')
var axios = require('axios')
var cheerio = require('cheerio')
var jquery = require('jquery')

request('https://g1.globo.com/', function (err, res, body) {



    const $ = cheerio.load(body)

    console.log($('h2').text())


})
