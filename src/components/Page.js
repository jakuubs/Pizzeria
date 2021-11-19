import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Menu from "./Menu";
import PizzaPage from "./PizzaPage";
import About from "./About";
import Checkout from "./Checkout";
import ErrorPage from "./ErrorPage";
import "../styles/Page.css";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" component={Menu} />
        <Route path="/pizza/:id" component={PizzaPage} />
        <Route path="/about" component={About} />
        <Route path="/checkout" component={Checkout} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
