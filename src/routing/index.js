import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




import Header from "../commonComponents/header/index";
// import NavbarOne from "../commonComponents/navbar/navbarOne";
// import NavBarTwo from "../commonComponents/navbar/navbarTwo";
import CenterContent from "../commonComponents/centerContent/centerContent";
import MainDashboard from "../commonComponents/dashboard/mainDashboard/mainDashboard";
import Footer from "../commonComponents/footer/index";
import Login from "../modules/login";
import SignUp from "../modules/signup/index";
import Mens from "../categories/mens/Mens";
import Womens from "../categories/womens/Womens";
import Jewelry from "../categories/jewelry/Jewelry";
import Electronics from "../categories/electrinics/Electroincs";




function Roucting() {
  return (
    <Router>
      <Header />
   
      {/* <NavbarOne />
      <NavBarTwo /> */}
      <Switch>
        <Route exact path="/">
          <CenterContent />
          <MainDashboard />
        </Route>
        <Route exact path="/Mens">
          {/* <CenterContent /> */}
          <Mens />
        </Route>
        <Route exact path="/Womens">
          {/* <CenterContent /> */}
          <Womens />
        </Route>
        <Route exact path="/Jewelry">
          {/* <CenterContent /> */}
          <Jewelry />
        </Route>
        <Route exact path="/Electronics">
          {/* <CenterContent /> */}
          <Electronics />
        </Route>
        
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Roucting;
