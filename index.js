const express = require('express')
const app = express()
const server = require('http').createServer(app);
const puppeteer = require('puppeteer');
const cors = require("cors")
const fs = require("fs");


const wpp = require("./wpp")
let teste;
let browser;
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// JSON ENVIADO NO POST   { telefone: '+5519XXXXXX', mensagem: 'teste 123' }

app.post('/emit', async function (req, res) {
  await wpp(teste,req.body.telefone,req.body.mensagem)
  res.send('MSG Enviada!')
})

server.listen(3000, async () => {
  browser = await puppeteer.launch({ headless: false }); 
  const page = await browser.newPage();
  teste = page
  await page.goto('https://web.whatsapp.com');
  console.log('listening on *:3000');
});

function delay(time) {
  return new Promise(function (resolve) {
      setTimeout(resolve, time);
  });
}