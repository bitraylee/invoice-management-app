// * For Displaying data and realtime search implementation

const { response } = require("express")
const mysql = require("mysql2")
const credentials = require("./credentials")
const formatDate = require("../services/formatDate")

const getData = (page, pageSize, field, sort, searchInput) => {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection(credentials)
		if (!connection) connection.connect()
		else if (connection) {
			const rowData = {
				selectedData: [],
				selectedRows: 0,
			}
			const query = `SELECT * FROM \`winter_internship\` WHERE cust_number LIKE "${searchInput + "%"}" ORDER BY ${field} ${sort.toUpperCase()} LIMIT ${page * pageSize},${pageSize}`

			connection.query(query, (err, rows, fields) => {
				if (err) reject(err)

				if (rows != undefined) {
					rowData.selectedData = rows.map((row) => {
						row.clear_date = formatDate(row.clear_date)
						row.posting_date = formatDate(row.posting_date)
						row.document_create_date = formatDate(row.document_create_date)
						row.document_create_date1 = formatDate(row.document_create_date1)
						row.due_in_date = formatDate(row.due_in_date)
						row.baseline_create_date = formatDate(row.baseline_create_date)

						return row
					})
				} else reject("No rows selected")

				const getRowNumQuery = `SELECT COUNT(*) FROM \`winter_internship\` WHERE cust_number LIKE "${searchInput + "%"}" ORDER BY ${field} ${sort.toUpperCase()}`

				connection.query(getRowNumQuery, (err, rows, fields) => {
					if (err) reject(err)

					rowData.selectedRows = rows[0]["COUNT(*)"]
					resolve(rowData)
				})
			})
		} else reject("Unable to fetch data")
	})
}

module.exports = getData
