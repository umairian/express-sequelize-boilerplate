import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Admin Dashboard</div>
      {props.routes.map((prop, key) => {
        if (
          !prop.redirect &&
          typeof prop.path !== undefined &&
          prop.path &&
          prop.name !== "Sign out" &&
          prop.sidebar
        ) {
          return (
            <NavLink
              to={`${prop.layout}${prop.path}`}
              className="sidebar-item"
              key={key}
            />
          );
        } else {
          return (
            prop.showInSidebar && (
              <Link key={prop.name} to={`${prop.layout}${prop.path}`}>
                <div className="sidebar-item">
                  {prop.name} {prop.showInSidebar}
                </div>
              </Link>
            )
          );
        }
      })}
    </div>
  );
};
