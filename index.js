/*
 *
 * In The Name of God
 *
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 13-10-2018
 * |
 * | File Name:     index.js
 * +===============================================
 */
/* I1820 client */
const i1820 = require('@i1820/hub')
const client = new i1820.I1820Client('mqtt://127.0.0.1:1883', '5bc1e643455ab076582c534d', '1BWLkOaO1P1TknehFLvsRtEtRcg')
client.on('ready', () => {
  console.log('We are good to go')
})

/* HTTP server initiation */
const Hapi = require('hapi')

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 8000
})

server.route([
  {
    method: 'GET',
    path: '/parking',
    handler: (request, h) => {
      if (request.query['sensorID'] === '1194284120302') {
        const parsed = {
          sensorID: request.query['sensorID'], // sensor identification
          condition: request.query['condition'] === '1', // ?
          temperature: parseFloat(request.query['temperature']), // board temperature
          rawData: request.query['RawData'] === '1', // is there any car on our sensor?
          battery: parseFloat(request.query['Battery']) // sensor battery level
        }
        console.log(parsed)
        client.log(parsed)
      }
      return '18.20 is leaving us'
    }
  }
])

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()
