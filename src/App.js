
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AuthProvider from './Components/Context/AuthProvider';
import AddService from './Components/Dashboard/AddService/AddService';
import Dashboard from './Components/Dashboard/Dashboard';
import MangaeAllOrders from './Components/Dashboard/ManageAllOrders/MangaeAllOrders';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
// import ServiceDetails from './Components/Service/ServiceDetails';
import Services from './Components/Services/Services';
import Tracking from './Components/Tracking/Tracking';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          {/* <PrivateRoute path= "/services/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute> */}
          <PrivateRoute path='/placeorder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          {/* <Route path='/tracking'>
            <Tracking></Tracking>
          </Route> */}
          <Route path="/about">
            <About></About>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/tracking'>
            <Tracking></Tracking>
          </PrivateRoute>
          <PrivateRoute path='/addservice'>
            <AddService></AddService>
          </PrivateRoute>
          
          <PrivateRoute path='/myorders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/manageallorders'>
            <MangaeAllOrders></MangaeAllOrders>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
