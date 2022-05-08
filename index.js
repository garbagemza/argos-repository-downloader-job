require('dotenv').config();
const express = require('express')
const createError = require('http-errors')

const { envcheck } = require('./utilities')

const { 
	getYourPathController
} = require('./controllers')

const app = express()

// this checks the existence of environment variables, if they are not declared
// an exception will be thrown.
envcheck(['PORT'])

// add your middleware here
app.get('/your/path', getYourPathController)

// this middleware catches the unhandled paths
app.use((req, res, next) => {
	res.status(404)
	res.json(new createError(404, "Not found."))
})

app.listen(process.env.PORT)

