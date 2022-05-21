INSERT INTO winter_internship
( business_code , cust_number , clear_date , buisness_year , doc_id , posting_date , document_create_date , due_in_date , invoice_currency , document_type , posting_id , total_open_amount , baseline_create_date , cust_payment_terms , invoice_id )
VALUES
(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);

business_Code
customer_Number
clear_Date
business_Year
document_ID
posting_Date
document_Create_Date
due_Date
invoice_Currency
document_Type
posting_ID
total_Open_Amount
baseline_Create_Date
customer_Payment_Terms
invoice_ID

business_Code,customer_Number,clear_Date,business_Year,document_ID,posting_Date,document_Create_Date,due_Date,invoice_Currency,document_Type,posting_ID,total_Open_Amount,baseline_Create_Date,customer_Payment_Terms,invoice_ID

?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,

<!-- statement.setInt(1, lower); -->

statement.setString(1,business_Code);
statement.setInt(2,customer_Number);
statement.setDate(3,Date.valueOf(clear_Date));
statement.setString(4,business_Year);
statement.setString(5,document_ID);
statement.setDate(6,Date.valueOf(posting_Date));
statement.setDate(7,Date.valueOf(document_Create_Date));
statement.setDate(8,Date.valueOf(due_Date));
statement.setString(9,invoice_Currency);
statement.setString(10,document_Type);
statement.setInt(11,posting_ID);
statement.setDouble(12,total_Open_Amount);
statement.setDate(13,Date.valueOf(baseline_Create_Date));
statement.setString(14,customer_Payment_Terms);
statement.setInt(15,invoice_ID);

setString(1, run.getBusiness_code());
setInt(2, run.getCust_number());
setDate(Date.valueOf(3), Date.valueOf(run.getClear_date()));
setString(4, run.getBuisness_year());
setString(5, run.getDoc_id());
setDate(Date.valueOf(6), Date.valueOf(run.getPosting_date()));
setDate(Date.valueOf(7), Date.valueOf(run.getDocument_create_date()));
setDate(Date.valueOf(8), Date.valueOf(run.getDue_in_date()));
setString(9, run.getInvoice_currency());
setString(10, run.getDocument_type());
setInt(11, run.getPosting_id());
setDouble(12, run.getTotal_open_amount());
setDate(Date.valueOf(13), Date.valueOf(run.getBaseline_create_date()));
setString(14, run.getCust_payment_terms());
setInt(15, run.getInvoice_id());

businessCode,customerNumber,clearDate,businessYear,documentID,postingDate,documentCreateDate,dueDate,invoiceCurrency,documentType,postingID,totalOpenAmount,baselineCreateDate,customerPaymentTerms,invoiceID

businessCode:businessCode,
customerNumber:customerNumber,
clearDate:clearDate,
businessYear:businessYear,
documentID:documentID,
postingDate:postingDate,
documentCreateDate:documentCreateDate,
dueDate:dueDate,
invoiceCurrency:invoiceCurrency,
documentType:documentType,
postingID:postingID,
totalOpenAmount:totalOpenAmount,
baselineCreateDate:baselineCreateDate,
customerPaymentTerms:customerPaymentTerms,
invoiceID:invoiceID

System.out.println(business_Code);
System.out.println(customer_Number);
System.out.println(clear_Date);
System.out.println(business_Year);
System.out.println(document_ID);
System.out.println(posting_Date);
System.out.println(document_Create_Date);
System.out.println(due_Date);
System.out.println(invoice_Currency);
System.out.println(document_Type);
System.out.println(posting_ID);
System.out.println(total_Open_Amount);
System.out.println(baseline_Create_Date);
System.out.println(customer_Payment_Terms);
System.out.println(invoice_ID);

1111
1111
2022-04-12
1111
1111
2022-04-12
2022-04-12
2022-04-12
1111
1111
1111
1111
2022-04-12
1111
1111

business_Code
Integer.parseInt(customer_Number)
Date.valueOf(clear_Date)
Integer.parseInt(business_Year)
document_ID
Date.valueOf(posting_Date)
Date.valueOf(document_Create_Date)
Date.valueOf(due_Date)
invoice_Currency
document_Type
Integer.parseInt(posting_ID)
Float.parseFloat(total_Open_Amount)
Date.valueOf(baseline_Create_Date)
customer_Payment_Terms
Integer.parseInt(invoice_ID)

System.out.println(business_Code);
System.out.println(Integer.parseInt(customer_Number));
System.out.println(Date.valueOf(clear_Date));
System.out.println(Integer.parseInt(business_Year));
System.out.println(document_ID);
System.out.println(Date.valueOf(posting_Date));
System.out.println(Date.valueOf(document_Create_Date));
System.out.println(Date.valueOf(due_Date));
System.out.println(invoice_Currency);
System.out.println(document_Type);
System.out.println(Integer.parseInt(posting_ID));
System.out.println(Float.parseFloat(total_Open_Amount));
System.out.println(Date.valueOf(baseline_Create_Date));
System.out.println(customer_Payment_Terms);
System.out.println(Integer.parseInt(invoice_ID));

documentID:documentID,
invoiceID:invoiceID,
customerNumber:customerNumber,
businessYear:businessYear,

documentID:advSearchData.documentID,
invoiceID:advSearchData.invoiceID,
customerNumber:advSearchData.customerNumber,
businessYear:advSearchData.businessYear,

String documentID= request.getParameter("documentID");
String invoiceID= request.getParameter("invoiceID");
String customerNumber= request.getParameter("customerNumber");
String businessYear= request.getParameter("businessYear");

String documentID,String invoiceID,String customerNumber,String businessYear

"1929873765",1929873765,200792734,2019

doc_id,invoice_id,cust_number,buisness_year

SELECT \* FROM winter_internship WHERE doc_id=? AND invoice_id=? AND cust_number=? AND buisness_year=? LIMIT ?, ?

SELECT \* FROM winter_internship WHERE doc_id=? AND invoice_id=? AND cust_number=? AND buisness_year=? LIMIT ?, ?;

"SELECT \* FROM winter_internship WHERE cust_number LIKE ? ORDER BY " + field + " " + sort.toUpperCase()+ " LIMIT ?,?"

ORDER BY "+field+" "+ sort.toUpperCase()+"
