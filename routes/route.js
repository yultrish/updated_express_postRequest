const express = require('express')
const router = express.Router()
const login = require('../controllers/login')

router.get('/users', async(req, res)=>{
    await res.json({message: 'get request is working'})
})

router.post('/user', async(req, res)=>{
    await login.loginUser(req, res)
})

module.exports = router