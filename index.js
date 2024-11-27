const express = require('express')
const app = express()

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  console.log(`IP do usuário: ${ip}`)
  next()
})

app.get('/', (req, res) => {
  res.send('IP capturado!')
})

app.listen(7000, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 7000')
})
