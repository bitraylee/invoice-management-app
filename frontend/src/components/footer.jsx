import { styled } from '@mui/material'
import React from 'react'

const FlexContainer = styled('div')(() => ({
   width: "90vw",
   height: "10vh",
   display: "flex",
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
   color: "#232323",
   fontSize: "0.8rem"

}))
export default function Footer() {
   return (
      <FlexContainer>
         <p>Made with love by <a href="https://github.com/bitraylee" style={{ color: "#232323", fontWeight: "bold", textDecoration: "none" }}>bitraylee</a><span style={{ color: "red" }}> &hearts;
         </span></p>
      </FlexContainer>
   )
}