import React, { useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
	background-color: #EEEEEE;  
	height: auto;
	color: #333333;
	padding: 30px 0 10px 0;
    text-align: center;
    h1{
      font-family: 'Poppins', sans-serif;
      font-size: 40px;
    }
	
  /* margin-bottom: 30px; */
`
const titlecontainer = () => {
  return (
      <Container>
        <h1 style={{marginTop: '-50px'}}>Tell us about yourself</h1>
    </Container>
  )
}

export default titlecontainer;