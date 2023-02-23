import styled from 'styled-components'
import landing_graphic from '../images/graphic-landing.png'

const Landing = styled.div`
background-color: #EEEEEE;
height: 100vh;
width: 100vw;

p {
  font-family: 'Poppins', sans-serif;
  margin-left: 187px;
  margin-right: 766px;
}
`

const TitleStyle = {
  fontSize: '72px',
  fontStyle: 'normal',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '-0.25px',
  lineHeight: '100px',
  color: '#333333',
  width: '559px',
  height: '128px',
  marginTop: '280px',
  marginBottom: '0px',
};

const BlurbStyle = {
  width: '559px',
  marginTop: '0px',
  height: '72px',
  fontSize: '24px',
  color: '#5F6C7B',
  lineHeight: '36px',
  fontStyle: 'normal',
  marginBottom: '0px',
  textAlign: 'left',
};

const ImgStyle = {
  width: '500px',
  height: '500px',
  left: '818px',
  top: '222px',
  position: 'absolute',
};

const ButtonStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 20px',
  gap: '6px',
  width: '233px',
  height: '56px',
  left: '185px',
  marginTop: '19px',
  border: '1.5px solid #2B59C3',
  borderRadius: '16px',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.2px',
  color: '#2B59C3',
  marginBottom: '0px',
};

const Landing_Image = () => {
    return (
        <Landing>
        <div style={{float:'left'}}>
          <p style={TitleStyle}>ClassBuddi</p>
          <p style={BlurbStyle}>
                Reach out to fellow classmates. Build a support system. Find a classbuddi.
                <button style={ButtonStyle} type="button">Join Us</button>
          </p>
        </div>
        <div>
          <img style={ImgStyle} src={landing_graphic} alt="Graphic Landing"></img>
        </div>
        </Landing>
    );
  }
  
export default Landing_Image;
