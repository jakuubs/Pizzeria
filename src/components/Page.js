import React from "react";
// import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Menu from "./Menu";
import About from "./About";
import ErrorPage from "./ErrorPage";
import "../styles/Page.css";

const Page = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Page;
