import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./layout/Layout";
import Component from "../pages/Tabs";


const Routes = () => {


  return (
    <Layout>
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/tabs" Component={Component} />
      </Switch>
    </Layout>
  );
};

export default Routes;
