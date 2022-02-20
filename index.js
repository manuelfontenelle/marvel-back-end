const express = require("express")
const formidable = require("express-formidable")

const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(formidable())
app.use(cors())

const charactersRoutes = require("./routes/characters")
const comicsRoutes = require("./routes/comics")
const favorisRoutes = require("./routes/favoris")

app.use(charactersRoutes)
app.use(comicsRoutes)
app.use(favorisRoutes)

app.get("/", (req, res) => {
	res.status(200).json({ message: "Welcome to Marvel API !" })
})

app.listen(process.env.PORT, () => console.log("Server Started !"))
