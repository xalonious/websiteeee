const express = require("express")

const port = 2000;

const app = express()

app.get("/", (req, res) => {
    res.status('200').sendFile(path.join(__dirname, "dino.html"))
})

app.listen(port)

console.log(`Listening at port ${port}`)
