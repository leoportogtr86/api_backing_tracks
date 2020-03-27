var artist = 'roberto-carlos'
var music = 'como-grande-meu-amor-por-voce'


var request = require('request')
var cheerio = require('cheerio')
var url = 'https://www.cifraclub.com.br/' + artist + '/' + music +'/'
var fs = require('fs')
var axios = require('axios')

function repertorio (artista) {

    axios.get('https://www.letras.mus.br/' + artista + '/').then(function (res) {


        let $ = cheerio.load(res.data)

        let repertorio

        repertorio = $('.-song').text()

        repertorio = repertorio.split('  ')



        console.log(repertorio)


    })

}


request(url, function (err, res, body) {


    const $ = cheerio.load(body)


    let cifra_json = {

        titulo: $('h1.t1').text(),
        artista: $('h2.t3').text(),
        tonalidade: $('#cifra_tom a').text(),
        cifra: $('pre').text(),
    }

    console.log(cifra_json)
    fs.writeFile('./public/files/'+cifra_json.titulo+'.json',JSON.stringify(cifra_json), function () {

        console.log('Tá salvo!')

    })
})


//repertorio('titas')