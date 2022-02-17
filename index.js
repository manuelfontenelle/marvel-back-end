const express = require("express")
const formidable = require("express-formidable")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(formidable())
app.use(cors())
// import { useState } from "react"
// const [page, changePage] = useState(100)

const apiUrl = "https://lereacteur-marvel-api.herokuapp.com"
const apiKey = process.env.MARVEL_API_KEY

app.get("/", (req, res) => {
	res.status(200).json({ message: "Welcome to Marvel API !" })
})

// List of comics

// List of comics containing a specific character

// List of characters

// skip = 0
app.post(`/characters`, async (req, res) => {
	try {
		// requête axios à l'API Marvel
		const response = await axios.get(
			// `${apiUrl}/characters?apiKey=${apiKey}`
			`${apiUrl}/characters?skip=${req.fields.skip}&apiKey=${apiKey}`
		)
		// console.log(req.fields.skip)
		// console.log(response.data)
		res.status(200).json(response.data)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
})

app.listen(process.env.PORT, () => console.log("Server Started !"))
