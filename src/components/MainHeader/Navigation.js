import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const context = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLogged && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLogged && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLogged && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
