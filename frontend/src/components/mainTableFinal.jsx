import React, { useEffect, useState } from "react"
import { getHeadingData } from "./HeadingData"
import { DataGrid } from "@mui/x-data-grid"
import { getData } from "../services/getData"

import SearchIcon from "@mui/icons-material/Search"
import ButtonGroup from "@mui/material/ButtonGroup"
import { Refresh } from "@mui/icons-material"

import {
   Search,
   SearchIconWrapper,
   StyledInputBase,
   StyledCustomButton,
   StyledCustomButtonTransparent,
   FlexBox,
   DataGridStyle,
} from "./styledButtons"


//? Imports for CRUD functionality
import AddDialog from "./addDialog"
import EditDialog from "./editDialog"
import DeleteDialog from "./deleteDialog"
import axios from "axios"


//?Imports for search fucntionality
import AdvanceSearch from "./advanceSearch"
import { internal_resolveProps } from "@mui/utils"

//? Import custom alert


export default function MainTable() {
   const columns = getHeadingData()//Column Header data
   const [selectedRows, setSelectedRows] = useState([])//the selected rows in the datagrid
   const [editDisabled, setEditDisabled] = useState(true)//This option checks whether 1 row has been selected, for the edit button to be shown
   const [deleteDisabled, setDeleteDisabled] = useState(true)//functionality similar to editDisabled

   const [toEdit, setToEdit] = useState(0);//selects the sl_no for the selectd row to be edited

   //!Server side sorting 
   /**
    * * Sort model is the MUI Datagrid state which contains the sonting information regarding the table
    * ? field: is the parameter which dictates according to which column the data is sorted
    * ? sort: is pretty self explanatory; controls the how the data is to be sorted ASC | DESC
    * ? handleSortModelChange(): is the handler method which is called everytime the user clicks a column and sets the values of sortModel accordindly.
    */
   const [sortModel, setSortModel] = useState([
      { field: 'sl_no', sort: 'asc' },
   ]);
   const handleSortModelChange = (newModel) => {

      if (newModel.length == 0) {
         setSortModel([{ field: 'sl_no', sort: 'asc' }]);

      } else {
         setSortModel(newModel);
      }
      console.log(newModel);
   };

   //!Row and data Loading States 
   /**
    * ? rowCount: Number of rows that are to be displayed the the DataGrid
    * ? data: is all data that needs to to be displayed in the datagrid
    * ? rowState: contains the information regarding the page and pageSize
    */
   const [rowCount, setRowCount] = useState(0)
   // const [isLoading, setIsLoading] = useState(false)
   const [data, setData] = useState([])

   //! page get data method
   const [rowsState, setRowsState] = useState({
      page: 0,
      pageSize: 10,
   })


   //! Handle Search methods
   const [searchInput, setSearchInput] = useState("");
   const handleSearchField = (event) => {
      setSearchInput(event.target.value);
   }
   //? Advance search
   const [advSearchDialog, setAdvSearchDialog] = useState(false);
   const [isAdv, setIsAdv] = useState(false);
   const [advSearchData, setAdvSearchData] = useState({
      documentID: "",
      invoiceID: "",
      customerNumber: "",
      businessYear: ""
   });
   const handleSearchOpen = () => {
      setAdvSearchDialog(true);
   }
   const handleSearchClose = () => {
      setAdvSearchDialog(false);
   }
   const handleAdvSearch = (data) => {
      setAdvSearchData(data);
      setIsAdv(true);
      setAdvSearchDialog(false);
   }
   //! Handle Refresh of the datagrid

   const handleRefreshGrid = () => {
      setIsAdv(false);
      setAdvSearchData({
         documentID: "",
         invoiceID: "",
         customerNumber: "",
         businessYear: ""
      })
      setSelectedRows([]);
      setSortModel([{ field: 'sl_no', sort: 'asc' }]);
      setRowsState({ page: 0, pageSize: 10, });
      setSearchInput("");
   }

   //! Add, edit, delete dialogs
   const [addDialog, setAddDialog] = useState(false)
   const [editDialog, setEditDialog] = useState(false)
   const [deleteDialog, setDeleteDialog] = useState(false)


   const handleAddClickOpen = () => {
      setAddDialog(true)
   }
   const handleAddClose = () => {
      setAddDialog(false)
   }

   //! Handle the Edit Operations
   const handleEditClickOpen = () => {
      setEditDialog(true)
   }
   const handleEditClose = () => {
      setEditDialog(false)
   }

   /**
    * !======================================================== 
    * ! Delete Methods
    * !========================================================
    */

   const handleDeleteClickOpen = () => {
      setDeleteDialog(true)
   }
   const handleCancel = () => {
      setDeleteDialog(false)
   }
   const handleDelete = () => {
      let toDelete = selectedRows.map(row => {
         return data[row].sl_no;
      })
      console.log("Delete request sent for: ", toDelete.toString());
      axios({
         method: "post",
         url: "http://localhost:8000/handle/delete",
         headers: {},
         data: {
            rowsToDelete: toDelete.toString(),
         },
      }).then((response) => {
         setSelectedRows([]);
         console.log(response)
      })
         .catch((e) => {
            console.log(e)
         })
      handleCancel()
   }

   //? Update selected rows, and the sl_no(s) of the rows that need to be edit and/or deleted

   useEffect(() => {
      if (selectedRows.length == 1) {
         setEditDisabled(false)
         setToEdit(data[selectedRows[0]].sl_no);
      } else {
         setEditDisabled(true)
         setToEdit(0);
      }
      if (selectedRows.length > 0) {
         setDeleteDisabled(false)
      } else {
         setDeleteDisabled(true)
      }
   }, [selectedRows])


   /**
    * !======================================================== 
    * ! Prediction methods
    * !========================================================
    */
   const predictHandler = () => {
      if (selectedRows.length == 0) {
         alert("You must select a row!");
      }
      else {
         let docIdArray = selectedRows.map(rowNumber => {
            return Number(data[rowNumber].doc_id);
         })
         // console.log(docIdArray)

         axios.post("http://127.0.0.1:5000/get_prediction", {
            "data": docIdArray
         }, {}).then(response => {
            // console.log(response.data)
            let abArray = [];
            let newDocArray = [];
            (response.data).forEach(e => {
               abArray.push(e.aging_bucket);
            });
            (response.data).forEach(e => {
               newDocArray.push(Math.trunc(e.doc_id));
            });
            // console.log(abArray.toString());
            axios.post("http://localhost:8080/Crud_Web_App/AddPrediction", {}, {
               params: {
                  docIdArray: newDocArray.toString(),
                  abArray: abArray.toString()
               }
            }).then(response => {
               console.log(response);
               handleRefreshGrid();
            }).catch(e => {
               console.log(e);
            })
         }).catch(err => {
            console.log(err);
         })
      }
   }

   /**
    * !======================================================== 
    * ! Data Loading and updates
    * !========================================================
    */
   useEffect(() => {
      let page = rowsState.page;
      let pageSize = rowsState.pageSize;

      // setIsLoading(true)
      // setRowCount(undefined)


      getData(page, pageSize, sortModel[0].field, sortModel[0].sort, searchInput, isAdv, advSearchData)
         .then((response) => {
            console.log(response)
            setData(
               response.selectedData.map((e, index) => {
                  return {
                     id: index,
                     sl_no: e.sl_no,
                     business_code: e.business_code,
                     cust_number: e.cust_number,
                     clear_date: (e.clear_date == "0000-00-00" ? "NA" : e.clear_date),
                     buisness_year: e.buisness_year,
                     doc_id: e.doc_id,
                     posting_date: e.posting_date,
                     document_create_date: e.document_create_date,
                     document_create_date1: e.document_create_date1,
                     due_in_datedate: e.due_in_datedate,
                     invoice_currency: e.invoice_currency,
                     document_type: e.document_type,
                     posting_id: e.posting_id,
                     area_business: e.area_business,
                     total_open_amount: e.total_open_amount,
                     baseline_create_date: e.baseline_create_date,
                     cust_payment_terms: e.cust_payment_terms,
                     invoice_id: e.invoice_id,
                     is_open: e.isOpen,
                     aging_bucket: (e.aging_bucket == 0 ? "NA" : e.aging_bucket),
                     is_deleted: e.is_deleted,
                  }
               })
            )
         })
         .catch((err) => {
            console.log(err)
         })
      // console.log(data);
   }, [rowsState, deleteDialog, editDialog, addDialog, searchInput, isAdv, advSearchData, sortModel])

   useEffect(() => {
      let page = rowsState.page;
      let pageSize = rowsState.pageSize;
      getData(page, pageSize, sortModel[0].field, sortModel[0].sort, searchInput, isAdv, advSearchData)
         .then((response) => {
            setRowCount(response.selectedRows);
         })
         .catch((err) => {
            console.log(err)
         })
   }, [searchInput, isAdv, deleteDialog])


   return (
      <div>
         {/* //! Add, Edit, Delete,Advance Search Dialog windows */}
         <AddDialog
            open={addDialog}
            handleClickOpen={handleAddClickOpen}
            handleClose={handleAddClose}
         ></AddDialog>
         <EditDialog
            open={editDialog}
            selectedRow={toEdit}
            handleEditClose={handleEditClose}
         ></EditDialog>
         <DeleteDialog
            open={deleteDialog}
            handleCancel={handleCancel}
            handleDelete={handleDelete}
         ></DeleteDialog>
         <AdvanceSearch
            open={advSearchDialog}
            handleClose={handleSearchClose}
            handleAdvSearch={handleAdvSearch}
         ></AdvanceSearch>


         <div style={{
            width: "100vw",
            backgroundColor: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
         }}>
            <FlexBox>
               <ButtonGroup sx={{ width: "33%" }}>
                  <StyledCustomButton variant="contained" sx={{ fontSize: "0.6rem" }} onClick={predictHandler}>
                     PREDICT
                  </StyledCustomButton>
                  <StyledCustomButtonTransparent variant="contained" sx={{ fontSize: "0.6rem" }} >
                     ANALYTICS VIEW
                  </StyledCustomButtonTransparent>
                  <StyledCustomButtonTransparent variant="contained" onClick={handleSearchOpen} sx={{ fontSize: "0.6rem" }} >
                     ADVANCED SEARCH
                  </StyledCustomButtonTransparent>
                  <StyledCustomButton variant="contained" onClick={handleRefreshGrid}>
                     <Refresh></Refresh>
                  </StyledCustomButton>
               </ButtonGroup>
               <Search sx={{ width: "33%" }}>
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                     placeholder="Search Customer ID"
                     inputProps={{ "aria-label": "search" }}
                     onChange={handleSearchField}
                     value={searchInput}
                  />
               </Search>
               <ButtonGroup
                  variant="outlined"
                  aria-label="small outline button group"
                  sx={{
                     width: "33%",
                  }}
               >
                  <StyledCustomButton
                     variant="contained"
                     width="33%"
                     onClick={handleAddClickOpen}
                  >
                     ADD
                  </StyledCustomButton>
                  <StyledCustomButton
                     variant="contained"
                     width="33%"
                     disabled={editDisabled}
                     onClick={handleEditClickOpen}
                  >
                     EDIT
                  </StyledCustomButton>
                  <StyledCustomButton
                     variant="contained"
                     width="33%"
                     disabled={deleteDisabled}
                     onClick={handleDeleteClickOpen}
                  >
                     DELETE
                  </StyledCustomButton>
               </ButtonGroup>
            </FlexBox>
         </div>
         <div
            style={{
               height: "65vh",
               width: "100vw",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               // flexDirection: "column"
            }}
         >
            <DataGrid
               rows={data}
               columns={columns}
               pageSize={10}
               rowsPerPageOptions={[10, 25, 50, 100]}
               checkboxSelection
               rowHeight={35}
               rowCount={rowCount}
               loading={false}
               // rowsPerPageOptions={[5]}
               //? This is the pagination options
               pagination
               {...rowsState}
               paginationMode="server"
               onPageChange={(page) =>
                  setRowsState((prev) => ({ ...prev, page }))
               }
               onPageSizeChange={(pageSize) =>
                  setRowsState((prev) => ({ ...prev, pageSize }))
               }
               //? CRUD Section
               selectionModel={selectedRows}
               onSelectionModelChange={(items) => setSelectedRows(items)}
               //? Custom style settings for to make look like the diagrams in the PRS

               //? Server side sorting
               sortingMode="server"
               sortModel={sortModel}
               onSortModelChange={handleSortModelChange}

               sx={DataGridStyle}
            />
         </div>
      </div>
   )
}
