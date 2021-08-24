import "./style.css";
import { Link } from "react-router-dom";

function NavBarTwo() {
  return (
    <>
      <div className="NavBarTwo">
        <ul>
          <li className="HomeeShowing">
            <Link to="/">Home +</Link>
            <ul className="HomeHiding">
              <li>
                <Link>Home Simple</Link>
              </li>
              <li>
                <Link>Home Clean</Link>
              </li>
              <li>
                <Link>Home BestSelling</Link>
              </li>
              <li>
                <Link>Home BestSelling</Link>
              </li>
              <li>
                <Link>Home BestSelling</Link>
              </li>
              <li>
                <Link>Home BestSelling</Link>
              </li>
              <li>
                <Link>Home BestSelling</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li className="PagesShoing">
            <Link to="/Login">Pages +</Link>
            <ul className="hiding">
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/SignUp">SignUp</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Features</Link>
          </li>
          <li>
            <Link>Elements</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li className="PagesShoing">
            <Link>Categories +</Link>
            <ul id="Categories" className="hiding">
              <li>
                <Link to="/Mens">Mens Collection</Link>
              </li>
              <li>
                <Link to="/Jewelry">Jewellary</Link>
              </li>
              <li>
                <Link to="/Womens">Ladies Collection</Link>
              </li>
              <li>
                <Link to="/Electronics">Electronics</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBarTwo;
