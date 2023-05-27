import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./layout/Layout";
import Tab2 from "../pages/Tabs2";
import Tab3 from "../pages/Tabs3";
import Form_1 from "../pages/Form_1";
import Form_2 from "../pages/Form_2";


const Routes = () => {


  return (
    <Layout>
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/tabs2" Component={Tab2} />
        <Route path="/tabs3" Component={Tab3} />
        <Route path="/form" Component={Form_1} />
        <Route path="/form2" Component={Form_2} />
      </Switch>
    </Layout>
  );
};

export default Routes;
