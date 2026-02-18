import express from 'express'

const app = express()

app.get('/healthcheck', (req, res) => {
  res.json('App is healthy')
})

app.listen(3000)