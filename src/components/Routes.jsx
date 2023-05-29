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
