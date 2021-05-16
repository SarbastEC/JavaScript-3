import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Login from './views/Login';
import Register from './views/Register';
import ShippingAddress from './views/ShippingAddress';
import PlaceOrder from './views/PlaceOrder';
import OrderDetails from './views/OrderDetails';
import MyOrder from './views/MyOrder';
import {UserRoute} from './routes/UserRoute';
import {AdminRoute} from './routes/AdminRoute';
import AllOrders from './views/AllOrders';

function App() {
  return (
    <Router>

      <header>
        <Navbar/>
      </header>

      <main>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route exact path='/products/:id' component={ProductDetails}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <UserRoute exact path='/shipping' component={ShippingAddress}/>
            <UserRoute exact path='/placeorder' component={PlaceOrder}/>
            <UserRoute exact path='/orders/:id' component={OrderDetails}/>
            <UserRoute exact path='/myOrder' component={MyOrder}/>
            <AdminRoute exact path='/admin/orders' component={AllOrders}/>
          </Switch>
        </div>
      </main>
        
      <footer>
        <Footer/>
      </footer>
      
    </Router>
  );
}

export default App;
