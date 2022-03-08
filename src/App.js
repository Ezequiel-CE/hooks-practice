import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  const context = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!context.isLogged && <Login />}
        {context.isLogged && <Home />}
      </main>
    </>
  );
}

export default App;
