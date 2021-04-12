import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Hackathonpage } from "../Pages/HackathonPage";
import { Landingpage } from "../Pages/LandingPage";
import PageCounterProvider from '../Components/LandingPage/PageCounterContext/PageCounterContext';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <PageCounterProvider>
          <Route path="/" component={Landingpage} exact />
        </PageCounterProvider>
        <Route path="/hackathon" component={Hackathonpage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
