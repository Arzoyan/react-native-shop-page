import React from "react";
import { Provider } from "react-redux";
import Navigation from "./src/Navigation";
import store from "./src/store/rootStore";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
