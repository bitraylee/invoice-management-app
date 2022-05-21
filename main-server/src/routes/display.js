"use strict"
const express = require("express")
const getData = require("../controller/displayDataService")
const adavancedSearch = require("../controller/advancedSearch")
let router = express.Router()
//connection.connect()
router.use(express.json({ extended: false }))

router
	.route("/")
	.get((req, res) => {
		const isAdv = req.query.isAdv

		if (isAdv != "true") {
			const page = req.query.page
			const pageSize = req.query.pageSize
			const field = req.query.field
			const sort = req.query.sort
			const searchInput = req.query.searchInput

			getData(page, pageSize, field, sort, searchInput)
				.then((response) => {
					res.send(response)
				})
				.catch((err) => {
					console.log(err)
					res.send(err)
				})
		} else {
			const page = req.query.page
			const pageSize = req.query.pageSize
			const docId = req.query.documentID
			const invoiceID = req.query.invoiceID
			const custNumber = req.query.customerNumber
			const businessYear = req.query.businessYear
			console.log(page, pageSize, docId, invoiceID, custNumber, businessYear)
			adavancedSearch(page, pageSize, docId, invoiceID, custNumber, businessYear)
				.then((response) => {
					res.send(response)
				})
				.catch((err) => {
					console.log(err)
					res.send(err)
				})
		}
	})
	.post((req, res) => {
		// console.log("Entered post req block")
		const isAdv = req.body.isAdv
		console.log(isAdv)
		if (isAdv != "true" && isAdv != true) {
			// const body = req.body
			// console.log(body)

			const page = req.body.page
			const pageSize = req.body.pageSize
			const field = req.body.field
			const sort = req.body.sort
			const searchInput = req.body.searchInput

			getData(page, pageSize, field, sort, searchInput)
				.then((response) => {
					res.send(response)
				})
				.catch((err) => {
					console.log(err)
					res.send(err)
				})
		} else {
			const page = req.body.page
			const pageSize = req.body.pageSize
			const docId = req.body.documentID
			const invoiceID = req.body.invoiceID
			const custNumber = req.body.customerNumber
			const businessYear = req.body.businessYear

			console.log(page, pageSize, docId, invoiceID, custNumber, businessYear)
			adavancedSearch(page, pageSize, docId, invoiceID, custNumber, businessYear)
				.then((response) => {
					res.send(response)
				})
				.catch((err) => {
					console.log(err)
					res.send(err)
				})
		}
	})

module.exports = router
