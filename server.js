// import packages and libraries
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const morgan = require('morgan')
require('dotenv').config({})
const app = express()
const port = process.env.PORT//server port

// configurations 
// create an express server
app.listen(3000,()=>{
    try {
        console.log('App running on port: ' + port)
    } catch (error) {
        console.log('Error running app: '+error.message)
    }
})

// middlewares configurations
app.use(cors())//allow cross platform communication
app.use(morgan('dev')) //log server activities on the terminal
app.use(express.static('public')) //set a public folder for css, js(files) and images (frontend stuff)
app.set('view engine','ejs')//create a html view template using nodejs ejs template
app.use(bodyParser.json())//allow json body sent to server
app.use(express.urlencoded({extended:true}))
 
// import custom modules
const pagesModule = require('./routes/pageroutes')
const loginModule = require('./controllers/login')
const userModule = require('./controllers/users')
const lecturersModule = require('./controllers/lecturers')
const resultsModule = require('./controllers/results')
const unitsModule = require('./controllers/units')
const studentsModule = require('./controllers/students')




// configure routes for each custom module imported
app.use('/',pagesModule)
app.use('/login',loginModule)
app.use('/users',userModule)
app.use('/lecturers',lecturersModule)
app.use('/results',resultsModule)
app.use('/units',unitsModule)
app.use('/students',studentsModule)