const express = require('express')
const app = express()
const port = 3000
const multer = require('multer');
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(upload.array()); 
app.use(express.static('public'));

app.use("/api/users", require("./routes/api/users"))
app.listen(port, () => {
  console.log(`App rodando na porta 127.0.0.1:${port}`)
})