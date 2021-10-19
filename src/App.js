import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Pages/Contact Us/ContactUs";
import AuthProvider from "./Pages/context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Registration from "./Pages/Registration/Registration";
import Service from "./Pages/Service/Service";
import Footer from "./Pages/shared/Footer";
import Menubar from "./Pages/shared/Menubar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <PrivateRoute path="/service/:detailId">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <ContactUs></ContactUs>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
