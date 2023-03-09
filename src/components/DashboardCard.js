import Grid from '@mui/material/Grid';
import ProfileIconImage from "./ProfileIconImage";
import ArrowIcon from "./ArrowIcon";
import Box from '@mui/material/Box';

const nameStyle = {
  textAlign: 'middle',
}
function DashboardCard(){
  return(
     <Box
      sx={{
        width:348,
        height:96,
        maxWidth:348,
        maxHeight:96,
        fontSize: 16,
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 10px #00000040',
      }}
      >
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
            <div style={nameStyle}>Joe Bruin</div>
          </Grid>
          <Grid item xs={2}>
            <ArrowIcon/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardCard;