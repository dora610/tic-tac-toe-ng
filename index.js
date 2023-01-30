const express = require('express')
const app = express()
const path = require('path')
const PORT = 5000

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname,'/dist/tic-tac-toe-ng')))
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '/dist/tic-tac-toe-ng/index.html')))

app.listen(PORT, ()=> console.log(`express app is up and running at port ${PORT}`))
