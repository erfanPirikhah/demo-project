import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./layout/Layout";
import NotFound from "../pages/NotFound";
import Auth from "../pages/Auth";

const Routes = () => {
  return (
    // <Switch>
    //   <Layout>
    //     <Switch>
    //       <Route path="/" exact Component={Home} />
    //     </Switch>
    //   </Layout>
    // </Switch>

    <Switch>
      <Route path="/" element={<Auth />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Switch>

    // <Switch>
    //   <Route path={["/auth"]}>
    //     <Layout>
    //       <Switch>
    //         <Route path="/" exact element={<>login page</>} />
    //       </Switch>
    //     </Layout>
    //   </Route>
    //   <Route path={["/dashboard"]}>
    //     <Layout>
    //       <Switch>
    //         <Route path="/dashboard" exact element={Home} />
    //       </Switch>
    //     </Layout>
    //   </Route>
    // </Switch>
  );
};

export default Routes;
