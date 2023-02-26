
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { shadows } from '@mui/system';
import ClassesStacked from "./ClassesStacked";

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
const ProfileOtherBackground = () => {
    return(
        <Bg>
            <ClassBox>
                <ClassesStacked />
            </ClassBox>

        </Bg>

    )

}

export default ProfileOtherBackground;