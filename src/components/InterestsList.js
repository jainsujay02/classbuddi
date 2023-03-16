import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';

const InterestText = {
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#2B59C3',

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing:' 0.4px',


}
const InterestsChip = styled(Chip)({

    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    gap: "6px",


    width: "164px",
    height: "40px",

    background: "#FFFFFF",
    border: "1px solid #87B4FD",
    borderRadius: "20px",


})







const InterestsList = (props) => {

    function Work (){
        let n1size = props.props.interests.length
        let arr = []
        for (let i = 0; i < n1size && i < 4; i++ ) {
          arr.push(props.props.interests[i]);
        }
        return arr.map((n) =>
        <InterestsChip
        label=<p style={InterestText}> {n} </p>>
    </InterestsChip>
        );}

    return (
        <Stack direction="row" spacing={'20px'} marginLeft= '119px'>
            <Work/>
        </Stack>
    )

}

export default InterestsList;