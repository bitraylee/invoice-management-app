import * as React from "react"
import { Box, Grid } from "@mui/material"
import imaLogo from "./resources/ima_logo.svg"


export default function BasicGrid() {
	return (
		<Box sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "20vh",
		}}>
			<Grid container spacing={1} sx={{
				width: "90vw"
			}}>
				<Grid item xs={3}>
					{/* <img src={ABCLogo} alt="" width="200px" /> */}

				</Grid>
				<Grid item xs={6} sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#232323",
					fontSize: "1rem"
				}}>
					<img src={imaLogo} alt="" width="40px" style={{ padding: "0 10px" }} />
					<span style={{ fontWeight: "bold", padding: "0 10px" }}>ML Based Invoice Management </span> Application
				</Grid>
				<Grid item xs={3}>

				</Grid>
			</Grid>
		</Box>
	)
}
