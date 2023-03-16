import styled from 'styled-components'
import landing_graphic from '../images/graphic-landing.png'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Landing = styled.div`
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const TitleStyle = {
  marginTop: '-5px',
  width: '100%',
  height: '128px',
  marginBottom: '0px',
  
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '290%',
  lineHeight: '100px',
  
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '-0.25px',
  
  color: "#333333",
};

const BlurbStyle = {
  width: '90%',
  height: '72px',
  fontSize: '90%',
  color: '#5F6C7B',
  lineHeight: '36px',
  fontStyle: 'normal',
  fontFamily: 'Poppins',
  textAlign: 'left',
  marginTop: '-8px',
};

const ImgStyle = {
  width: '100%',
  height: '110%',
  marginTop: '-80px'
};

const LandingImage = () => {
  const navigate = useNavigate();
    return (
        <Landing>
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <p style={TitleStyle}>ClassBuddi</p>
              <p style={BlurbStyle}>Reach out to fellow classmates. Build a 
               support system. Find a classbuddi.
                <Button variant="outlined" 
                style={{textTransform: 'none'}}
                sx={{marginTop: 3, gap: 6, padding: '16px 20px', borderRadius: 4, border: '1.5px solid #2B59C3', color: '#2B59C3', width: '43%', height: 56, 
                fontSize: '62%', lineHeight: 24, letterSpacing: 0.2, fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 600, alignItems: 'left', display: 'flex'}}
                onClick = {() => {navigate("/about")}}
                >
                  learn more</Button>
              </p>
            </Grid>
            <Grid item xs={5}>
              <img style={ImgStyle} src={landing_graphic} alt="Graphic Landing"></img>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Landing>
    );
  }
  
export default LandingImage;
