import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './routes/Contact';
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training';
import Login from './routes/login';
import Purchase from './routes/purchase'
import Buy from './routes/buy';
import Users from './routes/users';
import Relogin from './routes/relogin';
import Dashboard from './routes/dashboard';
import QandA from './routes/QandA';
import forgotpassword from './routes/forgotpassword'
import { useEffect, useState } from 'react';
import Protectedroute from './protectedroute';



function App() {

  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <>
          <Navbar auth={auth1}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pricing' component={Pricing } />
        <Route exact path='/training' component={Training} />
        <Route exact path='/purchase' component={Purchase} />
        <Route exact path='/forgot' component={forgotpassword} />
        <Route exact path='/buy' component={Buy} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/relogin' component={Relogin} />
        <Route exact path='/QandA'component={QandA} />
        <Protectedroute exact path="/login" component={Login} auth={auth1}/>
        <Protectedroute exact path="/contact" component={Contact} auth={auth1}/>
        <Protectedroute exact path="/dashboard" component={Dashboard} auth={auth1}/>
      </Switch>
    </>
    
  );
}

export default App;
