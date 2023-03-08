import DashboardCard from "./DashboardCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

 const ClassHeaderStyle = {
   fontWeight: '600',
   marginBottom: '30px',
   fontSize: '22px'
 }

/* THIS COMPONENT'S FUNCTION
* This component will inherit the DashboardCard components and will display
* the list of contacts that the user has for each class.
* March 3: Currently, the code has static placeholder profiles
* but it will be updated to handle and display the users in a list dynamically
*/

/*QUESTION
* fixed scrolling function for lists?
* how to dynamically pull list of students and class 
*/

function DashboardList(){
  //will replace this first div with a function to handle 
  //grabbing the header
  return(
    <div>
      <div style={ClassHeaderStyle}>COM SCI 131</div>
      <Box sx={{ 
        width: 348,
        height: 368,
        display: 'flex',
        }}> 
        <Grid container rowSpacing={3}>
          <Grid item>
            <Link href="'/'" 
              underline="none"
              > 
              <DashboardCard/>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" 
              underline="none"
              > 
              <DashboardCard/>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" 
              underline="none"
              > 
              <DashboardCard/>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DashboardList;