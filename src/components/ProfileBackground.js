import Box from '@mui/material/Box';
import styled from 'styled-components';
import ClassesStacked from "./ClassesStacked";
import InterestsList from './InterestsList';
import SocialList from './SocialsList';
import NameBlockProfile from './NameBlockProfile';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserData, auth } from './utils/firebase';

const Bg = styled.div`
    background-color: #EEEEEE;
    display: flex;
    justify-content: center;
`
const ClassBox = styled(Box)({
    marginTop: 168,
    width: 1044,
    height: 1235,
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',


})

const HeaderStyle = {

    width: '328px',
    height: '36px',
    marginLeft: '125px',
    marginTop: '45px',
    marginBottom: '20px',

    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '22px',
    lineHeight: '72px',
    /* or 327% */

    letterSpacing: '-0.25px',

    /* black */

    color: '#000000',
}


const ProfileBackground = () => {


    // state variable to hold student's profile object
    const [student, setStudent] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log("running use effect from profile");
            const studentPromise = getUserData();
            studentPromise.then((value) => {
                // console.log(value);
                setStudent(value);
            });
          }
          else {
            // console.log("Dashboard Err!!")
          }
        });
      }, []);
    // console.log("Checking nullity", student);
    if (!student?.name) return (<p>Loading...</p>);

    return(
        <Bg>
            <ClassBox>
                <NameBlockProfile  props = {student}/>
                <p style={HeaderStyle}> Courses </p>
                <ClassesStacked props = {student}/>
                <p style={HeaderStyle}> Interests </p>
                <InterestsList props = {student}/>
                <p style={HeaderStyle}> Contact Information </p>
                <SocialList props = {student}/>
            </ClassBox>

        </Bg>

    )

}

export default ProfileBackground;