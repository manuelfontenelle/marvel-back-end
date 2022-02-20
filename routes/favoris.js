const express = require("express")
const router = express.Router()
const axios = require("axios")

const apiUrl = "https://lereacteur-marvel-api.herokuapp.com"
const apiKey = process.env.MARVEL_API_KEY

router.get(`/favoris`, async (req, res) => {
	try {
		console.log("Route => favoris")

		const response = await axios.get(
			`${apiUrl}/favoris/${req.params.id}?apiKey=${apiKey}`
		)
		console.log(response.data)
		res.status(200).json(response.data)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({ message: error.message })
	}
})

module.exports = router
