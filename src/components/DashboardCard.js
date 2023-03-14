import Grid from '@mui/material/Grid';
import ProfileIconImage from "./ProfileIconImage";
import ArrowIcon from "./ArrowIcon";
import Box from '@mui/material/Box';
import styled from 'styled-components';
const nameStyle = {
  textAlign: 'middle',
  color: 'black',
}

const CardStyle = styled(Box)({
  width:348,
  height:96,
  maxWidth:348,
  maxHeight:96,
  fontSize: 16,
  borderRadius: '10px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 0px 10px #00000040',
  transitionDuration: '2s',
  '&:hover': {
    boxShadow: '0px 0px 10px #00000066',
  }
})

function DashboardCard(props){
  return(
     <CardStyle>
      <Box
        sx={{
          padding:'22px'
        }}>
        <Grid container 
          columnSpacing={5}
          alignItems='center'>
          <Grid item xs={3}>
            <ProfileIconImage/>
          </Grid>
          <Grid item xs={6.5}>
            <div style={nameStyle}>{props.name}</div>
          </Grid>
          <Grid item xs={2}>
            <ArrowIcon/>
          </Grid>
        </Grid>
      </Box>
    </CardStyle>
  );
}

export default DashboardCard;