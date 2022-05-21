import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { styled } from "@mui/system"
import { StyledCustomButton } from "./styledButtons"

const InputField = styled(TextField)(() => ({
   backgroundColor: "#fefefe",
   borderRadius: "5px 5px 0 0",
   margin: "10px",
   width: "46%",
   padding: "0",
   height: "fit-content",
   "input": {
      margin: "0.5rem 0 0 0",
   },
   ".MuiInputLabel-root": {
      fontSize: "0.8rem"
   }

}))
const StyledDialog = styled(Dialog)(() => ({
   ".MuiDialog-paper": {
      backgroundColor: "#fefefe"
   }
}))

export default function DeleteDialog({ open, handleCancel, handleDelete }) {

   return (
      <div>
         <StyledDialog open={open} onClose={handleCancel} maxWidth="lg">
            <DialogTitle color="#232323">Delete Records?</DialogTitle>
            <DialogContent>
               <DialogContentText color="#333">Are you sure you want to delete these record[s]?</DialogContentText>
            </DialogContent>
            <DialogActions>
               <StyledCustomButton variant="filled" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleCancel} >CANCEL</StyledCustomButton>
               <StyledCustomButton variant="filled" style={{ width: "49%", border: "1px #fefefe solid", color: "#fefefe" }} onClick={handleDelete} >DELETE</StyledCustomButton>
            </DialogActions>
         </StyledDialog>
      </div>
   )
}
