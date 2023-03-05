import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';
import Grid from '@mui/material/Grid';


const ClassBox = styled(Box)({
    width: 812,
    height: 131.23,
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: '10px',
    justifyContent:"center",
    alignItems:"center",

  }
  )

const NextArrow = styled (IconButton) ({
    color: "rgba(66, 133, 244, 1)",
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    gap: 6,

    width: 41,
    height: 44,

    borderRadius: 20,
    marginLeft:650,
    marginTop: 40,

})

const CNStyle = {
    marginTop: '25px',
    marginLeft: '46px',
    width: '194px',
    height: '29px',
    
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '28px',
    /* or 156% */
    
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.004em',
    
    /* black */
    
    color: "#000000",
}

const CDStyle = {
    marginTop: '-30px',
    marginLeft: '46px',
    width: '643px',
    height: '33px',

    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '28px',
    /* or 156% */

    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.004em',

    /* black */

    color: '#000000',
}



const ClassesStacked = () => {
    return (
        <Stack   
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        >
            <ClassBox>

                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <p style={CNStyle}>COM SCI 33</p>
                    </Grid>
                    <Grid item xs={1}>
                        <NextArrow> <EastIcon/> </NextArrow> 
                    </Grid>
                    <Grid item xs={13}>
                        <p style={CDStyle}>Introduction to Computer Organization</p>
                    </Grid>
                </Grid>

            </ClassBox>

            <ClassBox>

                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <p style={CNStyle}>COM SCI 35L</p>
                    </Grid>
                    <Grid item xs={1}>
                        <NextArrow> <EastIcon/> </NextArrow> 
                    </Grid>
                    <Grid item xs={13}>
                        <p style={CDStyle}>Software Construction Labratory</p>
                    </Grid>
                </Grid>

            </ClassBox>

            <ClassBox>

                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <p style={CNStyle}>COM SCI 32</p>
                    </Grid>
                    <Grid item xs={1}>
                        <NextArrow> <EastIcon/> </NextArrow> 
                    </Grid>
                    <Grid item xs={13}>
                        <p style={CDStyle}>Introduction to Computer Science II</p>
                    </Grid>
                </Grid>

            </ClassBox>
        </Stack>
    )

}
export default ClassesStacked;