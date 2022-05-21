const executeQuery = (query, connection) => {
	return new Promise((resolve, reject) => {
		if (connection) {
			connection.query(query, (err, rows, fields) => {
				if (err) reject(err)
				else resolve(rows)
			})
		} else reject("Unable to establish connection to the database")
	})
}

module.exports = executeQuery
