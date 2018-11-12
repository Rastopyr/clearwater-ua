
const url = require('url')
const { Buffer } = require('buffer')
const { request } = require('https')

const chalk = require('chalk')
const log = console.log

const messages = require('./messages')
const template = {}
// require('./orderTemplate')

const urlParse = url.parse || url.URL

const CLEAR_WATER_URL = urlParse('https://www.clearwater.ua/order/_system/jsorder.php')
const CLEAR_WATER_DATA = JSON.stringify(template)

function showError (text) {
  log(chalk.red.bgBlue.bold(text))
}

export default () => {
  const req = request(
    Object.assign(CLEAR_WATER_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(CLEAR_WATER_DATA)
        }
      }),
    function (res) {
      let resBody = ''
      res.setEncoding('utf8')

      res.on('data', chunk => {
        resBody += chunk
      })

      res.on('end', () => {
        // TODO: refactor
        if (resBody.indexOf('OK') > -1) {
          if (resBody.indexOf('MAIL') !== -1 || resBody.indexOf('POST') !== -1) {
            showError(messages['e13'])
          } else {
            log(chalk.white.bgCyanBright.bold(messages.ok))
          }
        } else {
          if (resBody.indexOf('FIELD') > -1) {
            var errarr = resBody.split('.')
            if (errarr[0].indexOf('e') > -1) {
              showError(
                messages[errarr[0]]
              )
            }
          } else {
            showError(messages['e10'])
          }
        }
      })
    }
  )

  req.on('error', (e) => {
    showError(e.message)
  })

  req.write(CLEAR_WATER_DATA)
  req.end()
}
