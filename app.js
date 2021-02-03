const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//cumpre o critério do Commonjs
const buscaCep = require('./src/functions/buscaCep')


//config bodyParser para pegar os dados do form - pegar os dados do body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//declarando que será usado o ejs
app.set('view engine', 'ejs')
//mostrando para o express onde está a pasta views
app.set('views', './src/views')


//renderizando a página principal
app.get('/', (req, res) => {
    //chamando o arquivo da minha view que está configurada acima
    res.render('index')
})

//pegando os dados da minha view - resultadoCep está na pasta views
app.post('/envia-cep', async(req, res) => {
    const {cep} = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})

app.listen(3333)
