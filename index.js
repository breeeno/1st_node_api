const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/users", require("./routes/api/users"))
app.listen(port, () => {
  console.log(`App rodando na porta 127.0.0.1:${port}`)
})