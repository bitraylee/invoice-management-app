const express = require("express")
// const mysql = require("mysql2")
const handle = require("./src/routes/handle")
const cors = require("cors")

const app = express()

let corsOption = {
	origin: ["http://localhost:3000"],
}
const port = 8000
app.use(cors(corsOption))
app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.use("/handle", handle)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
