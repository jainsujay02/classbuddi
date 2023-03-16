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

function DashboardList(props){
  //will replace this first div with a function to handle
  //grabbing the header
  if (!props.student?.courses) return (<p>Loading...</p>);
  // @Sujay - I figured out this if statement that prevents loading a null coursemap :)
  if (!props.courseMap?.size) return (<p>Loading...</p>)


  const n1size = props.courseMap.get(props.student.courses[props.index]).length;

  // console.log("n1size is", n1size)

  function Work () {
    let arr = []
    for (let i = 0; i < n1size && i < 4; i++ ) {
      arr.push(props.courseMap.get(props.student.courses[props.index])[i].name);
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
      <div style={ClassHeaderStyle}>{props.student.courses[props.index]}</div>
      <Box sx={{
        width: 348,
        height: 'auto',
        display: 'flex',
        }}>
        <Grid container rowSpacing={3}>
          <Work/>
        </Grid>
      </Box>
    </div>
  );
}


export default DashboardList;