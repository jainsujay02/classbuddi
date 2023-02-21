import styled from 'styled-components'

const Container = styled.div`
	background-color: #333333;
	height: auto;
	color: #EEEEEE ;
	padding: 30px 0 10px 0;
    text-align: center;
    p {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
    }
	
  /* margin-bottom: 30px; */
`
const Footer = () => {
  return (
      <Container>
      <p>Built with ♥ in Canyon Point </p>
      <p>By Vanshita Gupta, Sujay Jain, Arsh Malik, Kimberly Nguyen and Sanjna Tailor.</p>
    </Container>
  )
}

export default Footer;