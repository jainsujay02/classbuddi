import dashboardImage from '../images/dashboard-img.svg';

const ImageStyle = {
  width: '380px',
  height: '323px',
}

const ConStyle = {
  width: '380px',
  verticalAlign: 'bottom',
  alignItems: 'center',
}

function DashboardImage() {
  return(
    <div style={ConStyle}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <img style={ImageStyle} src={dashboardImage} alt="Dashboard Page Graphic"/>
    </div>
    );
};

export default DashboardImage;