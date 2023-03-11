import styled from 'styled-components';
import Box from '@mui/material/Box';

const Outer = styled(Box) ({
  height: 'auto',
  color: '#EEEEEE',
  fontSize: '16px',
  textAlign: 'center',
})

const Container = styled.div`
	color: #EEEEEE;
  background-color: #333333;
  div{
    padding: 10px 0px 10px 0;
  }
  /* margin-bottom: 30px; */
`

const Gradient = styled(Box) ({
  background: 'linear-gradient(to right, rgba(194, 233, 251, 0.5), #86B3FC)',
  height: '15px',
})

const Footer = () => {
  return (
    <Outer>
      <Gradient/>
      <Container>
      <div>
        <p>Built with ♥ in Canyon Point</p>
        <p>By Vanshita Gupta, Sujay Jain, Arsh Malik, Kimberly Nguyen and Sanjna Tailor.</p>
      </div>
      </Container>
    </Outer>
  )
}

export default Footer;