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

import { useEffect } from "react";

// firebase imports
import { getUserData } from "./utils/firebase"

const Contain = {
  backgroundColor: '#EEEEEE',
  fontFamily: "'Poppins', sans-serif",
}
//there will be a grid to organize the various class lists next to each other
//there will be a grid for each contact to organize the data displayed within them?
function Dashboard() {
  
  useEffect(() => {
    console.log("RES FROM DB", getUserData());
  },[]);

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
          <DashboardList/>
          <DashboardList/>
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