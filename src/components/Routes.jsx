import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./layout/Layout";
import Component from "../pages/Tabs";
import Tab2 from "../pages/Tabs2";
import Tab3 from "../pages/Tabs3";


const Routes = () => {


  return (
    <Layout>
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/tabs" Component={Component} />
        <Route path="/tabs2" Component={Tab2} />
        <Route path="/tabs3" Component={Tab3} />
      </Switch>
    </Layout>
  );
};

export default Routes;
