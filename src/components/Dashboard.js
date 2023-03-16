/* need:
 * dashboard will inherit many components
 * first inherit component = text-container for header
 * second inherit component = image (img should be component not href file)
 *
 */
import DashboardImage from "./DashboardImage";
import DashboardHeader from "./DashboardHeader";
import DashboardList from "./DashboardList";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useEffect, useState } from "react";

// firebase imports
import { getUserData, getStudentsInClass, auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Contain = {
  backgroundColor: "#EEEEEE",
  fontFamily: "'Poppins', sans-serif",
};
//there will be a grid to organize the various class lists next to each other
//there will be a grid for each contact to organize the data displayed within them?
function Dashboard() {
  // student holds the current user info returned from the backend
  const [student, setStudent] = useState(null);
  // courseStudentMap holds the map of course -> student in that course
  const [courseStudentMap, setCourseStudentMap] = useState(new Map());
  const [courseList1, setCourseList1] = useState(null);
  const [courseList2, setCourseList2] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("entering Promise all");
        // Implementing Promise all
        // const userPromise = getUserData();
        // Promise.all([userPromise]).then((values) => {
        //   console.log("dashboard user:", values[0]);
        //   setStudent(values[0]);
        // });
        // console.log("Dashboard onAuth!!");
        // console.log("returned from form");
        const promise = getUserData();
        promise.then((value) => {
          // console.log("here", value);
          setStudent(value);
          const studentCourses = value.courses;
          studentCourses.forEach((course) => {
            const coursePromise = getStudentsInClass(course);
            coursePromise.then((cvalue) => {
              // console.log(cvalue);
              let temp = [];
              if (!courseStudentMap.has(course)) {
                cvalue.forEach((s) => {
                  if (s.name !== value.name) {
                    temp.push(s);
                  }
                });
                courseStudentMap.set(course, temp);
                setCourseList1(temp)
              }
            });
          });
          setCourseStudentMap(courseStudentMap);
        });
        promise.catch((err) => {
          // console.log(err);
        });
      }
      else {
        // console.log("Dashboard Err!!")
      }
    });
  }, []);
  // console.log("top level map", courseStudentMap);
  // console.log("top level course list 1", courseList1);
  // console.log("top level course list 2", courseList2);
  // console.log("top level student", student);
  return (
    <div style={Contain}>
      <br></br>
      <br></br>
      <br></br>
      <DashboardHeader props = {student} />
      <p></p>
      <Box
        sx={{
          marginTop: "40px",
          marginLeft: "100px",
        }}
      >
        <Stack direction="row" spacing={8}>
          <DashboardList student = {student} index = {0} courseMap = {courseStudentMap} />
          <DashboardList student = {student} index = {1} courseMap = {courseStudentMap} />
          <DashboardImage />
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
