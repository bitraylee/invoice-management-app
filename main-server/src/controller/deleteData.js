// const { response } = require("express")
const mysql = require("mysql2")
const credentials = require("./credentials")
// const formatDate = require("../services/formatDate")

const deleteData = (selectedRows) => {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection(credentials)
		if (!connection) connection.connect()
		if (connection) {
			connection.query(`DELETE FROM \`winter_internship\` WHERE sl_no in (${selectedRows})`, (err, rows, fields) => {
				if (err) reject(err)

				resolve(`Delete Successfull! ${rows.affectedRows}(s) rows has been deleted!`)
			})
		} else reject("Unable to establish connection with the database")
	})
}

module.exports = deleteData
