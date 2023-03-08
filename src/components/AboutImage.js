import aboutImage from '../images/about-graphic.svg';

const ImgStyle = {
  width: '595px',
  height: '376px',
}

function AboutImage() { 
  return(
    <div>
      <img src={aboutImage} style={ImgStyle} alt="Graphic of 5 people working together"/>
    </div>
  )
}

export default AboutImage;