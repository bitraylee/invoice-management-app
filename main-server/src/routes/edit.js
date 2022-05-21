"use strict"
const express = require("express")
// const res = require("express/lib/response")
const editData = require("../controller/editData")
let router = express.Router()
router.use(express.json({ extended: false }))

router
	.route("/")
	.get((req, res) => {
		const custPayementTerms = req.query.custPaymentTerms
		const selectedRow = req.query.selectedRow
		const invoiceCurrency = req.query.invoiceCurrency

		editData(selectedRow, custPayementTerms, invoiceCurrency)
			.then((response) => {
				console.log(response)
				res.send(response)
			})
			.catch((err) => {
				console.log(err)
				req.send(err)
			})
	})
	.post((req, res) => {
		const selectedRow = req.body.selectedRow
		const custPayementTerms = req.body.custPaymentTerms
		const invoiceCurrency = req.body.invoiceCurrency

		editData(selectedRow, custPayementTerms, invoiceCurrency)
			.then((response) => {
				console.log(response)
				res.send(response)
			})
			.catch((err) => {
				console.log(err)
				req.send(err)
			})
	})

module.exports = router
