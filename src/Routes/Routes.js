import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Hackathonpage } from "../Pages/HackathonPage";
import { Landingpage } from "../Pages/LandingPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landingpage} exact />
        <Route path="/hackathon" component={Hackathonpage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
