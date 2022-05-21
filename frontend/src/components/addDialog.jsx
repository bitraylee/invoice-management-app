import React, { useState, useEffect } from "react"
// import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
// import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"
import axios from "axios"
import { StyledCustomButton } from "./styledButtons"
// import "./hideDate.css"

const InputField = styled(TextField)(() => ({
   // backgroundColor: "#eee",
   // borderRadius: "5px 5px 0 0",
   margin: "10px",
   width: "23%",
   padding: "0",
   fontSize: "0.7rem",
   height: "fit-content",
   input: {
      margin: "0.5rem 0 0 0",
   },
   ".MuiInputLabel-root": {
      fontSize: "0.8rem",
   },
   "input[type=date]:required:invalid::-webkit-datetime-edit": {
      color: "transparent",
   },
   "input[type=date]:focus::-webkit-datetime-edit": {
      color: "black !important",
   },
   '& label.Mui-focused': {
      color: '#f72585',
   },
   '& .MuiInput-underline:after': {
      borderBottomColor: '#f72585',
   }

}))
const StyledDialog = styled(Dialog)(() => ({
   ".MuiDialog-paper": {
      backgroundColor: "#fefefe",
   },
}))

export default function AddDialog({ open, handleClickOpen, handleClose }) {
   let [businessCode, getbusinessCode] = useState("")
   let [customerNumber, getcustomerNumber] = useState("")
   let [clearDate, getclearDate] = useState("")
   let [businessYear, getbusinessYear] = useState("")
   let [documentID, getdocumentID] = useState("")
   let [postingDate, getpostingDate] = useState("")
   let [documentCreateDate, getdocumentCreateDate] = useState("")
   let [dueDate, getdueDate] = useState("")
   let [invoiceCurrency, getinvoiceCurrency] = useState("")
   let [documentType, getdocumentType] = useState("")
   let [postingID, getpostingID] = useState("")
   let [totalOpenAmount, gettotalOpenAmount] = useState("")
   let [baselineCreateDate, getbaselineCreateDate] = useState("")
   let [customerPaymentTerms, getcustomerPaymentTerms] = useState("")
   let [invoiceID, getinvoiceID] = useState("")

   const getbusinessCodeHandler = (event) => {
      businessCode = event.target.value
   }
   const getcustomerNumberHandler = (event) => {
      customerNumber = event.target.value
   }
   const getclearDateHandler = (event) => {
      clearDate = event.target.value
   }
   const getbusinessYearHandler = (event) => {
      businessYear = event.target.value
   }
   const getdocumentIDHandler = (event) => {
      documentID = event.target.value
   }
   const getpostingDateHandler = (event) => {
      postingDate = event.target.value
   }
   const getdocumentCreateDateHandler = (event) => {
      documentCreateDate = event.target.value
   }
   const getdueDateHandler = (event) => {
      dueDate = event.target.value
   }
   const getinvoiceCurrencyHandler = (event) => {
      invoiceCurrency = event.target.value
   }
   const getdocumentTypeHandler = (event) => {
      documentType = event.target.value
   }
   const getpostingIDHandler = (event) => {
      postingID = event.target.value
   }
   const gettotalOpenAmountHandler = (event) => {
      totalOpenAmount = event.target.value
   }
   const getbaselineCreateDateHandler = (event) => {
      baselineCreateDate = event.target.value
   }
   const getcustomerPaymentTermsHandler = (event) => {
      customerPaymentTerms = event.target.value
   }
   const getinvoiceIDHandler = (event) => {
      invoiceID = event.target.value
   }

   const submitHandler = (event) => {

      axios.post("http://localhost:8000/handle/create", {
         business_code: businessCode,
         cust_number: customerNumber,
         clear_date: clearDate,
         business_year: businessYear,
         doc_id: documentID,
         posting_date: postingDate,
         document_create_date: documentCreateDate,
         due_in_date: dueDate,
         invoice_currency: invoiceCurrency,
         document_type: documentType,
         posting_id: postingID,
         total_open_amount: totalOpenAmount,
         baseline_create_date: baselineCreateDate,
         cust_payment_terms: customerPaymentTerms,
         invoice_id: invoiceID,
      }, {}
      )
         .then((response) => {
            console.log(response)
         })
         .catch((e) => {
            console.log(e)
         })
      event.preventDefault()
      handleClose()
   }
   return (
      <div>
         <StyledDialog open={open} onClose={handleClose} maxWidth="lg">
            <DialogTitle color="#333">Add</DialogTitle>
            <DialogContent>
               <div
                  style={{
                     display: "flex",
                     flexWrap: "wrap",
                     width: "fit-content",
                  }}
               >
                  <InputField
                     onChange={getbusinessCodeHandler}
                     variant="standard"
                     size="small"
                     label="Business Code"
                  ></InputField>
                  <InputField
                     onChange={getcustomerNumberHandler}
                     variant="standard"
                     size="small"
                     label="Customer Number"
                  ></InputField>
                  <InputField
                     required
                     onChange={getclearDateHandler}
                     variant="standard"
                     size="small"
                     type="date"
                     label="Clear Date"
                  ></InputField>
                  <InputField
                     onChange={getbusinessYearHandler}
                     variant="standard"
                     size="small"
                     label="Business Year"
                  ></InputField>
                  <InputField
                     onChange={getdocumentIDHandler}
                     variant="standard"
                     size="small"
                     label="Document ID"
                  ></InputField>
                  <InputField
                     required
                     onChange={getpostingDateHandler}
                     variant="standard"
                     size="small"
                     type="date"
                     label="Posting Date"
                  ></InputField>
                  <InputField
                     required
                     onChange={getdocumentCreateDateHandler}
                     variant="standard"
                     size="small"
                     type="date"
                     label="Document Create Date"
                  ></InputField>
                  <InputField
                     required
                     onChange={getdueDateHandler}
                     variant="standard"
                     size="small"
                     type="date"
                     label="Due Date"
                  ></InputField>
                  <InputField
                     onChange={getinvoiceCurrencyHandler}
                     variant="standard"
                     size="small"
                     label="Invoice Currency"
                  ></InputField>
                  <InputField
                     onChange={getdocumentTypeHandler}
                     variant="standard"
                     size="small"
                     label="Document Type"
                  ></InputField>
                  <InputField
                     onChange={getpostingIDHandler}
                     variant="standard"
                     size="small"
                     label="Posting ID"
                  ></InputField>
                  <InputField
                     onChange={gettotalOpenAmountHandler}
                     variant="standard"
                     size="small"
                     label="Total open amount"
                  ></InputField>
                  <InputField
                     required
                     onChange={getbaselineCreateDateHandler}
                     variant="standard"
                     size="small"
                     type="date"
                     label="Baseline Create Date"
                  ></InputField>
                  <InputField
                     onChange={getcustomerPaymentTermsHandler}
                     variant="standard"
                     size="small"
                     label="Customer Payemnt Terms"
                  ></InputField>
                  <InputField
                     onChange={getinvoiceIDHandler}
                     variant="standard"
                     size="small"
                     label="Invoice ID"
                  ></InputField>
               </div>
            </DialogContent>
            <DialogActions>
               <StyledCustomButton
                  variant="contained"
                  style={{
                     width: "49%",
                     // border: "1px #fefefe solid",
                     color: "#fefefe",
                  }}
                  onClick={submitHandler}
               >
                  ADD
               </StyledCustomButton>
               <StyledCustomButton
                  variant="contained"
                  style={{
                     width: "49%",
                     // border: "1px #fefefe solid",
                     color: "#fefefe",
                  }}
                  onClick={handleClose}
               >
                  CANCEL
               </StyledCustomButton>
            </DialogActions>
         </StyledDialog>
      </div>
   )
}
