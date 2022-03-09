import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();
//ako zelimo da postavimo neko inicijalno stanje, tipa punimo store iz nekog internog dok., to radimo ovde
//u reduceru se postavlja inicijalno stanje na prazan niz, a ovako ce se taj naiy odmah popuniti podacima
render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
