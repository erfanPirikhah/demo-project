import { useState } from "react";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import TabProvider from "./context/TabProviders";

function App() {
  return (
    <BrowserRouter>
      <TabProvider>
        <Routes />
      </TabProvider>
    </BrowserRouter>
  );
}

export default App;
