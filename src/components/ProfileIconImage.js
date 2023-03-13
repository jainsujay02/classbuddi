import profIcon from '../images/prof-icon.svg';

function ProfileIconImage(props){
  return(
    <div><img src={props.image} alt="Avatar Icon"/></div>
  );
};

ProfileIconImage.defaultProps = {
    image: profIcon,
 }
export default ProfileIconImage;