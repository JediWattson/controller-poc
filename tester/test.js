const assert = require('assert')
const puppeteer = require('puppeteer')
const cors = require("cors")
const logger = require('morgan')
const express = require('express')
const {USER, MESSAGE} = require('shared/constants')

let app, server
beforeEach(() => {
  app = express()
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  server = app.listen(8080)
})

afterEach(() => {
  app = null
  server.close()
})

describe('app', function(){
  it('should render text from api call', async() =>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    const el = await page.$('#data-test')
    const text = await page.evaluate(element => element.textContent, el);
    await browser.close();
    assert.equal(text, 'here is data')
  })

  it('should send an email when button is clicked', async ()=>{
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000')
    await page.click('#button-test')
    await browser.close()
    app.use('/', (req, res) => {
      assert.equal(req.body.user, USER)
      assert.equal(req.body.msg, MESSAGE)
    })
  })
})
