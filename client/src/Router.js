import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/common";
import Dashboard from "./screens/Dashboard";
import LoginScreen from "./screens/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/admins/login" component={LoginScreen} />
        <Route path="/admin" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
