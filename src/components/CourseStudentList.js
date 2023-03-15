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

const ClassHeaderStyle = {
  fontWeight: '600',
  marginBottom: '30px',
  fontSize: '22px'
}

function CourseStudentList(props){
  //will replace this first div with a function to handle
  //grabbing the header

  const n1size = props.props.length;


  function Work () {
    let arr = []
    for (let i = 0; i < n1size; i++ ) {
      arr.push(props.props[i].name);
    }
    return arr.map((n) =>
    <Grid item>
    <Link href={`/other/${n}`}
      underline="none"
      >
      {/* @Sujay - you would need to customize this for your account if you don't write robust code to display classmate */}
      <DashboardCard name = {n} />
    </Link>
  </Grid>
  );
  }

  // const n1 = props.courseMap.get(props.student.courses[props.index])[0].name;
  // const n2 = props.courseMap.get(props.student.courses[props.index])[1].name;

  return(
    <div>
      <Box sx={{
        width: 348,
        height: 'auto',
        display: 'flex',
        align: 'center'
        }}>
        <Grid container rowSpacing={3}>
          <Work/>
        </Grid>
      </Box>
    </div>
  );
}


export default CourseStudentList;