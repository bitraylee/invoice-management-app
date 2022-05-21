const { response } = require("express")
const mysql = require("mysql2")
const credentials = require("./credentials")
//const formatDate = require("../services/formatDate")

const createData = (rowData) => {
	return new Promise((resolve, reject) => {
		const connection = mysql.createConnection(credentials)
		if (!connection) connection.connect()
		else if (connection) {
			//If the business_code is not present in the foreign key dependency
			connection.query(`SELECT * FROM business WHERE business_code="${rowData.business_code}"`, (err, rows, fields) => {
				if (err) {
					throw err
					reject(err)
				}
				if (rows.length == 0) {
					connection.query(`INSERT INTO business (business_code) VALUES ("${rowData.business_code}");`)
				}
			})

			//If the cust_number is not present in the foreign key dependency
			connection.query(`SELECT * FROM customer WHERE cust_number="${rowData.cust_number}"`, (err, rows, fields) => {
				if (err) {
					throw err
					reject(err)
				}
				if (rows.length == 0) {
					connection.query(`INSERT INTO customer (cust_number) VALUES (${rowData.cust_number});`)
				}
			})

			let query = `INSERT INTO \`winter_internship\` (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) VALUES ?`
			let values = [
				[
					rowData.business_code,
					Number(rowData.cust_number),
					rowData.clear_date,
					Number(rowData.business_year),
					rowData.doc_id,
					rowData.posting_date,
					rowData.document_create_date,
					rowData.due_in_date,
					rowData.invoice_currency,
					rowData.document_type,
					Number(rowData.posting_id),
					parseFloat(rowData.total_open_amount),
					rowData.baseline_create_date,
					rowData.cust_payment_terms,
					Number(rowData.invoice_id),
				],
			]
			console.log(values)

			connection.query(query, [values], (err, rows, fields) => {
				if (err) reject(err)
				else resolve("Inserted " + rows.affectedRows + " row(s) successfully")
			})
		} else reject("Unable to insert data")
	})
}

module.exports = createData
