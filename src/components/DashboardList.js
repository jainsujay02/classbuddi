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

function DashboardList(props){
  //will replace this first div with a function to handle 
  //grabbing the header
  if (!props.student?.courses) return (<p>Loading...</p>);
  // @Sujay - I figured out this if statement that prevents loading a null coursemap :)
  if (!props.courseMap?.size) return (<p>Loading...</p>)
  const n1 = props.courseMap.get(props.student.courses[props.index])[0].name;
  const n2 = props.courseMap.get(props.student.courses[props.index])[1].name;

  return(
    <div>
      <div style={ClassHeaderStyle}>{props.student.courses[props.index]}</div>
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
              {/* @Sujay - you would need to customize this for your account if you don't write robust code to display classmate */}
              <DashboardCard name = {n1} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" 
              underline="none"
              > 
              <DashboardCard name = {n2} />
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