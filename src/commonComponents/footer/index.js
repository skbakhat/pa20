import WifiIcon from '@material-ui/icons/Wifi';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import './style.css'


function Footer() {
  return (
    <div className="MainFooter">
      <div className="item">
      <a href="">Shopping</a>
      <a href="">Terms and Condition</a>
      <a href="">Privacy Policy</a>
      </div>
        <div className="Deviderr"></div>

      <div className="item">
      <p>News Lettor</p>
      <input type="text" placeholder="Enter your Email"></input>
      </div>
      <div className="Deviderr"></div>
      <div className="item">
      <a href=""><WifiIcon /></a>
     <a href=""> <TwitterIcon /></a>
      <a href=""><InstagramIcon /></a>
     <a href> <FacebookIcon /></a>
      </div>
    </div>
  );
}
export default Footer;
