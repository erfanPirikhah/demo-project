import { useState } from "react";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import TabProvider from "./context/TabProviders";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <TabProvider>
        <Routes />
      </TabProvider>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
