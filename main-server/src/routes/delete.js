"use strict"

const express = require("express")
const deleteData = require("../controller/deleteData")

let router = express.Router()
router.use(express.json({ extended: false }))

router
	.route("/")
	.get((req, res) => {
		const selectedRows = req.query.rowsToDelete
		deleteData(selectedRows)
			.then((response) => {
				console.log(response)
				res.send(response)
			})
			.catch((err) => {
				console.log(err)
				res.send(err)
			})
		// console.log("This is the delete GET Route")
	})
	.post((req, res) => {
		const selectedRows = req.body.rowsToDelete
		console.log(selectedRows)
		deleteData(selectedRows)
			.then((response) => {
				console.log(response)
				res.send(response)
			})
			.catch((err) => {
				console.log(err)
				res.send(err)
			})
	})

module.exports = router
