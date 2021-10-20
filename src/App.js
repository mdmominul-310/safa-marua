import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import 'animate.css';
import Home from './Pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Services from './Pages/Services/Services';
import Contactus from './Pages/Contactus/Contactus';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Autthenticate-form/Login';
import SignUp from './Pages/Autthenticate-form/SignUp';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Hooks/PrivateRoute/PrivateRoute';
import Notfound from './Pages/Notfound/Notfound';
import Pricing from './Pages/Pricing/Pricing';
import SingleService from './Pages/Services/SingleService/SingleService';

function App() {
  return (
  <div> 
     <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/pricing/:serviceId">
            <SingleService></SingleService>
          </Route>
          <Route path="/pricing"> 
            <Pricing></Pricing>
          </Route>
          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>   
   </div>
  );
}

export default App;
