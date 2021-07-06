import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
