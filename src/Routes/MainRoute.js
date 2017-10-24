import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Docs } from '../pages/Docs';
import { MyNavbar } from '../components';

export const MainRoute = () => {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/docs" component={Docs} />
      </div>
    </Router>
  )
}