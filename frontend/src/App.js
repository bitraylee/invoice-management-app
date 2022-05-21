import React from "react"

import Header from "./components/header"
import { styled } from "@mui/material"
import Footer from "./components/footer"
import MainTable from "./components/mainTableFinal"

const PageContainer = styled("div")(() => ({
	backgroundColor: "#fefefe",
	// backgroundColor: "#fefefe",
	width: "100vw",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	// justifyContent: "center",
	alignItems: "center",
}))

function App() {
	return (
		<PageContainer className="App">
			<Header></Header>
			<MainTable></MainTable>
			<Footer></Footer>
		</PageContainer>
	)
}

export default App
