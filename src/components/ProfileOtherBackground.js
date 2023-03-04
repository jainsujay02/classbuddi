
import Box from '@mui/material/Box';
import styled from 'styled-components';
import ClassesStacked from "./ClassesStacked";
import InterestsList from './InterestsList';
import NameBlock from './NameBlock';

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
    return(
        <Bg>
            <ClassBox>
                <NameBlock/>
                <p style={HeaderStyle}> Courses </p>
                <ClassesStacked />
                <p style={HeaderStyle}> Interests </p>
                <InterestsList/>
                <p style={HeaderStyle}> Contact Information </p>
            </ClassBox>

        </Bg>

    )

}

export default ProfileOtherBackground;