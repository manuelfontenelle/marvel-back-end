const express = require("express")
const router = express.Router()
const axios = require("axios")

const apiUrl = "https://lereacteur-marvel-api.herokuapp.com"
const apiKey = process.env.MARVEL_API_KEY

router.get(`/characters`, async (req, res) => {
	try {
		console.log("Route => characters")

		let url = `${apiUrl}/characters?apiKey=${apiKey}`

		if (req.query.search) {
			url = `${url}&name=${req.query.search}`
		}

		if (req.query.page) {
			const skip = (req.query.page - 1) * 100
			url = `${url}&skip=${skip}`
		}

		const response = await axios.get(url)
		res.status(200).json(response.data)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
})

router.get(`/character/:id`, async (req, res) => {
	// console.log("params : ", req.params.id)
	try {
		const response = await axios.get(
			`${apiUrl}/comics/${req.params.id}?apiKey=${apiKey}`
		)
		// console.log(response.data)
		res.status(200).json(response.data)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
})

module.exports = router
