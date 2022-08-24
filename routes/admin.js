const express = require('express')
const router = express.Router()

//rotas
    router.get('/',(req, res) => {
        res.render('admin/index.hbs')
    })

    router.get('/post', (req, res) => {
        res.send('Pagina de administração de posts')
    })

    router.get('/categorias', (req, res) => {
        res.send('Pagina para cadastras categorias')
    
    })



//exportação do modulo
    module.exports = router