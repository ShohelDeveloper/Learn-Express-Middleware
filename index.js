const express = require('express')

const app = express();

// static Middleware
app.use(express.static(__dirname + '/public'))

// MiddleWare:


const simpleLogger = (req,res,next) => {
    console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`)
    next()
}

// Another Middleware

const secondMiddleware = (req,res,next) => {
    console.log('Hi, I am a Second Middle Ware')
   next()
}


// we want to use handeler controller, middleware
// below is globally setup middleware(simpleLogger)
app.use([simpleLogger,secondMiddleware])

// Router & Controller
app.get('/hello', (req,res,next, ) =>{
    
    res.json({message:'Hellow Shohel Rana'})
})

app.get('/',(req,res,next) =>{
    res.json({message:'Sweet Home'})
})


app.listen(3400, () => {
    console.log('Applicaion Running on Port 3400')
})