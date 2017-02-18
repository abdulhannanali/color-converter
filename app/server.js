const express = require('express')
const app = express()
const morgan = require('morgan')

const converter = require('../converter')

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

app.use(morgan('dev'))
app.get('/hexToRgb', (req, res, next) => {
    const { hex } = req.query
    const rgb = converter.hexToRgb(hex)

    return res.send({ rgb })
})

app.get('/rgbToHex', (req, res, next) => {
    const { red = 0, green = 0, blue = 0 } = req.query
    const hex = converter.rgbToHex(red, green, blue)

    return res.send({ hex })
})

module.exports = app