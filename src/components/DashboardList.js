import DashboardCard from "./DashboardCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProfileOtherBackground from "./ProfileOtherBackground";


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


function createList(contactArray){
  //need to know people?
   //array of contacts
  var numStudents = contactArray.length;
  var contactList = [];
  var i;
  for (i = 0; i < numStudents; i++ ){
    contactList[i] = (
    <Grid item>
      <Link href="'/'" 
        underline="none"
        > 
          <DashboardCard
            name={contactArray[i].name}
            image={contactArray[i].image}
          />
      </Link>
  </Grid>
  )
  }
  return contactList;
}

function DashboardList(props){
  //will replace this first div with a function to handle 
  //grabbing the header
  var contactArray = props.classStudentList;
  // var numStudents = contactArray.length;
  // var contactList = [];
  // var i;

  return(
    <div>
      <Box sx={{ 
        width: 348,
        height: 'auto',
        display: 'flex',
        }}> 
        <Grid container rowSpacing={3}>
          {createList(contactArray)}
        </Grid>
      </Box>
    </div>
  );
}


export default DashboardList;