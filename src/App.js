import React from "react";
import { Router, HashRouter, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
// import components

import SingleProductContainer from "./components/MyProduct/Product/SingleProductContainer";
import HeaderInfo from "./components/HeaderInfo/HeaderInfo";
import Footer from "./components/Footer/Footer";
import NuvbarCustom from "./components/HeaderInfo/NuvbarCustom/NuvbarCustom";
import Work from "./pages/Work";
import OrderPage from "./pages/OrderPage";

function App(props) {
  return (
    <HashRouter>
      <HeaderInfo />
      <NuvbarCustom />
      <Switch>
        <Route exact path="/">
          <Home store={props.store} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/product/:id">
          <SingleProductContainer store={props.store} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </HashRouter>
  );
}

export default App;
