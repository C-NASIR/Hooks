import React, { useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./components/context/Auh-Contex";

const App = (props) => {
  const authContext = useContext(AuthContext);
  const content = authContext.isAuth ? <Ingredients /> : <Auth />;
  return content;
};

export default App;
