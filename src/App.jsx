import React from "react";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import Body from "./components/Body/Body";

const App = () => {
  return (
    <Layout>
      <Body />
    </Layout>
  );
};

export default App;
