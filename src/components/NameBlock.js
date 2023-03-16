import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ProfilePicture from "../images/ProfilePicture.svg";


const ProfilePictureContainer = styled(Avatar) ({
    marginTop: '90px',
    marginLeft: '110px',
    width: '96px',
    height: '94px',
})



const SaveContactButton = styled(Button) ({
    marginTop: '110px',

    variant:"contained",
    justifyContent: 'center',
    alignItems: 'center',
    width: '128px',
    height: '32px',
    background: 'rgba(226, 188, 185, 0.5)',
    borderRadius: '20px',
    color: 'black',

    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',



})

const NameStyle = {
    width: '400px',
    height: '40px',
    marginTop: '80px',

    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '40px',
    lineHeight: '72px',
    /* or 180% */

    letterSpacing: '-0.25px',

    /* black */

    color:'#000000',

}

const TextStyle ={

    width: '599px',
    height: '75px',

    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',

    color: '#8C8C8C',
}


const NameBlock = (props) => {

    let nsize = props.props.courses.length

    if (props.props.imgUrl) {
        return (
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <ProfilePictureContainer alt="Avatar" src={props.props.imgUrl}> </ProfilePictureContainer>
                </Grid>
                <Grid item xs={3}>
                        <Box>
                            <p style={NameStyle}>{props.props.name}</p>
                        </Box>
                        <Box>
                            <p style={TextStyle}> {props.props.intro} </p>
                        </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{marginTop: '115px'}}>
                        <p style={TextStyle}> {props.props.pronouns} </p>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <ProfilePictureContainer alt="Avatar" src={ProfilePicture}> </ProfilePictureContainer>
                </Grid>
                <Grid item xs={3}>
                        <Box>
                            <p style={NameStyle}>{props.props.name}</p>
                        </Box>
                        <Box>
                            <p style={TextStyle}> {props.props.intro} </p>
                        </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box sx={{marginTop: '115px'}}>
                        <p style={TextStyle}> {props.props.pronouns} </p>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        )
    }
}

export default NameBlock;