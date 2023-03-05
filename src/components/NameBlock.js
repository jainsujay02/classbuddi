import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const ProfilePicture = styled(Avatar) ({
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


const NameBlock = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
            <ProfilePicture alt="Avatar" src={Avatar}> </ProfilePicture>
            </Grid>
            <Grid item xs={3}>
                    <Box>
                        <p style={NameStyle}>Joe Bruin</p>
                    </Box>
                    <Box>
                        <p style={TextStyle}>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Integer pretium sollicitudin neque id vulputate. 
                        Sed eget dolor a ligula auctor scelerisque </p>
                    </Box>
            </Grid>
            <Grid item xs={3}> 
                <Box sx={{marginTop: '115px'}}>
                    <p style={TextStyle}> pronouns </p>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <SaveContactButton><p> Save Contact </p></SaveContactButton>
            </Grid>
        </Grid>

        
        

        


    )
}

export default NameBlock;