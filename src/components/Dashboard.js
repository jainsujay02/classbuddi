/* need:
* dashboard will inherit many components
* first inherit component = text-container for header
* second inherit component = image (img should be component not href file)
*
*/
import DashboardImage from "./DashboardImage";
import DashboardHeader from "./DashboardHeader";
import DashboardList from "./DashboardList";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Contain = {
  backgroundColor: '#EEEEEE',
  fontFamily: "'Poppins', sans-serif",
}

const ClassHeaderStyle = {
  fontWeight: '600',
  marginBottom: '30px',
  fontSize: '22px'
}

let numStudents = 10;

function roster() {
  var students = [];
  var i;
  for (i = 0; i < numStudents; i++ ){
    students[i]=({
      name: 'joe b',
      image: '',
    });
  }
  const rost = {
    courseName: 'comsci',
    contactList:students,
  }
  return rost;
}



//there will be a grid to organize the various class lists next to each other
//there will be a grid for each contact to organize the data displayed within them?
function Dashboard() {
  return(
    <div style={Contain}>
    <br></br>
    <br></br>
    <br></br>
      <DashboardHeader/>
      <Box
      sx={{
        marginTop:'40px',
        marginLeft: '100px',
      }}>
        <Stack 
          direction="row"
          spacing={8}
        >
          <Box>
            <div style={ClassHeaderStyle}>{roster().courseName}</div>
            <DashboardList classStudentList={roster().contactList}/>
          </Box>
          <Box>
            <div style={ClassHeaderStyle}>{roster().courseName}</div>
            <DashboardList classStudentList={roster().contactList}/>
          </Box>
          <DashboardImage/>
        </Stack>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Box>
    </div>
  );
}
export default Dashboard;