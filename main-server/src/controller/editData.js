const { response } = require("express")
const mysql = require("mysql2")
const credentials = require("./credentials")
const formatDate = require("../services/formatDate")

const editData = (selectedRow, custPaymentTerms, invoiceCurrency) => {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection(credentials)
		if (!connection) connection.connect()

		if (connection) {
			connection.query(`UPDATE \`winter_internship\` SET invoice_currency="${invoiceCurrency}", cust_payment_terms="${custPaymentTerms}" WHERE sl_no=${selectedRow}`, (err, rows, fields) => {
				if (err) reject(err)

				resolve(`Update successful! ${1}(s) has been updated!`)
			})
		} else reject("Unable to establish connection with the database")
	})
}

module.exports = editData
