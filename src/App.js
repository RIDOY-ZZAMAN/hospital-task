
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './componets/Home/Home';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import NotFound from './componets/NotFound/NotFound';
import Login from './componets/Login/Login';
import AuthProvider from './contex/AuthProvider';
import ContactUs from './componets/ContactUs/ContactUs';
import ServiceDetails from './componets/ServiceDetails/ServiceDetails';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';
import About from './componets/About/About';
import Appointment from './componets/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
