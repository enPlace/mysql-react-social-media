const express = require('express')
const app = express()
const db = require('./models')

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("running on port 20031013013948rwe8r09")
    })
})