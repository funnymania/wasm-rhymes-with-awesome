const express = require('express')
const app = express()

const compression = require('compression')

app.use(compression())

// Location for static folders, does this work with WebAssembly?
app.use(express.static('../client'))

// app.get('/', (req,res) => {
//   res.send(`Hello, class!`)
// })

app.listen(1230)