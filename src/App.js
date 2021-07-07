import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </>
  );
}

export default App;
