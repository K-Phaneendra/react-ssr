import http from 'http';
import express from './services/express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDomServer from 'react-dom/server'

import apiRoutes from './src/api-routes';

import App from '../src/App'

// Initialize the app
const app = express(apiRoutes);
const server = http.createServer(app);

const PORT = 7650

app.get('/', (req, res) => {
  res.send(`NodeJS with Express is running on port ${PORT}`)
})

app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log('error - - ', err)
      return res.status(500).send("Some error happened")
    }
    return res.send(data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
    ))
  })
})
app.use('/products', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log('error - - ', err)
      return res.status(500).send("Some error happened")
    }
    return res.send(data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
    ))
  })
})

server.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})
