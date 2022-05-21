import React, { useEffect, useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
// import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"
import { StyledCustomButton } from "./styledButtons"

const InputField = styled(TextField)(() => ({
   margin: "10px",
   width: "22%",
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
      backgroundColor: "#fefefe"
   }
}))

export default function AdvanceSearch({ open, handleClose, handleAdvSearch }) {
   const [documentID, setDocumentID] = useState("");
   const [invoiceID, setInvoiceID] = useState("");
   const [customerNumber, setCustomerNumber] = useState("");
   const [businessYear, setBusinessYear] = useState("");

   const getDocID = (event) => {
      setDocumentID(event.target.value);
   }
   const getInvoiceID = (event) => {
      setInvoiceID(event.target.value);
   }
   const getCustNum = (event) => {
      setCustomerNumber(event.target.value);
   }
   const getBusiYear = (event) => {
      setBusinessYear(event.target.value);
   }

   const handleSubmit = (event) => {
      handleAdvSearch({
         documentID: documentID,
         invoiceID: invoiceID,
         customerNumber: customerNumber,
         businessYear: businessYear
      })
   }
   return (
      <div>
         <StyledDialog open={open} onClose={handleClose} maxWidth="lg">
            <DialogTitle color="#232323">Advance Search</DialogTitle>
            <DialogContent>
               <InputField
                  onChange={getDocID}
                  variant="standard"
                  size="small"
                  label="Document ID"
               ></InputField>
               <InputField
                  onChange={getInvoiceID}
                  variant="standard"
                  size="small"
                  label="Invoice ID"
               ></InputField>
               <InputField
                  onChange={getCustNum}
                  variant="standard"
                  size="small"
                  label="Customer Number"
               ></InputField>
               <InputField
                  onChange={getBusiYear}
                  variant="standard"
                  size="small"
                  label="Business Year"
               ></InputField>
            </DialogContent>
            <DialogActions>
               <StyledCustomButton variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleClose} >CANCEL</StyledCustomButton>
               <StyledCustomButton variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleSubmit} >SEARCH</StyledCustomButton>
            </DialogActions>
         </StyledDialog>
      </div>
   )
}
