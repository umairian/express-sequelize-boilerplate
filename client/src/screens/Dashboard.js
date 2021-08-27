import React from "react";
import { Route, Switch } from "react-router-dom";
import { Sidebar } from "../components/common/Sidebar";
import routes from "../dashboard/routes";

export default function Dashboard(props) {
  const getRoutes = (routes) => {
    return routes.map((prop, index) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            key={index}
            path={`${prop.layout}${prop.path}`}
            render={(props) => <prop.component {...props} />}
          />
        );
      } else return null;
    });
  };

  return (
    <section className="dashboard">
      <Sidebar routes={routes} />
      <div className="content">
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </section>
  );
}
