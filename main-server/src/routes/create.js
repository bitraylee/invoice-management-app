"use strict"
// const { response } = require("express")
const express = require("express")
const createData = require("../controller/createData")

let router = express.Router()
router.use(express.json({ extended: false }))

router
	.route("/")
	.get((req, res) => {
		createData(req.query)
			.then((response) => {
				res.send(response)
			})
			.catch((err) => {
				console.log(err)
				res.send(err)
			})
	})
	.post((req, res) => {
		//console.log("This is the create POST req")
		createData(req.body)
			.then((response) => {
				res.send(response)
			})
			.catch((err) => {
				console.log(err)
				res.send(err)
			})
	})

module.exports = router
