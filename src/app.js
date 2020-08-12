import React from 'react';

import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/addCart'
import {UserState} from './context/userContext/userState'
import CartItems from './components/carItems';
import Men from './components/mens'
import Header from './components/Home/header'
import Register from './components/auth/register'
import Login from './components/auth/login'



function App() {

 
  return (
    <UserState>

    <BrowserRouter>  

    <Header/>
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/login" component={Login}/>
        
        
        <Route exact path="/home" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/items" component={CartItems}/>
        <Route exact path="/men" component={Men}/> 
       
      </Switch>
      </BrowserRouter>
   </UserState>
 
  
  );
}

export default App;
