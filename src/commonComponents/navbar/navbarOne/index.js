import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



import  './style.css';

function NavbarOne(){

    return(
        <>
        <p className="mainP"><a href >FREE SHIPPING AND RETURNSON</a> ALL ORDERS ABOVE $200</p>
        <hr/>
        <div className="main">

            <div className="iconsDiv">

            <PersonOutlineIcon className="imported" />
            <div className="lined"></div>
            <FavoriteBorderIcon className="imported" />
            <div className="lined"></div>
            
            <h5 className="imported">English</h5>
            </div>

            <div><h1>cosso.</h1></div>
            <div className="iconsDiv">
                <h5 className="imported">USD</h5>
                <div className="lined ,imported"></div>
                <SearchIcon className="imported"  />
                <div className="lined"></div>
                <ShoppingCartOutlinedIcon className="imported"   />
            </div>
        </div>
        </>
    )
}
export default NavbarOne;