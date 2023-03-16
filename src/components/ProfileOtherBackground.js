
import Box from '@mui/material/Box';
import styled from 'styled-components';
import ClassesStacked from "./ClassesStacked";
import InterestsList from './InterestsList';
import SocialList from './SocialsList';
import NameBlock from './NameBlock';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserDataFromName, auth } from './utils/firebase';

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

const ProfileOtherBackground = () => {
    let { id } = useParams();
    // console.log(id);

    // state variable to hold other student's profile object
    const [otherStudent, setOtherStudent] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log("running use effect from profile other");
            // console.log(id);
            const otherStudentPromise = getUserDataFromName(id);
            otherStudentPromise.then((value) => {
                // @Sujay - the request assumes that every student has a distinct name
                // The value here is an array of students with the name id, but there would\
                // always be only one element because of our assumption.
                setOtherStudent(value[0]);
            });
          }
          else {
            // console.log("Dashboard Err!!")
          }
        });
      }, []);
    // console.log("Checking nullity", otherStudent);
    if (!otherStudent?.name) return (<p>Loading...</p>);
    return(
        <Bg>
            <ClassBox>
                <NameBlock props = {otherStudent}/>
                <p style={HeaderStyle}> Courses </p>
                <ClassesStacked props = {otherStudent} />
                <p style={HeaderStyle}> Interests </p>
                <InterestsList props = {otherStudent}/>
                <p style={HeaderStyle}> Contact Information </p>
                <SocialList props = {otherStudent}/>
            </ClassBox>

        </Bg>

    )

}

export default ProfileOtherBackground;