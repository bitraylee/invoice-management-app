import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"
// import { useState } from "react"
import axios from "axios"
import { StyledCustomButton } from "./styledButtons"

const InputField = styled(TextField)(() => ({
   margin: "10px",
   width: "40%",
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
export default function EditDialog({ open, selectedRow, handleEditClose }) {
   const [invoiceCurrency, setInvoiceCurrency] = useState("");
   const [custPaymentTerms, setCustPaymentTerms] = useState("");

   const getInvoiceCurrency = (event) => {
      setInvoiceCurrency(event.target.value);
   }
   const getCustPaymentTerms = (event) => {
      setCustPaymentTerms(event.target.value);
   }

   const handleEdit = () => {
      console.log("Edit req sent!");
      axios({
         method: "post",
         headers: {},
         url: "http://localhost:8000/handle/edit",
         data: {
            selectedRow: selectedRow,
            invoiceCurrency: invoiceCurrency,
            custPaymentTerms: custPaymentTerms,
         }
      }).then(response => {
         console.log(response);
      }).catch(e => {
         console.log(e);
      })
      handleEditClose();
   }
   return (
      <div>
         <StyledDialog open={open} onClose={handleEditClose} maxWidth="lg">
            <DialogTitle color="#232323">Edit</DialogTitle>
            <DialogContent>
               <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "fit-content"
               }}>
                  <InputField variant='standard' size="small" onChange={getInvoiceCurrency} label="Invoice Currency" ></InputField>
                  <InputField variant='standard' size="small" onChange={getCustPaymentTerms} label="Customer Payment Terms" ></InputField>
               </div>
            </DialogContent>
            <DialogActions>
               <StyledCustomButton variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleEdit} >EDIT</StyledCustomButton>
               <StyledCustomButton variant="outlined" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleEditClose} >CANCEL</StyledCustomButton>
            </DialogActions>
         </StyledDialog>
      </div>
   )
}
