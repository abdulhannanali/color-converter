const expect = require('chai').expect
const { get } = require('axios')

const baseUrl = 'http://localhost:3000'

const app = require('../app/server')

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

describe('Color code converter API', () => {
    let server

    before((done) => {
        server = app.listen(PORT, HOST, done)
    })

    describe('RGB to Hex Conversion', () => {
        const url = `${baseUrl}/rgbToHex?red=255&green=255&blue=255`
        let res

        beforeEach (async () => {
            res = await get(url)
        })

        it('returns status 200', () => {
            expect(res.status).to.eql(200)
        })

        it('returns the color in hex', () => {
            expect(res.data).to.deep.equal({ hex: 'ffffff' })
        })
    })

    describe('Hex to RGB Conversion', () => {
        const url = `${baseUrl}/hexToRgb?hex=000000`        
        let res

        beforeEach(async () => {
            res = await get(url)
        })

        it('returns status 200', () => {
            expect(res.status).to.eql(200)
        })

        it('returns the color in rgb', () => {
            expect(res.data).to.deep.equal({ rgb: [0, 0, 0] })
        })
    })

    after(() => {
        server.close()
        console.log('server closed')
    })
})
