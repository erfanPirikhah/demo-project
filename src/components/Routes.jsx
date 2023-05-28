import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./layout/Layout";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact Component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
