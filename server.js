const express = require('express')
const path = require('path')

const server = express()

server.use(express.static(__dirname))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})