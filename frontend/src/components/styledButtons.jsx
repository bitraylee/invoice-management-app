import { styled, alpha } from "@mui/material/styles"
import Box from "@mui/material/Box"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"

//?Styling for the main add/delete/delete buttons

const Search = styled("div")(({ theme }) => ({
	color: "#232323",
	position: "relative",
	borderRadius: "10px",
	backgroundColor: "#eee",
	height: "45px",
	"&:hover": {
		backgroundColor: "#ddd",
	},
	marginRight: "2rem",
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: "0 0.6rem",
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "rgba(0,0,0,0.5)"
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#333",
	fontSize: "0.8rem",
	"& .MuiInputBase-input": {
		padding: "0.5rem 0.5rem 0.5rem 0",
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1rem + 0.7*3rem)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}))

const FlexBox = styled("div")(() => ({
	width: "90vw",
	height: "4rem",
	backgroundColor: "none",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	color: "#333",
	// padding:"0 80px"
}))

const StyledCustomButton = styled(Button)((theme) => ({
	fontSize: "0.6rem",
	width: theme.width,
	height: "2rem",
	color: "#fefefe",
	boxShadow: "none",

	backgroundColor: "rgba(247,37,133,0.8)",
	"&:hover": {
		backgroundColor: "#f72585",
		boxShadow: "0px 0px 25px 0px rgba(247,37,133,0.5)",
	}


	// border: "2px solid #333",
	// color: "#333"
}))
const StyledCustomButtonTransparent = styled(Button)((theme) => ({
	fontSize: "0.6rem",
	width: theme.width,
	height: "2rem",
	color: "#232323",
	boxShadow: "none",
	backgroundColor: "rgba(247, 37, 133,0.1)",
	"&:hover": {
		backgroundColor: "rgba(247, 37, 133,0.2)",
		boxShadow: "none",
	}


	// border: "2px solid #333",
	// color: "#333"
}))

const DataGridStyle = {
	color: "#232323",
	fontSize: "0.8rem",
	// border: "2px solid rgba(255,255,255, 0.2)",
	border: "none",
	"& .MuiCheckbox-root .MuiSvgIcon-root": {
		color: "#232323",
		fontSize: "1rem",
	},
	"& .MuiCheckbox-root .Mui-checked": {
		color: "#f72585",
	},
	"& .MuiDataGrid-iconSeparator": {
		display: "none",
	},
	"& .MuiDataGrid-columnHeaders": {
		borderBottom: `none`,
		backgroundColor: "rgba(0,0,0,0.1)",
	},
	"& .MuiDataGrid-footerContainer": {
		border: `none`,
		backgroundColor: "rgba(0,0,0,0.1)",
		color: "#232323",
	},
	"& .MuiDataGrid-footerContainer .MuiTablePagination-root": {
		color: "#232323 !important",
	},
	"& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
		borderBottom: `2px solid rgba(255,255,255, 0.2)`,
	},
	"& .MuiDataGrid-cell": {
		color: "#232323",
	},
	".MuiDataGrid-columnHeader :hover .MuiDataGrid-sortIcon": {
		color: "#232323",
	},
	".MuiDataGrid-columnHeader .MuiDataGrid-sortIcon": {
		color: "#232323",
	},
	".MuiDataGrid-columnHeader .MuiDataGrid-menuIcon button svg": {
		color: "#232323",
	},
}

export {
	Search,
	SearchIconWrapper,
	StyledInputBase,
	StyledCustomButton,
	StyledCustomButtonTransparent,
	FlexBox,
	DataGridStyle
}
