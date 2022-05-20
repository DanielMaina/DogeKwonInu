import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
// import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import { Main as MainLayout } from './layouts';

import {
  Home as HomeView,
  // Hub as HubView,
  // NotFound as NotFoundView,
} from './views';

import { Hub as HubView} from 'views/Home/components';

import { Customization as CustomizationView } from 'views/Home/components';

import { Pricings as PricingsView } from 'views/Home/components';

// import {
//   Hub as HubView
// } from './views/Home/components'

// import  { Features as FeaturesView }  from './views/Home/components/Hub/Hub.js'

// import {
//   Customization,
//   Hero,
//   Hub as HubView,
//   Partners,
//   Pricings,
// } from '././components';


const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />      
      <RouteWithLayout
        component={HubView}
        layout={MainLayout}
        path="/earn"
      />
      <RouteWithLayout
        component={CustomizationView}
        exact
        layout={MainLayout}
        path="/tokenomics"
      />
      <RouteWithLayout
        component={PricingsView}
        exact
        layout={MainLayout}
        path="/roadmap"
      />
      <Redirect to="/not-found" status="404" />
    </Switch>
  );
};

export default Routes;
