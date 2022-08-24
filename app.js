//CARREGANDO MODULOS
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const admin = require ('./routes/admin')
    const path = require('path')
    //const mongoose = require('mongoose')

//Configurações
    //URLencoder Express
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())

        //Handlebars
        app.engine('.hbs', handlebars.engine({
            extname:'.hbs',
            defaultLayout: 'main'
    
        }))
         
        app.set('view engine','.hbs')
        app.set('views', path.join(__dirname, "/views"))

    //Mongoose
        //EM BREVE

    //Public
        app.use('/admin', express.static(path.join(__dirname+'/public')))

//Rotas
        app.get('/', () => {}) 
    
        app.use('/admin', admin)


//OUTROS
    const PORT = 7777
    app.listen(PORT, () => { 
        console.log('Servidor rodando!')
    })
