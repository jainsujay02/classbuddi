import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Box from '@mui/material/Box';

const SocialText = {
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    textDecoration: 'underline',
    color: '#2B59C3',

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing:' 0.4px',


}
const SocialChip = styled(Chip)({

    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    gap: "6px",


    width: "164px",
    height: "40px",

    background: "#FFFFFF",
    border: "1px solid #FFFFFF",


})







const SocialList = (props) => {
    return (
        <Stack direction="row" spacing={'20px'} marginLeft= '119px'>
            {/* <Box sx={{marginTop: '7px'}} >
                <InstagramIcon></InstagramIcon>
                <p>{props.props.instagram}</p>
            </Box> */}
            <a href = {`https://www.instagram.com/${props.props.instagram}/`}>
              <SocialChip
                label=<p style={SocialText}> Instagram: {props.props.instagram} </p>>
            </SocialChip>
            </a>
            <a href = {`https://www.reddit.com/user/${props.props.reddit}/`}>
            <SocialChip
                label=<p style={SocialText}> Reddit: {props.props.reddit} </p>>
            </SocialChip>
            </a>
            <a href = {`https://www.discordapp.com/users/${props.props.discord}/`}>
            <SocialChip
            label=<p style={SocialText}> Discord: {props.props.discord} </p>>
        </SocialChip>
                     </a>

        </Stack>
    )

}

export default SocialList;