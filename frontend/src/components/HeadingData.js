const HeadingData = [
	{
		id: "sl_no",
		numeric: true,
		disablePadding: false,
		label: "sl_no",
		field: "sl_no",
		minWidth: 150,
	},
	{
		id: "business_code",
		numeric: true,
		disablePadding: false,
		label: "business_code",
		field: "business_code",
		minWidth: 150,
	},
	{
		id: "cust_number",
		numeric: true,
		disablePadding: false,
		label: "cust_number",
		field: "cust_number",
		minWidth: 150,
	},
	{
		id: "clear_date",
		numeric: false,
		disablePadding: false,
		label: "clear_date",
		field: "clear_date",
		minWidth: 150,
	},
	{
		id: "buisness_year",
		numeric: true,
		disablePadding: false,
		label: "buisness_year",
		field: "buisness_year",
		minWidth: 150,
	},
	{
		id: "doc_id",
		numeric: true,
		disablePadding: false,
		label: "doc_id",
		field: "doc_id",
		minWidth: 150,
	},
	{
		id: "posting_date",
		numeric: false,
		disablePadding: false,
		label: "posting_date",
		field: "posting_date",
		minWidth: 150,
	},
	{
		id: "document_create_date",
		numeric: false,
		disablePadding: false,
		label: "document_create_date",
		field: "document_create_date",
		minWidth: 150,
	},
	{
		id: "due_in_date",
		numeric: false,
		disablePadding: false,
		label: "due_in_date",
		field: "due_in_date",
		minWidth: 150,
	},
	{
		id: "invoice_currency",
		numeric: false,
		disablePadding: false,
		label: "invoice_currency",
		field: "invoice_currency",
		minWidth: 150,
	},
	{
		id: "document_type",
		numeric: false,
		disablePadding: false,
		label: "document_type",
		field: "document_type",
		minWidth: 150,
	},
	{
		id: "posting_id",
		numeric: false,
		disablePadding: false,
		label: "posting_id",
		field: "posting_id",
		minWidth: 150,
	},
	{
		id: "total_open_amount",
		numeric: true,
		disablePadding: false,
		label: "total_open_amount",
		field: "total_open_amount",
		minWidth: 150,
	},
	{
		id: "baseline_create_date",
		numeric: false,
		disablePadding: false,
		label: "baseline_create_date",
		field: "baseline_create_date",
		minWidth: 150,
	},
	{
		id: "cust_payment_terms",
		numeric: false,
		disablePadding: false,
		label: "cust_payment_terms",
		field: "cust_payment_terms",
		minWidth: 150,
	},
	{
		id: "invoice_id",
		numeric: true,
		disablePadding: false,
		label: "invoice_id",
		field: "invoice_id",
		minWidth: 150,
	},
	{
		id: "is_open",
		numeric: true,
		disablePadding: false,
		label: "is_open",
		field: "is_open",
		minWidth: 150,
	},
	{
		id: "aging_bucket",
		numeric: true,
		disablePadding: false,
		label: "aging_bucket",
		field: "aging_bucket",
		minWidth: 150,
	},

	{
		id: "is_deleted",
		numeric: true,
		disablePadding: false,
		label: "is_deleted",
		field: "is_deleted",
		minWidth: 150,
	},
]

function getHeadingData() {
	return HeadingData
}

export { HeadingData, getHeadingData }
