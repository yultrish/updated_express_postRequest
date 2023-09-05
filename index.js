const express = require('express')
const path = require('path')
const cors = require('cors')
const routes = require('./routes/route')
const bodyParser = require('body-parser')

const app = express()

//middle wares
app.use(bodyParser.json())
app.use('/api', routes)
app.use(cors({
    origin: '*'
}))

// public folder
PORT = 5000
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    res.sendFile('index.html', err=>{
        if(err){
            res.status(403).send('page not found')
            res.sendFile('not.html')
        }
    })
})

app.use((req, res)=>{
    // res.status(404).send(`server is running ${PORT}`)
    res.sendFile('not.html')
})

app.listen(PORT, ()=>{
    console.log('server is running')
})

