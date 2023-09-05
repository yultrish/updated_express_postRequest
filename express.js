const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

//middle wares
app.use(bodyParser.json())
// app.use('/api', router)
app.use(cors({
    origin: '*'
}))

// public folder
PORT = 5000
app.get(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    res.sendFile('index.html', err=>{
        if(err){
            res.status(403).send('page not found')
            // res.sendFile('not.html')
        }
    })
})

app.use((req, res)=>{
    res.status(404).send(`server is running ${PORT}`)
})

app.listen(PORT, ()=>{
    console.log('server is running')
})

